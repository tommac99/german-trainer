const WORDS_KEY = "german-trainer-words";
const LEVEL_KEY = "german-trainer-level";
const LEVELS = ["A1", "A2", "B1", "B2"];
const BOX_DAYS = [0, 1, 2, 4, 8, 16, 32];
const LEARNT_BOX = 4;
const VOCAB_SIZE = 15;
const NEW_PER_ROUND = 4;
const PRONOUNS = ["ich", "du", "er", "wir", "ihr", "sie"];
const PERSONS_EN = ["I", "you", "he", "we", "you (plural)", "they"];
const REFLEXIVE = ["mich", "dich", "sich", "uns", "euch", "sich"];
const AUX = { hat: "habe hast hat haben habt haben", ist: "bin bist ist sind seid sind" };
const IRREGULAR = {
  sein: AUX.ist,
  haben: AUX.hat,
  werden: "werde wirst wird werden werdet werden",
  wissen: "weiß weißt weiß wissen wisst wissen",
  können: "kann kannst kann können könnt können",
  müssen: "muss musst muss müssen müsst müssen",
  dürfen: "darf darfst darf dürfen dürft dürfen",
  sollen: "soll sollst soll sollen sollt sollen",
  wollen: "will willst will wollen wollt wollen",
  mögen: "mag magst mag mögen mögt mögen",
};
const E_STEM = /([td]|chn|ffn|gn|dn|tm|dm|ckn)$/;
const STATUS = { new: "neu (new)", learning: "lerne ich (learning)", struggling: "schwierig (struggling)", learnt: "gelernt (learnt)" };

const parseWord = (level) => (line) => {
  const f = line.split("|").map((s) => s.trim());
  const [de, a, b] = f;
  if (f.length === 5) return { id: de, level, type: "verb", de: de.replace("~", ""), en: a, er: b, pret: f[3], perf: f[4] };
  if (f.length === 3 && /^(der|die|das) /.test(de)) return { id: de, level, type: "noun", de, pl: a, en: b };
  if (f.length === 2) return { id: de, level, type: "word", de, en: a };
};

const VOCAB = [];
const WORD = {};
LEVELS.forEach((level) => (WORDS[level] || "").trim().split("\n").map(parseWord(level)).forEach((w) => {
  if (!w || WORD[w.id]) return;
  WORD[w.id] = w;
  VOCAB.push(w);
}));
const VERBS = VOCAB.filter((w) => w.type === "verb");
const NOUN_ART = {};
const NOUN_PLURAL = {};
VOCAB.filter((w) => w.type === "noun").forEach((w) => {
  const [art, ...rest] = w.de.split(" ");
  const base = rest.join(" ");
  NOUN_ART[base] ||= { art, base, en: w.en };
  if (w.pl) NOUN_PLURAL[w.pl.replace(/^die /, "")] ||= { art, base, en: w.en, plural: w.pl.replace(/^die /, "") };
});

function presentForms(base, er) {
  if (IRREGULAR[base]) return IRREGULAR[base].split(" ");
  const short = !base.endsWith("en");
  const stem = base.slice(0, short ? -1 : -2);
  const e = E_STEM.test(stem) ? "e" : "";
  const ich = short && stem.endsWith("el") ? stem.slice(0, -2) + "le" : stem + "e";
  const changed = er === stem + e + "t" ? "" : stem.endsWith("t") ? er : er.replace(/t$/, "");
  const duStem = changed || stem + e;
  const du = /[sßzx]$/.test(duStem) ? duStem + "t" : duStem + "st";
  return [ich, du, er, base, stem + e + "t", base];
}

function pastForms(p) {
  if (p.endsWith("e")) return [p, p + "st", p, p + "n", p + "t", p + "n"];
  return [p, p + (/[tdsßz]$/.test(p) ? "est" : "st"), p, p + "en", p + (/[td]$/.test(p) ? "et" : "t"), p + "en"];
}

function conjugate(v) {
  const isReflexive = v.id.startsWith("sich ");
  const parts = v.id.replace(/^sich /, "").split("~");
  const base = parts.pop();
  const prefix = parts[0] || "";
  const withRest = (form, i) => [form, isReflexive ? REFLEXIVE[i] : "", prefix].filter(Boolean).join(" ");
  const [aux, ...rest] = v.perf.split(" ");
  const part = rest.pop();
  return {
    base, prefix, part,
    pres: presentForms(base, v.er.split(" ")[0]).map(withRest),
    pret: pastForms(v.pret.split(" ")[0]).map(withRest),
    perf: (AUX[aux] || AUX.hat).split(" ").map((a, i) => [a, isReflexive ? REFLEXIVE[i] : "", part].filter(Boolean).join(" ")),
  };
}
const conj = (v) => (v.forms ||= conjugate(v));

const wordLine = (w) =>
  w.type === "noun" ? `${w.de}${w.pl ? `, ${w.pl}` : ""}` : w.type === "verb" ? `${w.de}: ${w.er}, ${w.pret}, ${w.perf}` : w.de;

function conjTable(v) {
  const c = conj(v);
  return `<p class="ex"><b>${esc(v.de)}</b> <span class="en">(${esc(v.en)})</span></p>` + TBL(
    ["", 'Präsens <span class="en">(present)</span>', 'Präteritum <span class="en">(simple past)</span>', 'Perfekt <span class="en">(perfect)</span>'],
    PERSONS.map((p, i) => [p, c.pres[i], c.pret[i], c.perf[i]]),
  );
}

const wordCard = (w) =>
  `<p class="ex"><b>${esc(wordLine(w))}</b> <span class="en">(${esc(w.en)})</span> <span class="tag">${w.level}</span></p>${w.type === "verb" ? conjTable(w) : ""}`;

let formIndex;
function buildFormIndex() {
  formIndex = new Map();
  const add = (form, v, need) => form && formIndex.set(form.toLowerCase(), [...(formIndex.get(form.toLowerCase()) || []), { v, need }]);
  VERBS.forEach((v) => {
    const c = conj(v);
    [...c.pres, ...c.pret].forEach((f) => add(f.split(" ")[0], v, c.prefix));
    add(c.part, v, c.part.startsWith(c.prefix) ? "" : c.prefix);
    add(c.prefix + c.base, v, "");
  });
}

function verbsIn(text, max = 3) {
  if (!formIndex) buildFormIndex();
  const tokens = text.toLowerCase().match(/[a-zäöüß]+/g) || [];
  const found = tokens.flatMap((t) => (formIndex.get(t) || []).filter((x) => !x.need || tokens.includes(x.need)).map((x) => x.v));
  return [...new Set(found)].slice(0, max);
}

const verbTables = (text, max) => {
  const verbs = verbsIn(text, max);
  return verbs.length ? `<h4>Konjugation <span class="en">(conjugation)</span></h4>${verbs.map(conjTable).join("")}` : "";
};

const readWords = () => JSON.parse(localStorage.getItem(WORDS_KEY) || "{}");
const startLevel = () => localStorage.getItem(LEVEL_KEY) || "B1";

function wordStatus(s) {
  if (!s) return "new";
  if (s.box >= LEARNT_BOX) return "learnt";
  return s.wrong && s.box <= 1 ? "struggling" : "learning";
}

function scoreWord(id, ok) {
  const all = readWords();
  const now = Date.now();
  const s = all[id] || { box: 0, right: 0, wrong: 0, first: now };
  const box = !ok ? 0 : !all[id] ? LEARNT_BOX - 1 : Math.min(s.box + 1, BOX_DAYS.length - 1);
  const next = { ...s, box, right: s.right + ok, wrong: s.wrong + !ok, due: now + BOX_DAYS[box] * DAY_MS, learnt: s.learnt || (box >= LEARNT_BOX ? now : 0) };
  localStorage.setItem(WORDS_KEY, JSON.stringify({ ...all, [id]: next }));
}

function mixTypes(words) {
  const seen = {};
  return words.map((w) => [(seen[w.type] = (seen[w.type] || 0) + 1), w]).sort((a, b) => a[0] - b[0]).map(([, w]) => w);
}

function newWords() {
  const st = readWords();
  const i = LEVELS.indexOf(startLevel());
  return [...LEVELS.slice(i), ...LEVELS.slice(0, i)].flatMap((l) => mixTypes(VOCAB.filter((w) => w.level === l && !st[w.id])));
}

function vocabDeck(size) {
  const st = readWords();
  const now = Date.now();
  const seen = VOCAB.filter((w) => st[w.id]);
  const due = seen.filter((w) => st[w.id].due <= now).sort((a, b) => st[a.id].box - st[b.id].box || st[b.id].wrong - st[a.id].wrong);
  const fresh = newWords();
  const newCount = Math.min(NEW_PER_ROUND, Math.ceil(size / 3));
  const picks = [...due.slice(0, size - newCount), ...fresh.slice(0, newCount)];
  const later = seen.filter((w) => !picks.includes(w)).sort((a, b) => st[a.id].due - st[b.id].due);
  const words = [...picks, ...later, ...fresh.slice(newCount)].slice(0, size);
  return shuffle(words).map((w) => wordQuestion(w, !st[w.id]));
}

const unique = (xs) => [...new Set(xs)];
const pickOther = (xs, a, n = 3) => shuffle(unique(xs).filter((x) => x && x !== a)).slice(0, n);
const umlaut = (n) => n.replace(/(au|a|o|u)([^aouäöü]*)$/, (m, v, r) => ({ au: "äu", a: "ä", o: "ö", u: "ü" })[v] + r);
const pluralGuesses = (n) => ["e", "en", "n", "er", "s", ""].flatMap((end) => [n + end, umlaut(n) + end]).map((x) => "die " + x);
const sameType = (w) => {
  const near = VOCAB.filter((x) => x.type === w.type && x.level === w.level);
  return near.length > 10 ? near : VOCAB.filter((x) => x.type === w.type);
};

const GENDER_TIP = `<p><b>Der, die oder das?</b> <span class="en">(which article?)</span> Some endings tell you:</p>
  ${TBL(["Article", "Endings", "Examples"], [
    ["der", "-er (people who do something), -ling, -ismus, -ig, days, months, seasons", "der Lehrer <span class=\"en\">(teacher)</span>, der Frühling <span class=\"en\">(spring)</span>"],
    ["die", "-ung, -heit, -keit, -schaft, -ion, -tät, -ei, -ie, -ik, most nouns ending in -e", "die Zeitung <span class=\"en\">(newspaper)</span>, die Freiheit <span class=\"en\">(freedom)</span>"],
    ["das", "-chen, -lein, -um, -ment, Ge-, verbs used as nouns", "das Mädchen <span class=\"en\">(girl)</span>, das Essen <span class=\"en\">(food)</span>"],
  ])}<p>Plural is always <b>die</b>. Learn every noun with its article and plural, like <b>der Hund, die Hunde</b>.</p>`;

const startsWith = (s) => `Hint: it starts with <b>${esc(s.slice(0, Math.min(3, Math.ceil(s.length / 3))))}...</b>`;

function wordQuestion(w, isNew) {
  const kinds = { noun: ["meaning", "german", "article", "plural"], verb: ["meaning", "german", "pres", "pret", "perf"], word: ["meaning", "german"] }[w.type]
    .filter((k) => (k !== "article" || w.pl || !w.en.includes("(plural)")) && (k !== "plural" || w.pl));
  const kind = isNew ? "meaning" : kinds[Math.floor(Math.random() * kinds.length)];
  const base = { topic: "wortschatz", word: w.id, why: `${wordLine(w)} (${w.en}). Level ${w.level}.`, h: "", lesson: wordCard(w) + (w.type === "noun" ? GENDER_TIP : "") };
  return { ...base, ...QUESTION[kind](w), kind };
}

const display = (w) => w.de;
const QUESTION = {
  meaning: (w) => ({ ask: "Was bedeutet das? (What does it mean?)", q: display(w), en: "", a: w.en, opts: [w.en, ...pickOther(sameType(w).map((x) => x.en), w.en)], tip: `<p>${startsWith(w.en)}</p>` }),
  german: (w) => ({ ask: "Wie sagt man das auf Deutsch? (How do you say it in German?)", q: w.en, en: "", a: display(w), opts: [display(w), ...pickOther(sameType(w).map(display), display(w))], tip: `<p>${startsWith(display(w))}</p>` }),
  article: (w) => ({ ask: "Der, die oder das? (Which article?)", q: `[___] ${w.de.slice(4)}`, en: w.en, a: w.de.slice(0, 3), opts: ["der", "die", "das"], tip: GENDER_TIP }),
  plural: (w) => ({ ask: "Wie ist der Plural? (What is the plural?)", q: `${w.de}, [___]`, en: `${w.en}, plural`, a: w.pl, opts: [w.pl, ...pickOther(pluralGuesses(w.de.slice(4)), w.pl)], tip: GENDER_TIP }),
  pres: (w) => verbQuestion(w, "pres", [0, 1, 2, 4], "Präsens (present)"),
  pret: (w) => verbQuestion(w, "pret", [0, 1, 2, 3], "Präteritum (simple past)"),
  perf: (w) => verbQuestion(w, "perf", [0, 1, 2, 3], "Perfekt (perfect)"),
};

function verbQuestion(w, tense, persons, label) {
  const c = conj(w);
  const i = persons[Math.floor(Math.random() * persons.length)];
  const a = c[tense][i];
  const swappedAux = c.perf[i].replace(/^\S+/, (AUX[w.perf.split(" ")[0]] === AUX.ist ? AUX.hat : AUX.ist).split(" ")[i]);
  const wrong = tense === "perf" ? [swappedAux, ...pickOther(c.perf, a, 2)] : pickOther([...c[tense], c.pres[i], c.pret[i]], a);
  return {
    ask: `${label}: ${PRONOUNS[i]} ... (${w.de})`,
    q: `${PRONOUNS[i]} [___]`,
    en: `${PERSONS_EN[i]}: ${w.en}, ${label.split(" (")[1].slice(0, -1)}`,
    a, opts: [a, ...unique(wrong).filter((x) => x !== a)],
    tip: conjTable(w),
  };
}

const VERB_DRILL = { praesens: "pres", praeteritum: "pret", partizip: "perf", habensein: "perf" };
function verbDrills(topicId, n) {
  const st = readWords();
  const known = VERBS.filter((v) => st[v.id] || v.level === "A1" || v.level === "A2");
  return shuffle(known).slice(0, n).map((v) => ({ ...wordQuestion(v, false), ...QUESTION[VERB_DRILL[topicId]](v), topic: topicId }));
}

function vocabCounts(st = readWords()) {
  return LEVELS.map((level) => {
    const words = VOCAB.filter((w) => w.level === level);
    const by = { new: 0, learning: 0, struggling: 0, learnt: 0 };
    words.forEach((w) => by[wordStatus(st[w.id])]++);
    return { level, total: words.length, ...by };
  });
}

const struggling = (st = readWords()) =>
  VOCAB.filter((w) => wordStatus(st[w.id]) === "struggling").sort((a, b) => st[b.id].wrong - st[a.id].wrong);

T("wortschatz", G_WORDS, "Wortschatz", "vocabulary",
  `<p>Read the word out loud with its article. Picture a short sentence where you would use it.</p>`,
  `<p>Words you get wrong come back in the next round. Words you get right come back after 1, 2, 4, 8, 16 and 32 days <span class="en">(spaced repetition)</span>. After 4 right answers in a row a word counts as <b>gelernt</b> <span class="en">(learnt)</span>. Every round also brings in ${NEW_PER_ROUND} new words.</p>${GENDER_TIP}`,
  []);
