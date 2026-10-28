T("abschluss", G_REVIEW, "Abschlusstest: alles gemischt", "final test: all topics mixed (from Sophie's lesson)",
  `<p>No topic is named, so first ask: <b>which topic is this?</b> Verb position, haben/sein, case (Wen? Wem? Wo? Wohin?), Konjunktiv II, relative pronoun, Passiv? Then apply that rule and say the reason out loud.</p>`,
  `<p>This is Sophie's 15-question mixed test. After each answer the explanation names the topic. If you get one wrong, open the notes for that topic in the Notes tab.</p>
   <ul>
     <li><b>Verb position</b>: Wenn-clause first, then verb, then subject.</li>
     <li><b>haben or sein</b>: movement or change of state gets sein.</li>
     <li><b>Cases</b>: ask Wen/was? or Wem?, check the preposition, check Wo?/Wohin?</li>
     <li><b>Konjunktiv II</b>: wäre, hätte, würde + infinitive.</li>
     <li><b>Relative pronoun</b>: gender from the noun, case from the job in the clause.</li>
     <li><b>Passiv</b>: werden + Partizip II.</li>
   </ul>`,
  [
    ["Wenn ich morgen Zeit habe, ___ ich dich.", "If I have time tomorrow, I will visit you.", "besuche", "ich besuche|besucht|besuchen", "Verb position: the Wenn-clause is position 1, so the verb comes next: besuche ich."],
    ["Gestern ___ ich nach Innsbruck gegangen.", "Yesterday I went to Innsbruck.", "bin", "habe|war|hat", "haben or sein: gehen is movement, so sein: ich bin gegangen."],
    ["Ich gebe ___ Kind ___ Apfel.", "I give the child an apple.", "dem, einen", "das, einen|dem, einem|den, einem", "Cases: the person is Dativ (dem Kind), the thing is Akkusativ (einen Apfel, masculine)."],
    ["Das Buch liegt auf ___ Tisch.", "The book lies on the table.", "dem", "den|der|des", "Wo? or Wohin?: Wo? (position) is Dativ. Masculine: dem."],
    ["Ich lege das Buch auf ___ Tisch.", "I put the book on the table.", "den", "dem|der|des", "Wo? or Wohin?: Wohin? (movement to a goal) is Akkusativ. Masculine: den."],
    ["Ich sehe den alt___ Mann.", "I see the old man.", "-en", "-e|-er|-es", "Adjective ending: Akkusativ masculine: den alten Mann."],
    ["Wenn ich reich ___, ___ ich ein Haus kaufen.", "If I were rich, I would buy a house.", "wäre, würde", "bin, würde|wäre, wäre|wäre, werde", "Konjunktiv II: Wenn + wäre, then würde + infinitive."],
    ["Ich ___ gern mehr Zeit.", "I would like more time.", "hätte", "habe|hatte|würde", "Konjunktiv II: a wish, hätte gern."],
    ["Das ist der Mann, ___ ich gestern gesehen habe.", "That is the man whom I saw yesterday.", "den", "dass|dem|der", "Relative pronoun: points back to der Mann, Wen habe ich gesehen? Akkusativ: den."],
    ["Das Brot wird ___. (backen)", "The bread is baked.", "gebacken", "gebackt|backen|gebacket", "Passiv: werden + Partizip II. backen is irregular: gebacken."],
    ["Weil sie krank ___, bleibt sie zu Hause.", "Because she is ill, she stays at home.", "ist", "war|sei|sein", "Verb position: after weil the verb goes to the end of the clause: weil sie krank ist."],
    ["Er hilft ___ alten Frau.", "He helps the old woman.", "der", "die|den|dem", "Cases: helfen takes Dativ. Feminine Dativ: der alten Frau."],
    ["Die Kinder gehen in ___ Garten.", "The children go into the garden.", "den", "dem|der|das", "Wo? or Wohin?: gehen in = movement, Wohin? Akkusativ. Masculine: den."],
    ["Wenn ich besser Deutsch könnte, ___ ich mich leichter verständigen.", "If I could speak German better, I could communicate more easily.", "würde", "wurde|werde|wäre", "Konjunktiv II: main clause with würde + infinitive."],
    ["Das ist die Frau, mit ___ ich gesprochen habe.", "That is the woman with whom I spoke.", "der", "die|dem|den", "Relative pronoun: mit takes Dativ. Feminine Dativ: der."],
  ], "Mixed test: which topic is this?");

T("fehler", G_REVIEW, "Fehler finden (Hausaufgabe A)", "find and fix the mistake",
  `<p>Each sentence has a mistake. Say what the mistake is first (verb position? haben/sein? case? Wo/Wohin? Konjunktiv? dass vs den? Passiv?), then pick the corrected sentence.</p>`,
  `<p>This is Sophie's homework A. The usual suspects:</p>
   <ul>
     <li><b>Verb in position 2</b> after Wenn/Weil clauses and after Gestern/Morgen.</li>
     <li><b>sein</b> for gehen, fahren, kommen (not habe gegangen).</li>
     <li><b>Dativ after helfen</b> (dem Mann), Akkusativ after sehen (den Mann).</li>
     <li><b>Wo? Dativ, Wohin? Akkusativ</b> (liegt auf dem Tisch, stelle neben das Sofa).</li>
     <li><b>würde + infinitive</b> in the main clause after wenn + wäre/hätte.</li>
     <li><b>den, not dass</b>, when it points back to a noun.</li>
     <li><b>gebacken</b>, not gebackt.</li>
   </ul>`,
  [
    ["Wenn ich morgen Zeit habe, ich besuche dich.", "If I have time tomorrow, I visit you.", "Wenn ich morgen Zeit habe, besuche ich dich.", "Wenn ich morgen Zeit habe, ich dich besuche.|Wenn ich morgen habe Zeit, ich besuche dich.|Wenn ich morgen Zeit habe, besuche dich ich.", "After the Wenn-clause the verb comes immediately: besuche ich."],
    ["Gestern habe ich nach Hause gegangen.", "Yesterday I went home.", "Gestern bin ich nach Hause gegangen.", "Gestern habe ich nach Hause gegehen.|Gestern ich bin nach Hause gegangen.|Gestern bin ich nach Hause gegangt.", "gehen is movement: sein. The verb stays in position 2."],
    ["Ich gebe dem Mann den Apfel und helfe den Mann.", "I give the man the apple and help the man.", "Ich gebe dem Mann den Apfel und helfe dem Mann.", "Ich gebe den Mann den Apfel und helfe den Mann.|Ich gebe dem Mann der Apfel und helfe dem Mann.|Ich gebe dem Mann den Apfel und helfe der Mann.", "helfen takes Dativ: dem Mann."],
    ["Das Buch liegt auf den Tisch.", "The book lies on the table.", "Das Buch liegt auf dem Tisch.", "Das Buch legt auf dem Tisch.|Das Buch liegt auf der Tisch.|Das Buch liegt auf das Tisch.", "Wo? (position) is Dativ: auf dem Tisch."],
    ["Ich stelle die Lampe neben dem Sofa.", "I put the lamp next to the sofa.", "Ich stelle die Lampe neben das Sofa.", "Ich stehe die Lampe neben das Sofa.|Ich stelle die Lampe neben der Sofa.|Ich stelle die Lampe neben den Sofa.", "stellen = movement to a goal, Wohin? Akkusativ: neben das Sofa."],
    ["Wenn ich reich wäre, ich würde ein großes Haus kaufen.", "If I were rich, I would buy a big house.", "Wenn ich reich wäre, würde ich ein großes Haus kaufen.", "Wenn ich reich wäre, ich kaufe ein großes Haus.|Wenn ich reich bin, würde ich ein großes Haus kaufen.|Wenn ich reich würde sein, würde ich ein großes Haus kaufen.", "The Wenn-clause is position 1, so the verb comes directly: würde ich."],
    ["Das ist der Mann, dass ich gestern gesehen habe.", "That is the man whom I saw yesterday.", "Das ist der Mann, den ich gestern gesehen habe.", "Das ist der Mann, dem ich gestern gesehen habe.|Das ist der Mann, der ich gestern gesehen habe.|Das ist der Mann, das ich gestern gesehen habe.", "It points back to der Mann: Wen habe ich gesehen? Akkusativ: den."],
    ["Die junge Frau spricht mit dem nett Mann.", "The young woman talks to the nice man.", "Die junge Frau spricht mit dem netten Mann.", "Die junge Frau spricht mit den netten Mann.|Die junge Frau spricht mit dem nette Mann.|Die junge Frau spricht mit der netten Mann.", "mit takes Dativ; after dem the adjective ends in -en: dem netten Mann."],
    ["Das Brot wird gebackt.", "The bread is baked.", "Das Brot wird gebacken.", "Das Brot wird backen.|Das Brot ist gebackt.|Das Brot wird gebacket.", "backen is irregular: gebacken."],
    ["Weil ich bin müde, gehe ich schlafen.", "Because I am tired, I go to sleep.", "Weil ich müde bin, gehe ich schlafen.", "Weil ich müde bin, ich gehe schlafen.|Weil ich bin müde, ich gehe schlafen.|Weil müde ich bin, gehe ich schlafen.", "After weil the verb goes to the end; then the main clause starts with its verb."],
  ], "Pick the corrected sentence.");

T("uebersetzen", G_REVIEW, "Übersetzen: Englisch nach Deutsch", "translate: English to German (Sophie's homework B)",
  `<p>Translate in this order: 1. Which tense or mood? 2. Where does the verb go? 3. Which case after the verb or preposition? 4. Do the endings fit?</p>`,
  `<p>This is Sophie's homework B. If you hesitate, find the structure first:</p>
   <ul>
     <li>"If I had more money, I would buy..." = <b>Wenn ich ... hätte, würde ich ... kaufen</b>.</li>
     <li>"Yesterday I went to Vienna" = <b>Gestern bin ich nach Wien gefahren</b>.</li>
     <li>"The book is on / I put on the table" = <b>liegt auf dem</b> (Wo?), <b>lege auf den</b> (Wohin?).</li>
     <li>"the man whom I helped" = <b>dem</b>, because helfen takes Dativ.</li>
     <li>"is prepared by the cook" = <b>wird vom Koch zubereitet</b>.</li>
   </ul>`,
  [
    ["If I had more money, I would buy a house.", "", "Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.", "Wenn ich mehr Geld habe, würde ich ein Haus kaufen.|Wenn ich mehr Geld hätte, kaufe ich ein Haus.|Wenn ich mehr Geld wäre, würde ich ein Haus kaufen.", "Hypothetical: Wenn + hätte, würde + infinitive. haben takes hätte, not wäre."],
    ["Yesterday I went to Vienna.", "", "Gestern bin ich nach Wien gefahren.", "Gestern habe ich nach Wien gefahren.|Gestern ich bin nach Wien gefahren.|Gestern bin ich in Wien gefahren.", "Movement to a place: sein + gefahren. Gestern is position 1, so bin ich."],
    ["The book is on the table, and I put the pen on the table.", "", "Das Buch liegt auf dem Tisch, und ich lege den Stift auf den Tisch.", "Das Buch liegt auf den Tisch, und ich lege den Stift auf dem Tisch.|Das Buch legt auf dem Tisch, und ich liege den Stift auf den Tisch.|Das Buch liegt auf dem Tisch, und ich lege den Stift auf dem Tisch.", "Wo? liegt auf dem Tisch (Dativ). Wohin? lege auf den Tisch (Akkusativ)."],
    ["This is the man whom I helped yesterday.", "", "Das ist der Mann, dem ich gestern geholfen habe.", "Das ist der Mann, den ich gestern geholfen habe.|Das ist der Mann, dass ich gestern geholfen habe.|Das ist der Mann, der ich gestern geholfen habe.", "helfen takes Dativ, so the relative pronoun is dem."],
    ["The food is prepared by the cook.", "", "Das Essen wird vom Koch zubereitet.", "Das Essen wird vom Koch zubereiten.|Das Essen hat vom Koch zubereitet.|Das Essen werden vom Koch zubereitet.", "Passiv: wird + Partizip II. The doer is von + Dativ: vom Koch."],
    ["Although I am tired, I am going to work.", "", "Obwohl ich müde bin, gehe ich arbeiten.", "Obwohl ich bin müde, gehe ich arbeiten.|Obwohl ich müde bin, ich gehe arbeiten.|Obwohl ich müde bin, gehe ich zu arbeiten.", "Obwohl sends the verb to the end of its clause (bin). The main clause starts with its verb: gehe ich."],
    ["I would like to learn German better.", "", "Ich würde gern besser Deutsch lernen.", "Ich wäre gern besser Deutsch lernen.|Ich würde gern Deutsch besser gelernt.|Ich werde gern besser Deutsch lernen.", "A wish: würde gern + infinitive at the end."],
    ["I give the old woman a new book.", "", "Ich gebe der alten Frau ein neues Buch.", "Ich gebe die alte Frau ein neues Buch.|Ich gebe der alte Frau ein neues Buch.|Ich gebe der alten Frau einen neues Buch.", "The person is Dativ (der alten Frau, feminine). The thing is Akkusativ neuter (ein neues Buch)."],
  ], "Pick the correct German sentence.");
