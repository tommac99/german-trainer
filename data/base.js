const TOPICS = [];
const WORDS = {};
const G_WORDS = "Vocabulary (Wortschatz)";
const G_VERBS = "Verbs and tenses (Verben und Zeiten)";
const G_CASES = "Cases and prepositions (Fälle und Präpositionen)";
const G_LATEST = "Latest lesson (Letzte Stunde): Dativ oder Akkusativ";
const G_REVIEW = "Review (Wiederholung)";
const CASES = ["Nominativ", "Akkusativ", "Dativ", "Genitiv"];
const PERSONS = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];

// qs rows: [question, English, answer, wrong answers split by |, why, optional hint]
const T = (id, group, de, en, tip, lesson, qs, ask = "") => TOPICS.push({ id, group, de, en, tip, lesson, qs, ask });
const E = (de, en) => `<p class="ex"><b>${de}</b> <span class="en">(${en})</span></p>`;
const TBL = (head, rows) =>
  `<table><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
const CONJ = (verbs, forms) =>
  TBL(["", ...verbs], PERSONS.map((p, i) => [p, ...forms.map((f) => f.split(" ")[i])]));
const notCase = (a) => CASES.filter((c) => c !== a).join("|");
