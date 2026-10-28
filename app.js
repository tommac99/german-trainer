const LOG_KEY = "german-trainer-log";
const NAME_KEY = "german-trainer-name";
const ROUND_SIZE = 12;
const MIXED_SIZE = 20;
const DAY_MS = 86400000;

TOPICS.forEach((t) => {
  t.items = t.qs.map(([q, en, a, wrong, why, h]) => ({ topic: t.id, q, en, a, opts: [a, ...wrong.split("|")], why, h }));
});
const BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
const ALL = TOPICS.flatMap((t) => t.items);

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

function missedKeys() {
  const last = new Map();
  readLog().forEach((r) => last.set(keyOf(r), r.ok));
  return new Set([...last].filter(([, ok]) => !ok).map(([k]) => k));
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
}

function renderMenu() {
  $("#menu").hidden = false;
  $("#round").hidden = true;
  const stats = topicStats(readLog());
  const missed = ALL.filter((x) => missedKeys().has(keyOf(x))).length;
  const groups = [...new Set(TOPICS.map((t) => t.group))];
  $("#menu").innerHTML = `
    <h1>Deutsch üben <span class="en">(practice German)</span></h1>
    <p>Pick an answer. Press <b>Show rules or tips</b> if you need help before you answer. After a mistake you get the reason and the lesson. Every answer is saved so you can send the report to Sophie from the Progress tab.</p>
    <div class="modes">
      <button data-act="mixed"><b>Alles gemischt</b> <span class="en">(everything mixed)</span><small>${MIXED_SIZE} questions from all topics</small></button>
      <button data-act="missed"><b>Meine Fehler</b> <span class="en">(my mistakes)</span><small>${missed ? `${missed} questions you got wrong last time` : "Nothing yet. Play a round first."}</small></button>
    </div>
    ${groups.map((g) => `<h2>${g}</h2><div class="topics">${TOPICS.filter((t) => t.group === g).map((t) => {
      const s = stats[t.id];
      const score = s ? `${pct(s.right, s.total)}% right on the first try (${s.total} answered)` : "Not started";
      return `<div class="card"><b>${t.de}</b><div class="en">(${t.en})</div><small>${t.items.length} questions. ${score}</small>
        <div class="row"><button class="small" data-act="practice" data-id="${t.id}">Practice</button><button class="small ghost" data-act="notes" data-id="${t.id}">Notes</button></div></div>`;
    }).join("")}</div>`).join("")}`;
}

function poolFor(m) {
  if (m === "mixed") return ALL;
  if (m === "missed") return ALL.filter((x) => missedKeys().has(keyOf(x)));
  return BY_ID[m.replace("topic:", "")].items;
}

function start(m) {
  const pool = poolFor(m);
  if (!pool.length) return;
  mode = m;
  deck = shuffle(pool).slice(0, m === "mixed" ? MIXED_SIZE : ROUND_SIZE).map((x) => ({ ...x }));
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
    ${topic.ask ? `<div class="ask">${esc(topic.ask)}</div>` : ""}
    <div class="q">${hl(item.q)}</div>
    ${item.en ? `<div class="en trans">(${esc(item.en)})</div>` : ""}
    <button class="ghost" id="tipBtn" data-act="tip">Show rules or tips (H)</button>
    <div class="box" id="tip" hidden>${topic.tip}${item.h ? `<p><b>Hint:</b> ${esc(item.h)}</p>` : ""}</div>
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
    ${ok ? "" : `<details class="lesson" open><summary>Lesson: ${topic.de} <span class="en">(${topic.en})</span></summary>${topic.lesson}</details>`}
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
    <p class="chips">${TOPICS.map((t) => `<a href="#n-${t.id}">${t.de}</a>`).join("")}</p>
    ${TOPICS.map((t) => `<section id="n-${t.id}"><h2>${t.de} <span class="en">(${t.en})</span></h2>
      <div class="box">${t.tip}</div>${t.lesson}
      <p><button class="small" data-act="practice" data-id="${t.id}">Practice this topic</button></p></section>`).join("")}`;
}

function rangeLog() {
  const range = $("#range")?.value || "all";
  const since = range === "today" ? new Date().setHours(0, 0, 0, 0) : range === "week" ? Date.now() - 7 * DAY_MS : 0;
  return { range, log: readLog().filter((r) => r.t >= since) };
}

function buildReport(log, range) {
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
  const { range, log } = rangeLog();
  const first = log.filter((r) => !r.retry);
  const right = first.filter((r) => r.ok).length;
  const stats = topicStats(log);
  const wrong = log.filter((r) => !r.ok).reverse();
  const report = buildReport(log, range);
  $("#progressBody").innerHTML = !log.length ? "<p>No answers saved in this period yet. Play a round first.</p>" : `
    <div class="tiles"><div><b>${log.length}</b><span>answers</span></div><div><b>${pct(right, first.length)}%</b><span>right on the first try</span></div><div><b>${wrong.length}</b><span>mistakes</span></div></div>
    <h2>By topic <span class="en">(first tries)</span></h2>
    ${TBL(["Topic", "Right", "Total", "%", "Tips opened"], TOPICS.filter((t) => stats[t.id]).map((t) => [t.de, stats[t.id].right, stats[t.id].total, pct(stats[t.id].right, stats[t.id].total) + "%", stats[t.id].tips]))}
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
    if (confirm("Delete all saved answers? Copy or download the report first if Sophie needs it.")) {
      localStorage.removeItem(LOG_KEY);
      renderProgress();
    }
  },
};

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (b) ACTIONS[b.dataset.act](b);
});

document.addEventListener("input", (e) => {
  if (e.target.id !== "studentName") return;
  localStorage.setItem(NAME_KEY, e.target.value.trim());
  const { range, log } = rangeLog();
  $("#reportText").value = buildReport(log, range);
});

document.addEventListener("keydown", (e) => {
  if ($("#practice").hidden || $("#round").hidden || e.target.matches("textarea, select")) return;
  if (!answered && /^[1-4]$/.test(e.key) && +e.key <= shown.length) answer(+e.key - 1);
  else if (!answered && e.key.toLowerCase() === "h") toggleTip();
  else if (answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); $("#next").click(); }
});

renderNotes();
show("practice");
