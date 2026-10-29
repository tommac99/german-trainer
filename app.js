const LOG_KEY = "german-trainer-log";
const NAME_KEY = "german-trainer-name";
const ROUND_SIZE = 12;
const MIXED_SIZE = 20;
const MIXED_WORDS = 6;
const DRILLS = 4;
const WORD_LIST_MAX = 150;
const DAY_MS = 86400000;

TOPICS.forEach((t) => {
  t.items = t.qs.map(([q, en, a, wrong, why, h]) => ({ topic: t.id, q, en, a, opts: [a, ...wrong.split("|")], why, h }));
});
const BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
const ALL = TOPICS.flatMap((t) => t.items);
const GRAMMAR = TOPICS.filter((t) => t.qs.length);

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const hl = (s) => esc(s).replace(/\[(.+?)\]/g, "<mark>$1</mark>");
const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
const pad = (n) => String(n).padStart(2, "0");
const stamp = (t) => {
  const d = new Date(t);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
const pct = (r, t) => (t ? Math.round((r / t) * 100) : 0);

const readLog = () => JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
const addLog = (r) => localStorage.setItem(LOG_KEY, JSON.stringify([...readLog(), r]));
const keyOf = (x) => `${x.topic}|${x.q}`;

function lastResults() {
  const last = new Map();
  readLog().forEach((r) => last.set(keyOf(r), r.ok));
  return last;
}

const missedKeys = () => new Set([...lastResults()].filter(([, ok]) => !ok).map(([k]) => k));

function prioritise(items) {
  const last = lastResults();
  const rank = (x) => (last.get(keyOf(x)) === false ? 0 : last.has(keyOf(x)) ? 2 : 1);
  return shuffle(items).sort((a, b) => rank(a) - rank(b));
}

function topicStats(log) {
  const s = {};
  log.filter((r) => !r.retry).forEach((r) => {
    const o = (s[r.topic] ||= { right: 0, total: 0, tips: 0 });
    o.total++;
    o.right += +r.ok;
    o.tips += +r.tip;
  });
  return s;
}

let deck, idx, shown, answered, tipUsed, firstTryRight, firstTryTotal, streak, mode, roundMisses;

function show(tab) {
  document.querySelectorAll("main").forEach((m) => (m.hidden = m.id !== tab));
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("on", b.dataset.tab === tab));
  if (tab === "practice") renderMenu();
  if (tab === "progress") renderProgress();
  if (tab === "words") renderWords();
}

function renderMenu() {
  $("#menu").hidden = false;
  $("#round").hidden = true;
  const stats = topicStats(readLog());
  const missed = ALL.filter((x) => missedKeys().has(keyOf(x))).length;
  const groups = [...new Set(GRAMMAR.map((t) => t.group))];
  $("#menu").innerHTML = `
    <h1>Deutsch üben <span class="en">(practice German)</span></h1>
    <p>Pick an answer. Press <b>Show rules or tips</b> if you need help before you answer. After a mistake you get the reason and the lesson. Every answer is saved so you can send the report to Sophie from the Progress tab.</p>
    ${vocabMenu()}
    <h2>Grammatik <span class="en">(grammar)</span></h2>
    <div class="modes">
      <button data-act="mixed"><b>Alles gemischt</b> <span class="en">(everything mixed)</span><small>${MIXED_SIZE} questions: grammar you got wrong or have not seen yet, plus ${MIXED_WORDS} words</small></button>
      <button data-act="missed"><b>Meine Fehler</b> <span class="en">(my mistakes)</span><small>${missed ? `${missed} questions you got wrong last time` : "Nothing yet. Play a round first."}</small></button>
    </div>
    ${groups.map((g) => `<h2>${g}</h2><div class="topics">${GRAMMAR.filter((t) => t.group === g).map((t) => {
      const s = stats[t.id];
      const score = s ? `${pct(s.right, s.total)}% right on the first try (${s.total} answered)` : "Not started";
      return `<div class="card"><b>${t.de}</b><div class="en">(${t.en})</div><small>${t.items.length} questions. ${score}</small>
        <div class="row"><button class="small" data-act="practice" data-id="${t.id}">Practice</button><button class="small ghost" data-act="notes" data-id="${t.id}">Notes</button></div></div>`;
    }).join("")}</div>`).join("")}`;
}

function vocabMenu() {
  const counts = vocabCounts();
  const sum = (k) => counts.reduce((n, c) => n + c[k], 0);
  const st = readWords();
  const due = VOCAB.filter((w) => st[w.id]?.due <= Date.now()).length;
  return `<h2>Wortschatz <span class="en">(vocabulary, ${VOCAB.length} words A1 to B2)</span></h2>
    <div class="card">
      <b>Wörter üben <span class="en">(practice words)</span></b>
      <small>${due} words due for review, ${sum("struggling")} struggling, ${sum("learnt")} learnt. Each round mixes words you are learning with ${NEW_PER_ROUND} new ones.</small>
      <div class="bar"><i style="width:${pct(sum("learnt"), VOCAB.length)}%"></i></div>
      <small>${counts.map((c) => `${c.level}: ${c.learnt} / ${c.total} learnt`).join(" · ")}</small>
      <div class="row"><button class="small" data-act="vocab">Practice ${VOCAB_SIZE} words</button>
        <label><small>New words from</small> <select id="startLevel">${LEVELS.map((l) => `<option${l === startLevel() ? " selected" : ""}>${l}</option>`).join("")}</select></label>
        <button class="small ghost" data-act="tab" data-tab="words">Word list</button></div>
    </div>`;
}

function buildDeck(m) {
  if (m === "vocab") return vocabDeck(VOCAB_SIZE);
  if (m === "missed") return shuffle(ALL.filter((x) => missedKeys().has(keyOf(x)))).slice(0, ROUND_SIZE);
  if (m === "mixed") return shuffle([...prioritise(ALL).slice(0, MIXED_SIZE - MIXED_WORDS), ...vocabDeck(MIXED_WORDS)]);
  const id = m.replace("topic:", "");
  const drills = VERB_DRILL[id] ? verbDrills(id, DRILLS) : [];
  return shuffle([...prioritise(BY_ID[id].items).slice(0, ROUND_SIZE - drills.length), ...drills]);
}

function start(m) {
  const pool = buildDeck(m);
  if (!pool.length) return;
  mode = m;
  deck = pool.map((x) => ({ ...x }));
  idx = 0; firstTryRight = 0; firstTryTotal = deck.length; streak = 0; roundMisses = [];
  show("practice");
  $("#menu").hidden = true;
  $("#round").hidden = false;
  render();
}

function render() {
  if (idx >= deck.length) return finish();
  const item = deck[idx];
  const topic = BY_ID[item.topic];
  answered = false;
  tipUsed = false;
  shown = shuffle(item.opts);
  $("#round").innerHTML = `
    <div class="bar"><i style="width:${Math.round((idx / deck.length) * 100)}%"></i></div>
    <div class="meta"><span>${idx + 1} / ${deck.length} <span class="tag">${topic.de}</span>${item.retry ? '<span class="tag">Wiederholung (second try)</span>' : ""}</span><span>Serie (streak): ${streak}</span></div>
    ${item.ask || topic.ask ? `<div class="ask">${esc(item.ask || topic.ask)}</div>` : ""}
    <div class="q">${hl(item.q)}</div>
    ${item.en ? `<div class="en trans">(${esc(item.en)})</div>` : ""}
    <button class="ghost" id="tipBtn" data-act="tip">Show rules or tips (H)</button>
    <div class="box" id="tip" hidden>${item.tip || topic.tip + verbTables(item.q + " " + item.a)}${item.h ? `<p><b>Hint:</b> ${esc(item.h)}</p>` : ""}</div>
    <div class="opts">${shown.map((o, i) => `<button data-act="pick" data-i="${i}"><kbd>${i + 1}</kbd>${esc(o)}</button>`).join("")}</div>
    <div id="fb"></div>
    <p><button class="small ghost" data-act="home">Back to menu</button></p>`;
}

function toggleTip() {
  if (answered) return;
  const tip = $("#tip");
  tip.hidden = !tip.hidden;
  if (!tip.hidden) tipUsed = true;
  $("#tipBtn").textContent = tip.hidden ? "Show rules or tips (H)" : "Hide rules or tips (H)";
}

function answer(i) {
  if (answered) return;
  answered = true;
  const item = deck[idx];
  const mine = shown[i];
  const ok = mine === item.a;
  addLog({ t: Date.now(), topic: item.topic, q: item.q, en: item.en, mine, a: item.a, ok, tip: tipUsed, retry: !!item.retry });
  if (item.word && !item.retry) scoreWord(item.word, ok);
  if (ok) {
    streak++;
    if (!item.retry) firstTryRight++;
  } else {
    streak = 0;
    if (!item.retry) {
      roundMisses.push(item);
      deck.push({ ...item, retry: true });
    }
  }
  document.querySelectorAll(".opts button").forEach((b, j) => {
    b.disabled = true;
    if (shown[j] === item.a) b.classList.add("ok");
    else if (j === i) b.classList.add("bad");
  });
  $("#tipBtn").disabled = true;
  const topic = BY_ID[item.topic];
  $("#fb").innerHTML = `
    <div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "✓ Richtig (correct)" : `✗ Nicht ganz (not quite). Correct: ${esc(item.a)}`}</b><br>${esc(item.why)}</div>
    ${ok ? "" : `<details class="lesson" open><summary>Lesson: ${topic.de} <span class="en">(${topic.en})</span></summary>${item.lesson || topic.lesson + verbTables(item.q + " " + item.a)}</details>`}
    <button class="next" data-act="next" id="next">Weiter (next, Enter)</button>`;
  $("#next").focus();
}

function finish() {
  $("#round").innerHTML = `
    <h1>Fertig <span class="en">(done)</span></h1>
    <p><b>${firstTryRight} / ${firstTryTotal}</b> right on the first try.</p>
    ${roundMisses.length ? `<h2>To review</h2>${TBL(["Question", "Correct answer"], roundMisses.map((m) => [hl(m.q) + (m.en ? ` <span class="en">(${esc(m.en)})</span>` : ""), esc(m.a)]))}` : "<p>Clean round.</p>"}
    <button class="next" data-act="home">Back to menu</button>
    <button class="next" data-act="again">Again</button>
    <button class="next ghost" data-act="tab" data-tab="progress">Progress and export</button>`;
}

function renderNotes() {
  $("#notes").innerHTML = `
    <h1>Notizen <span class="en">(notes)</span></h1>
    <p>All the lessons from Sophie's handouts and chats, one topic at a time.</p>
    <p class="chips">${GRAMMAR.map((t) => `<a href="#n-${t.id}">${t.de}</a>`).join("")}</p>
    ${GRAMMAR.map((t) => `<section id="n-${t.id}"><h2>${t.de} <span class="en">(${t.en})</span></h2>
      <div class="box">${t.tip}</div>${t.lesson}
      ${t.group === G_VERBS ? `<details class="lesson"><summary>Alle Formen der Verben in diesem Thema <span class="en">(all forms of the verbs in this topic)</span></summary>${verbTables(t.items.map((x) => x.q + " " + x.a).join(" "), 40)}</details>` : ""}
      <p><button class="small" data-act="practice" data-id="${t.id}">Practice this topic</button></p></section>`).join("")}`;
}

function renderWords() {
  $("#words").innerHTML = `
    <h1>Wörter <span class="en">(words)</span></h1>
    <p>All ${VOCAB.length} words from A1 to B2. Open a verb to see every form with ich, du, er, wir, ihr and sie.</p>
    <p class="row"><input id="wordSearch" placeholder="Search German or English" autocomplete="off">
      <select id="wordLevel"><option value="">All levels</option>${LEVELS.map((l) => `<option>${l}</option>`).join("")}</select>
      <select id="wordStatus"><option value="">Any status</option>${Object.entries(STATUS).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select></p>
    <div id="wordList" class="words"></div>`;
  renderWordList();
}

function renderWordList() {
  const term = $("#wordSearch").value.trim().toLowerCase();
  const level = $("#wordLevel").value;
  const status = $("#wordStatus").value;
  const st = readWords();
  const hits = VOCAB.filter((w) => (!level || w.level === level) && (!status || wordStatus(st[w.id]) === status)
    && (!term || (w.de + " " + (w.pl || "") + " " + w.en).toLowerCase().includes(term)));
  const row = (w) => {
    const head = `<b>${esc(wordLine(w))}</b> <span class="en">(${esc(w.en)})</span> <span class="tag">${w.level}</span> <span class="tag">${STATUS[wordStatus(st[w.id])]}</span>`;
    return w.type === "verb" ? `<details><summary>${head}</summary>${conjTable(w)}</details>` : `<div class="w">${head}</div>`;
  };
  $("#wordList").innerHTML = `<p class="en">${hits.length} words${hits.length > WORD_LIST_MAX ? `, showing the first ${WORD_LIST_MAX}. Search to narrow it down.` : ""}</p>${hits.slice(0, WORD_LIST_MAX).map(row).join("")}`;
}

function rangeLog() {
  const range = $("#range")?.value || "all";
  const since = range === "today" ? new Date().setHours(0, 0, 0, 0) : range === "week" ? Date.now() - 7 * DAY_MS : 0;
  return { range, since, log: readLog().filter((r) => r.t >= since) };
}

function vocabProgress(since) {
  const st = readWords();
  const ids = Object.keys(st);
  return {
    counts: vocabCounts(st),
    started: ids.filter((id) => st[id].first >= since).length,
    learnt: ids.filter((id) => st[id].learnt && st[id].learnt >= since).length,
    hard: struggling(st).slice(0, 20).map((w) => ({ ...w, wrong: st[w.id].wrong })),
  };
}

function buildReport(log, range, since) {
  const v = vocabProgress(since);
  const first = log.filter((r) => !r.retry);
  const right = first.filter((r) => r.ok).length;
  const tips = first.filter((r) => r.tip).length;
  const stats = topicStats(log);
  const period = { today: "Today", week: "Last 7 days", all: "All answers" }[range];
  const lines = [
    `German practice report for Sophie`, `Student: ${localStorage.getItem(NAME_KEY) || "(name not set)"}`, `Created: ${stamp(Date.now())}`, `Period: ${period}`, "",
    `Summary: ${log.length} answers, ${first.length} first tries, ${right} right on the first try (${pct(right, first.length)}%). Tips opened on ${tips} first tries.`, "",
    "By topic (right on the first try):",
    ...TOPICS.filter((t) => stats[t.id]).map((t) => `${t.de}: ${stats[t.id].right} / ${stats[t.id].total} (${pct(stats[t.id].right, stats[t.id].total)}%), tips ${stats[t.id].tips}`), "",
    "Vocabulary (Wortschatz):",
    `New words practised: ${v.started}. Words learnt (right 4 times in a row, spaced over days): ${v.learnt}.`,
    ...v.counts.map((c) => `${c.level}: ${c.learnt} learnt, ${c.learning} learning, ${c.struggling} struggling, ${c.new} not started (of ${c.total})`),
    `Words I struggle with: ${v.hard.length ? v.hard.map((w) => `${w.de} (${w.en}) wrong ${w.wrong}x`).join(", ") : "none"}`, "",
    "Mistakes (what I answered, what is correct):",
  ];
  TOPICS.forEach((t) => {
    const wrong = log.filter((r) => r.topic === t.id && !r.ok);
    if (!wrong.length) return;
    lines.push("", t.de);
    wrong.forEach((r, i) => lines.push(`  ${i + 1}. ${r.q}${r.en ? ` (${r.en})` : ""}`, `     I answered: ${r.mine}. Correct: ${r.a}.${r.tip ? " Tip opened." : ""}`));
  });
  if (log.every((r) => r.ok)) lines.push("No mistakes in this period.");
  return lines.join("\n");
}

function buildCsv(log) {
  const cell = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const head = ["Date", "Topic", "Question", "Translation", "My answer", "Correct answer", "Result", "Tip opened", "Second try"];
  const rows = log.map((r) => [stamp(r.t), BY_ID[r.topic]?.de ?? r.topic, r.q, r.en, r.mine, r.a, r.ok ? "right" : "wrong", r.tip ? "yes" : "no", r.retry ? "yes" : "no"]);
  return "﻿" + [head, ...rows].map((r) => r.map(cell).join(",")).join("\r\n");
}

function download(name, text, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function renderProgress() {
  const keep = $("#range")?.value || "all";
  $("#progress").innerHTML = `
    <h1>Fortschritt <span class="en">(progress and export)</span></h1>
    <p><label>Period <select id="range"><option value="all">All answers</option><option value="week">Last 7 days</option><option value="today">Today</option></select></label></p>
    <div id="progressBody"></div>`;
  $("#range").value = keep;
  $("#range").onchange = renderProgressBody;
  renderProgressBody();
}

function renderProgressBody() {
  const { range, since, log } = rangeLog();
  const v = vocabProgress(since);
  const first = log.filter((r) => !r.retry);
  const right = first.filter((r) => r.ok).length;
  const stats = topicStats(log);
  const wrong = log.filter((r) => !r.ok).reverse();
  const report = buildReport(log, range, since);
  $("#progressBody").innerHTML = !log.length ? "<p>No answers saved in this period yet. Play a round first.</p>" : `
    <div class="tiles"><div><b>${log.length}</b><span>answers</span></div><div><b>${pct(right, first.length)}%</b><span>right on the first try</span></div><div><b>${wrong.length}</b><span>mistakes</span></div></div>
    <h2>By topic <span class="en">(first tries)</span></h2>
    ${TBL(["Topic", "Right", "Total", "%", "Tips opened"], TOPICS.filter((t) => stats[t.id]).map((t) => [t.de, stats[t.id].right, stats[t.id].total, pct(stats[t.id].right, stats[t.id].total) + "%", stats[t.id].tips]))}
    <h2>Wortschatz <span class="en">(vocabulary: ${v.started} new words practised, ${v.learnt} learnt in this period)</span></h2>
    ${TBL(["Level", "Learnt", "Learning", "Struggling", "Not started", "Total"], v.counts.map((c) => [c.level, c.learnt, c.learning, c.struggling, c.new, c.total]))}
    ${v.hard.length ? `<h4>Words I struggle with</h4>${TBL(["Word", "English", "Level", "Times wrong"], v.hard.map((w) => [esc(wordLine(w)), esc(w.en), w.level, w.wrong]))}` : ""}
    <h2>Mistakes <span class="en">(my answer and the correct one)</span></h2>
    ${wrong.length ? TBL(["When", "Topic", "Question", "I answered", "Correct"], wrong.map((r) => [stamp(r.t), BY_ID[r.topic]?.de ?? r.topic, hl(r.q) + (r.en ? ` <span class="en">(${esc(r.en)})</span>` : ""), esc(r.mine), esc(r.a)])) : "<p>No mistakes in this period.</p>"}
    <div class="noprint">
      <h2>Send to Sophie</h2>
      <p>Copy the text and paste it into your chat or email, or download the CSV (opens in Excel or Numbers) with every answer, right and wrong.</p>
      <p><label>Your name <input id="studentName" value="${esc(localStorage.getItem(NAME_KEY) || "")}" placeholder="shown in the report"></label></p>
      <button class="next" data-act="copy">Copy report</button>
      <button class="next" data-act="csv">Download CSV</button>
      <button class="next ghost" data-act="print">Print or save as PDF</button>
      <span id="copied" class="en"></span>
      <textarea id="reportText" readonly rows="12">${esc(report)}</textarea>
      <p><button class="small ghost danger" data-act="clear">Delete all saved answers</button></p>
    </div>`;
}

function copyReport() {
  const ta = $("#reportText");
  ta.select();
  const done = () => ($("#copied").textContent = " Copied.");
  if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(done, () => { document.execCommand("copy"); done(); });
  else { document.execCommand("copy"); done(); }
}

const ACTIONS = {
  tab: (b) => show(b.dataset.tab),
  practice: (b) => start("topic:" + b.dataset.id),
  mixed: () => start("mixed"),
  missed: () => start("missed"),
  vocab: () => start("vocab"),
  notes: (b) => { show("notes"); document.getElementById("n-" + b.dataset.id).scrollIntoView(); },
  home: () => show("practice"),
  again: () => start(mode),
  tip: toggleTip,
  pick: (b) => answer(+b.dataset.i),
  next: () => { idx++; render(); },
  copy: copyReport,
  csv: () => download(`german-answers-${stamp(Date.now()).slice(0, 10)}.csv`, buildCsv(rangeLog().log), "text/csv;charset=utf-8"),
  print: () => window.print(),
  clear: () => {
    if (confirm("Delete all saved answers and word progress? Copy or download the report first if Sophie needs it.")) {
      localStorage.removeItem(LOG_KEY);
      localStorage.removeItem(WORDS_KEY);
      renderProgress();
    }
  },
};

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (b) ACTIONS[b.dataset.act](b);
});

document.addEventListener("input", (e) => {
  if (["wordSearch", "wordLevel", "wordStatus"].includes(e.target.id)) return renderWordList();
  if (e.target.id === "startLevel") return localStorage.setItem(LEVEL_KEY, e.target.value);
  if (e.target.id !== "studentName") return;
  localStorage.setItem(NAME_KEY, e.target.value.trim());
  const { range, since, log } = rangeLog();
  $("#reportText").value = buildReport(log, range, since);
});

document.addEventListener("keydown", (e) => {
  if ($("#practice").hidden || $("#round").hidden || e.target.matches("textarea, select, input")) return;
  if (!answered && /^[1-4]$/.test(e.key) && +e.key <= shown.length) answer(+e.key - 1);
  else if (!answered && e.key.toLowerCase() === "h") toggleTip();
  else if (answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); $("#next").click(); }
});

renderNotes();
show("practice");
