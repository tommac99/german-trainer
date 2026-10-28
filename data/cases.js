const ARTICLE_TABLE = TBL(["", "der-words (masculine)", "die-words (feminine)", "das-words (neuter)", "Plural", "Last letters"], [
  ["<b>Nominativ</b> (Wer/was?)", "der", "die", "das", "die", "r e s e"],
  ["<b>Akkusativ</b> (Wen/was?)", "<b>den</b>", "die", "das", "die", "<b>n</b> e s e"],
  ["<b>Dativ</b> (Wem?)", "dem", "der", "dem", "den + n on the noun", "m r m n"],
  ["<b>Genitiv</b> (Wessen?)", "des + s on the noun", "der", "des + s on the noun", "der", "s r s r"],
]);

T("faelle", G_CASES, "Die vier Fälle: welcher Fall?", "the four cases: which case is it?",
  `<p>A case is the <b>job</b> a noun does in the sentence. <b>Nominativ</b> (Wer/was? who/what?) is the doer. <b>Akkusativ</b> (Wen/was? whom/what?) is what the action hits. <b>Dativ</b> (Wem? to/for whom?) is who receives it. <b>Genitiv</b> (Wessen? whose?) is belonging.</p>
   <p>Only the <b>masculine</b> changes from Nominativ to Akkusativ: der becomes den. Feminine, neuter and plural stay the same.</p>`,
  `${TBL(["Fall", "Question", "Job (in English)", "Example"], [
     ["Nominativ", "Wer? Was? (Who? What?)", "The doer, the subject", "Der Mann liest. (The man reads.)"],
     ["Akkusativ", "Wen? Was? (Whom? What?)", "What the action hits", "Ich sehe den Mann. (I see the man.)"],
     ["Dativ", "Wem? (To/for whom?)", "Who receives it", "Ich gebe dem Mann das Buch. (I give the man the book.)"],
     ["Genitiv", "Wessen? (Whose?)", "Belonging, of or 's", "Das Auto des Mannes. (The man's car.)"]])}
   <h4>You already know this from English pronouns</h4>
   <p>You say "I see <b>him</b>", never "I see he". German does that for every article, not just pronouns.</p>
   ${TBL(["Nominativ (doer)", "Akkusativ (hit)", "Dativ (to/for)", "Possessive (belonging)"], [
     ["ich (I)", "mich (me)", "mir ((to) me)", "mein (my)"], ["du (you)", "dich (you)", "dir ((to) you)", "dein (your)"],
     ["er (he)", "ihn (him)", "ihm ((to) him)", "sein (his)"], ["sie (she)", "sie (her)", "ihr ((to) her)", "ihr (her)"],
     ["wir (we)", "uns (us)", "uns ((to) us)", "unser (our)"], ["sie (they)", "sie (them)", "ihnen ((to) them)", "ihr (their)"]])}
   <h4>The article table</h4>
   ${ARTICLE_TABLE}
   <p><b>Three steps for any sentence:</b> 1. Find the verb or preposition. 2. Ask the question (who does it, what gets hit, who receives it, whose). 3. Look up the gender row (der, die or das) in the table.</p>
   <p>After sein, werden and bleiben the noun stays Nominativ: <i>Er bleibt mein Freund.</i> (He stays my friend.)</p>`,
  [
    ["[Der Mann] liest ein Buch.", "The man reads a book.", "Nominativ", notCase("Nominativ"), "Wer liest? Der Mann. He does the action, so he is the subject."],
    ["Ich sehe [den Mann].", "I see the man.", "Akkusativ", notCase("Akkusativ"), "Wen sehe ich? Den Mann. The action hits him. Masculine der became den."],
    ["Ich helfe [dem Mann].", "I help the man.", "Dativ", notCase("Dativ"), "helfen always takes Dativ. Think: I give help to him."],
    ["Das ist das Auto [des Mannes].", "That is the man's car.", "Genitiv", notCase("Genitiv"), "Wessen Auto? Belonging, English 's or of. Masculine Genitiv: des, and the noun gets s."],
    ["Die Frau gibt [dem Kind] einen Apfel.", "The woman gives the child an apple.", "Dativ", notCase("Dativ"), "Wem gibt sie? Dem Kind. The receiver is Dativ."],
    ["Die Frau gibt dem Kind [einen Apfel].", "The woman gives the child an apple.", "Akkusativ", notCase("Akkusativ"), "Was gibt sie? Einen Apfel. The thing given is Akkusativ (ein became einen)."],
    ["Wir fahren mit [dem Bus].", "We go by bus.", "Dativ", notCase("Dativ"), "mit always takes Dativ."],
    ["Er geht durch [den Park].", "He walks through the park.", "Akkusativ", notCase("Akkusativ"), "durch always takes Akkusativ."],
    ["[Die Lehrerin] erklärt die Aufgabe.", "The teacher explains the task.", "Nominativ", notCase("Nominativ"), "Feminine looks the same in Nominativ and Akkusativ. Ask who does the action: die Lehrerin explains, so she is the subject."],
    ["Die Lehrerin erklärt [die Aufgabe].", "The teacher explains the task.", "Akkusativ", notCase("Akkusativ"), "The task is what gets explained. It looks like Nominativ, but it is not the doer."],
    ["Das Buch gehört [meiner Schwester].", "The book belongs to my sister.", "Dativ", notCase("Dativ"), "gehören takes Dativ. Feminine Dativ ending: meiner."],
    ["Das Kleid gefällt [mir].", "I like the dress (literally: the dress pleases me).", "Dativ", notCase("Dativ"), "gefallen takes Dativ. mir is the Dativ of ich. German flips it: the dress is the doer, I am the receiver."],
    ["Er bleibt [mein Freund].", "He stays my friend.", "Nominativ", notCase("Nominativ"), "After sein, werden and bleiben the noun stays Nominativ. It describes the subject, it is not an object."],
    ["Die Namen [der Studenten] stehen auf der Liste.", "The names of the students are on the list.", "Genitiv", notCase("Genitiv"), "Wessen Namen? Of the students. Plural Genitiv: der."],
    ["Ich helfe [dem Obdachlosen].", "I help the homeless man.", "Dativ", notCase("Dativ"), "Wem helfe ich? Dem Obdachlosen. helfen takes Dativ."],
    ["Ich beobachte [die Vögel].", "I watch the birds.", "Akkusativ", notCase("Akkusativ"), "Wen oder was beobachte ich? Die Vögel. They are what the action hits."],
  ], "Which case is the marked part?");

T("fragen", G_CASES, "Wen, wem oder was? Die Fragemethode", "Sophie's question method",
  `<p>Before you pick an article, <b>ask the question aloud</b>. <b>Wer/was?</b> = Nominativ. <b>Wen/was?</b> = Akkusativ. <b>Wem?</b> = Dativ. <b>Wessen?</b> = Genitiv.</p>
   <p>With a preposition, put it in front of the question word: <i>Für wen?</i> (for whom, Akkusativ), <i>Mit wem?</i> (with whom, Dativ).</p>`,
  `<p>The cases are numbered in German: <b>1. Fall Nominativ, 2. Fall Genitiv, 3. Fall Dativ, 4. Fall Akkusativ</b>. Sophie uses these numbers, so know them.</p>
   ${E("Ich helfe dem Obdachlosen. Wem helfe ich?", "I help the homeless man. Whom do I help? (Dativ)")}
   ${E("Ich beobachte die Vögel. Wen oder was beobachte ich?", "I watch the birds. Whom or what do I watch? (Akkusativ)")}
   <h4>Prepositions pull their own case</h4>
   <p><b>durch, für, gegen, ohne, um</b> (through, for, against, without, around) always take Akkusativ.</p>
   ${E("Ich gehe für einen Freund zum Markt. Für wen?", "I go to the market for a friend. For whom?")}
   <p><b>aus, bei, mit, nach, seit, von, zu</b> (out of, at, with, after, since, from, to) always take Dativ.</p>
   ${E("Zu wem gehst du?", "Who are you going to?")}
   ${E("Ich esse bei mir zu Hause. Bei wem zu Hause esse ich?", "I eat at my place. At whose place do I eat?")}
   ${E("Ich trinke ein Bier mit meinem Freund. Mit wem? Was?", "I drink a beer with my friend. With whom? What?")}
   <p>The same sentence has two questions: <i>Mit wem</i> trinke ich? Mit meinem Freund (Dativ, because of mit). <i>Was</i> trinke ich? Ein Bier (Akkusativ, the thing).</p>
   <p>Pronouns: <i>Ich lade dich zu meinem Geburtstag ein.</i> (I invite you to my birthday.) einladen takes Akkusativ, so <b>dich</b>, not mir.</p>`,
  [
    ["Ich helfe dem Obdachlosen. ___ helfe ich?", "I help the homeless man. Whom do I help?", "Wem", "Wen|Wer|Wessen", "helfen takes Dativ, so the question is Wem? (to whom)."],
    ["Ich beobachte die Vögel. ___ beobachte ich?", "I watch the birds. Whom or what?", "Wen oder was", "Wem|Wer|Wessen", "beobachten takes Akkusativ: Wen oder was?"],
    ["Ich gehe für einen Freund zum Markt. Für ___ gehe ich zum Markt?", "I go to the market for a friend. For whom?", "wen", "wem|wer|wessen", "für always takes Akkusativ, so Für wen? (einen Freund)."],
    ["Zu ___ gehst du?", "Who are you going to?", "wem", "wen|wer|wessen", "zu always takes Dativ, so Zu wem?"],
    ["Ich esse bei mir zu Hause. Bei ___ zu Hause esse ich?", "I eat at my place. At whose place?", "wem", "wen|wer|wessen", "bei takes Dativ: Bei wem? The answer is mir (Dativ of ich)."],
    ["Ich trinke ein Bier mit meinem Freund. Mit ___ trinke ich ein Bier?", "I drink a beer with my friend. With whom?", "wem", "wen|wer|was", "mit takes Dativ: Mit wem? Mit meinem Freund."],
    ["Ich trinke ein Bier mit meinem Freund. ___ trinke ich mit meinem Freund?", "What do I drink with my friend?", "Wen oder was", "Wem|Wer|Wessen", "The thing that gets drunk (ein Bier) is the Akkusativ object: Wen oder was?"],
    ["Ich lade ___ zu meinem Geburtstag ein. (you)", "I invite you to my birthday.", "dich", "dir|du|dein", "einladen takes Akkusativ: dich. Compare helfen: ich helfe dir."],
    ["Ich helfe ___. (you)", "I help you.", "dir", "dich|du|dein", "helfen takes Dativ: dir."],
    ["Der Mann dort ist mein Lehrer. ___ steht dort?", "The man there is my teacher. Who stands there?", "Wer", "Wen|Wem|Wessen", "The doer is the Nominativ: Wer?"],
    ["Das ist das Auto des Lehrers. ___ Auto ist das?", "That is the teacher's car. Whose car is that?", "Wessen", "Wem|Wen|Wer", "Genitiv answers Wessen? (whose)."],
    ["Which case is the 3rd case (3. Fall)?", "", "Dativ", "Akkusativ|Genitiv|Nominativ", "German order: 1 Nominativ, 2 Genitiv, 3 Dativ, 4 Akkusativ."],
    ["Which case is the 4th case (4. Fall)?", "", "Akkusativ", "Dativ|Genitiv|Nominativ", "German order: 1 Nominativ, 2 Genitiv, 3 Dativ, 4 Akkusativ."],
  ], "Pick the right question word or pronoun.");

T("artikel", G_CASES, "Artikel: der, den, dem, des", "articles in Nominativ, Akkusativ, Dativ, Genitiv",
  `<p>Ask the question, find the gender, read the table. <b>Only masculine changes</b> from Nominativ to Akkusativ (der to den). Dativ: <b>m r m n</b> (dem, der, dem, den + n). Two objects: the <b>person is Dativ</b>, the <b>thing is Akkusativ</b>: <i>Ich gebe dem Kind den Apfel.</i> (I give the child the apple.)</p>`,
  `${ARTICLE_TABLE}
   <p><b>The mistake in your notes:</b> "Ich kaufe der Lampe" is wrong. Wen/was kaufe ich? The lamp, Akkusativ. Feminine does not change: <b>Ich kaufe die Lampe.</b> (I buy the lamp.) <i>der</i> is a Dativ form, and Dativ is only for the receiver.</p>
   <p>Same pattern with ein-words (<i>ein, mein, dein, sein, ihr, unser</i>): masculine Akkusativ <i>einen / meinen</i>, Dativ <i>einem / einer / einem / einen</i>.</p>
   ${E("Ich schenke meinem Bruder ein Buch.", "I give my brother a book (as a present).")}
   ${E("Wir danken unserer Lehrerin.", "We thank our teacher.")}
   ${E("Der Lehrer erklärt den Schülern die Aufgabe.", "The teacher explains the task to the students. (plural Dativ: den + n)")}`,
  [
    ["Ich kaufe ___ Tisch.", "I buy the table. Noun: der Tisch", "den", "der|dem|des", "Wen/was kaufe ich? Akkusativ. Masculine: der becomes den."],
    ["Ich kaufe ___ Lampe.", "I buy the lamp. Noun: die Lampe", "die", "der|den|dem", "Akkusativ. Feminine never changes: die stays die."],
    ["Ich kaufe ___ Buch.", "I buy the book. Noun: das Buch", "das", "dem|den|des", "Akkusativ. Neuter never changes: das stays das."],
    ["Ich gebe ___ Kind einen Apfel.", "I give the child an apple. Noun: das Kind", "dem", "das|den|des", "Wem gebe ich? Dativ. Neuter Dativ: dem."],
    ["Ich gebe dem Kind ___ Apfel.", "I give the child an apple. Noun: der Apfel", "den", "der|dem|des", "Was gebe ich? Akkusativ, masculine: den. Person is Dativ, thing is Akkusativ."],
    ["Ich helfe ___ Frau.", "I help the woman. Noun: die Frau", "der", "die|den|dem", "helfen = Dativ. Feminine Dativ: der."],
    ["Ich helfe ___ Kindern.", "I help the children. Noun: die Kinder", "den", "die|der|dem", "Dativ plural: den, and the noun gets an n (Kindern)."],
    ["Ich gehe durch ___ Park.", "I walk through the park. Noun: der Park", "den", "der|dem|des", "durch = Akkusativ. Masculine: den."],
    ["Das Geschenk ist für ___ Bruder.", "The present is for my brother. Word: mein", "meinen", "mein|meinem|meiner", "für = Akkusativ. Masculine: mein becomes meinen, the same change as der to den."],
    ["Ich wohne bei ___ Eltern.", "I live with my parents. Word: meine", "meinen", "meine|meiner|meinem", "bei = Dativ. Plural Dativ: meinen. Eltern already ends in n, so no extra n."],
    ["Das ist das Auto ___ Lehrers.", "That is the teacher's car. Noun: der Lehrer", "des", "der|dem|den", "Genitiv masculine: des, and the noun gets s."],
    ["Sie kommt aus ___ Schweiz.", "She comes from Switzerland. Noun: die Schweiz", "der", "die|den|dem", "aus = Dativ. Feminine Dativ: der."],
    ["Er schenkt ___ Schwester ein Buch.", "He gives his sister a book. Word: seine", "seiner", "seine|seinen|seinem", "Wem schenkt er? Dativ. Feminine Dativ ending: seiner."],
    ["Wir sitzen um ___ Tisch.", "We sit around the table. Noun: der Tisch", "den", "der|dem|des", "um = Akkusativ."],
    ["Seit ___ Jahr wohne ich in Wien.", "I have lived in Vienna for a year. Word: ein", "einem", "ein|einen|einer", "seit = Dativ. Neuter Dativ: einem. After Seit... the verb stays in position 2."],
    ["Ich danke ___ Mutter.", "I thank my mother. Word: meine", "meiner", "meine|meinen|meinem", "danken = Dativ. Feminine: meiner."],
    ["Ich sehe ___.", "I see him. Word: er", "ihn", "er|ihm|sein", "Wen sehe ich? Akkusativ. English does this too: I see him, not I see he."],
    ["Ich sehe ___ Mann.", "I see the man. Noun: der Mann", "den", "dem|der|des", "sehen = Akkusativ. Masculine: den."],
    ["Sie hilft ___ Mann.", "She helps the man. Noun: der Mann", "dem", "den|der|des", "helfen = Dativ. Masculine Dativ: dem."],
    ["Wir kaufen ___ Apfel.", "We buy the apple. Noun: der Apfel", "den", "dem|der|des", "kaufen = Akkusativ. Masculine: den."],
    ["Das Geschenk gehört ___ Frau.", "The present belongs to the woman. Noun: die Frau", "der", "die|den|dem", "gehören = Dativ. Feminine Dativ: der."],
    ["Er besucht ___ Lehrer.", "He visits the teacher. Noun: der Lehrer", "den", "dem|der|des", "besuchen = Akkusativ. Masculine: den."],
    ["Sie dankt ___ Arzt.", "She thanks the doctor. Noun: der Arzt", "dem", "den|der|des", "danken = Dativ. Masculine Dativ: dem."],
    ["Ich brauche ___ Lampe.", "I need the lamp. Noun: die Lampe", "die", "der|den|dem", "brauchen = Akkusativ. Feminine stays die."],
    ["Der Lehrer erklärt ___ Schülern die Aufgabe.", "The teacher explains the task to the students. Noun: die Schüler", "den", "die|der|dem", "Wem erklärt er? Dativ plural: den, and the noun gets n (Schülern)."],
    ["Ich gehe ohne ___ Bruder ins Kino.", "I go to the cinema without my brother. Noun: der Bruder", "den", "dem|der|des", "ohne = Akkusativ. Masculine: den."],
    ["Das Fahrrad gehört ___ Mädchen.", "The bike belongs to the girl. Noun: das Mädchen", "dem", "das|den|der", "gehören = Dativ. Das Mädchen is neuter (despite meaning a girl): dem."],
    ["Ich schenke ___ Bruder ein Buch.", "I give my brother a book. Word: mein", "meinem", "meinen|mein|meiner", "Wem schenke ich? Dativ. Masculine Dativ: meinem."],
    ["Sie sucht ___ Schlüssel.", "She looks for her key. Word: ihr", "ihren", "ihr|ihrem|ihrer", "suchen = Akkusativ. Masculine: ihren."],
    ["Er zeigt ___ Freund das Foto.", "He shows his friend the photo. Word: sein", "seinem", "seinen|sein|seiner", "Wem zeigt er? Dativ. Masculine: seinem. Das Foto is the Akkusativ thing."],
    ["Das gefällt ___ Eltern.", "My parents like that. Word: meine", "meinen", "meine|meiner|meinem", "gefallen = Dativ. Plural: meinen."],
    ["Sie bestellt ___ Kaffee.", "She orders a coffee. Word: ein", "einen", "ein|einem|einer", "bestellen = Akkusativ. Masculine: einen."],
  ], "Pick the right article or ending.");

T("verben-fall", G_CASES, "Verben mit Dativ oder Akkusativ", "which case does the verb take?",
  `<p><b>Dativ verbs:</b> helfen (help), danken (thank), gefallen (please), gehören (belong to), antworten (answer), gratulieren (congratulate), folgen (follow), zuhören (listen to). <b>Akkusativ verbs:</b> sehen, brauchen, besuchen, haben, kaufen, <b>fragen</b> (ask). With <b>geben, schenken, zeigen</b> the person is Dativ and the thing is Akkusativ.</p>`,
  `${TBL(["Dativ", "Akkusativ", "Both (two objects)"], [
     ["helfen: Ich helfe dem Mann. (I help the man.)", "sehen: Ich sehe den Hund. (I see the dog.)", "geben: Ich gebe dem Kind einen Ball. (I give the child a ball.)"],
     ["danken: Ich danke meiner Mutter. (I thank my mother.)", "brauchen: Ich brauche einen Stift. (I need a pen.)", "schenken: Ich schenke meinem Bruder ein Buch."],
     ["gefallen: Das Kleid gefällt mir. (I like the dress.)", "besuchen: Ich besuche meine Freundin. (I visit my friend.)", "zeigen: Er zeigt seinem Freund das Foto."],
     ["gehören: Das Buch gehört ihm. (The book belongs to him.)", "fragen: Ich frage den Lehrer. (I ask the teacher.)", ""],
     ["antworten: Sie antwortet dem Lehrer. (She answers the teacher.)", "haben: Ich habe einen Bruder. (I have a brother.)", ""],
     ["gratulieren, zuhören, folgen", "kaufen, suchen, beobachten, einladen", ""]])}
   <p><b>Careful:</b> <i>fragen</i> (ask) takes Akkusativ (<i>Ich frage den Lehrer</i>), but <i>antworten</i> (answer) takes Dativ (<i>Ich antworte dem Lehrer</i>). Learn them as a pair.</p>`,
  [
    ["helfen", "to help", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Ich helfe dem Mann. (I help the man.)"],
    ["danken", "to thank", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Ich danke meiner Mutter. (I thank my mother.)"],
    ["gefallen", "to please, to be liked by", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Das Kleid gefällt mir. (I like the dress.)"],
    ["gehören", "to belong to", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Das Buch gehört ihm. (The book belongs to him.)"],
    ["antworten", "to answer", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Sie antwortet dem Lehrer. (She answers the teacher.)"],
    ["gratulieren", "to congratulate", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Wir gratulieren dir. (We congratulate you.)"],
    ["zuhören", "to listen to", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Ich höre meiner Freundin zu. (I listen to my friend.)"],
    ["folgen", "to follow", "Dativ", "Akkusativ|Both (person Dativ, thing Akkusativ)", "Der Hund folgt dem Kind. (The dog follows the child.)"],
    ["sehen", "to see", "Akkusativ", "Dativ|Both (person Dativ, thing Akkusativ)", "Ich sehe den Hund. (I see the dog.)"],
    ["brauchen", "to need", "Akkusativ", "Dativ|Both (person Dativ, thing Akkusativ)", "Ich brauche einen Stift. (I need a pen.)"],
    ["besuchen", "to visit", "Akkusativ", "Dativ|Both (person Dativ, thing Akkusativ)", "Ich besuche meine Freundin. (I visit my friend.)"],
    ["fragen", "to ask", "Akkusativ", "Dativ|Both (person Dativ, thing Akkusativ)", "Ich frage den Lehrer. (I ask the teacher.) The trap: antworten is Dativ, fragen is Akkusativ."],
    ["haben", "to have", "Akkusativ", "Dativ|Both (person Dativ, thing Akkusativ)", "Ich habe einen Bruder. (I have a brother.)"],
    ["geben", "to give", "Both (person Dativ, thing Akkusativ)", "Akkusativ|Dativ", "Ich gebe dem Kind einen Ball. (I give the child a ball.) The person is Dativ, the thing is Akkusativ."],
    ["schenken", "to give as a present", "Both (person Dativ, thing Akkusativ)", "Akkusativ|Dativ", "Ich schenke meinem Bruder ein Buch. (I give my brother a book.)"],
    ["zeigen", "to show", "Both (person Dativ, thing Akkusativ)", "Akkusativ|Dativ", "Er zeigt seinem Freund das Foto. (He shows his friend the photo.)"],
  ], "Which case does this verb take?");

T("praep", G_CASES, "Präpositionen: Akkusativ oder Dativ", "prepositions and their case",
  `<p><b>Akkusativ:</b> durch, für, gegen, ohne, um (through, for, against, without, around). <b>Dativ:</b> aus, bei, mit, nach, seit, von, zu (out of, at, with, after, since, from, to). <b>Both:</b> an, auf, hinter, in, neben, über, unter, vor, zwischen. Wo? (where, no movement) = Dativ. Wohin? (where to, movement) = Akkusativ.</p>`,
  `${TBL(["Akkusativ", "Dativ", "Both: Wo? or Wohin?"], [
     ["durch den Park (through the park)", "mit dem Bus (by bus)", "an (on, at)"],
     ["für den Mann (for the man)", "bei der Freundin (at my girlfriend's)", "auf (on top of)"],
     ["gegen die Wand (against the wall)", "nach der Arbeit (after work)", "hinter (behind), in (in), neben (next to)"],
     ["ohne das Kind (without the child)", "von meinem Bruder (from my brother)", "über (over), unter (under)"],
     ["um den Tisch (around the table)", "zu meiner Mutter (to my mother)", "vor (in front of), zwischen (between)"],
     ["", "aus der Schweiz (from Switzerland), seit einem Jahr (for a year)", ""]])}
   <p>Short forms: <i>zu dem = zum, zu der = zur, bei dem = beim, von dem = vom, in dem = im, an dem = am</i>.</p>
   <p>Remember <i>zu, bei, mit, nach, seit, von, aus</i> as one chant: they are all Dativ. The five Akkusativ ones are shorter to remember.</p>`,
  [
    ["durch", "through", "Akkusativ", "Dativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich gehe durch den Park. (I walk through the park.)"],
    ["für", "for", "Akkusativ", "Dativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Das Geschenk ist für meinen Bruder. (The present is for my brother.)"],
    ["gegen", "against", "Akkusativ", "Dativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Wir spielen gegen die andere Mannschaft. (We play against the other team.)"],
    ["ohne", "without", "Akkusativ", "Dativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich gehe ohne meinen Schlüssel. (I go without my key.)"],
    ["um", "around", "Akkusativ", "Dativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Wir sitzen um den Tisch. (We sit around the table.)"],
    ["aus", "out of, from", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich komme aus der Schweiz. (I come from Switzerland.)"],
    ["bei", "at, with", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich bin bei meiner Freundin. (I am at my girlfriend's.)"],
    ["mit", "with", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich fahre mit dem Bus. (I go by bus.)"],
    ["nach", "after, to (a city)", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Nach dem Unterricht gehe ich nach Hause. (After class I go home.)"],
    ["seit", "since, for (a time)", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich wohne seit einem Jahr in Wien. (I have lived in Vienna for a year.)"],
    ["von", "from, of", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Das Buch ist von meinem Vater. (The book is from my father.)"],
    ["zu", "to", "Dativ", "Akkusativ|Both (Wo? Dativ, Wohin? Akkusativ)", "Ich gehe zum Arzt (zu dem Arzt). (I go to the doctor.)"],
    ["in", "in, into", "Both (Wo? Dativ, Wohin? Akkusativ)", "Akkusativ|Dativ", "Ich bin in der Küche (Wo?). Ich gehe in die Küche (Wohin?). (I am in the kitchen. I go into the kitchen.)"],
    ["auf", "on, onto", "Both (Wo? Dativ, Wohin? Akkusativ)", "Akkusativ|Dativ", "Das Buch liegt auf dem Tisch. Ich lege es auf den Tisch. (The book lies on the table. I put it on the table.)"],
    ["an", "on, at (a vertical surface)", "Both (Wo? Dativ, Wohin? Akkusativ)", "Akkusativ|Dativ", "Das Bild hängt an der Wand. Ich hänge es an die Wand. (The picture hangs on the wall. I hang it on the wall.)"],
    ["Which of these is NOT a Wechselpräposition?", "", "mit", "auf|neben|zwischen", "mit always takes Dativ. auf, neben and zwischen can take either."],
    ["Which list contains only Akkusativ prepositions?", "", "durch, für, gegen, ohne, um", "aus, bei, mit, nach|an, auf, in, über|bei, für, mit, um", "The five Akkusativ prepositions: durch, für, gegen, ohne, um."],
  ], "Which case does it take?");

T("wechsel", G_CASES, "Wechselpräpositionen: Wo? oder Wohin?", "two-way prepositions: where or where to?",
  `<p>The nine: <b>an, auf, hinter, in, neben, über, unter, vor, zwischen</b>. <b>Wo?</b> (where, a place or position) = <b>Dativ</b>. <b>Wohin?</b> (where to, a direction or goal of movement) = <b>Akkusativ</b>. It is not about whether anyone moves, it is whether you name a place or a destination: <i>Ich laufe im Park</i> (Wo?) versus <i>Ich laufe in den Park</i> (Wohin?).</p>`,
  `${TBL(["Position, Wo? (Dativ)", "Goal, Wohin? (Akkusativ)"], [
     ["liegen: Das Buch liegt auf dem Tisch. (The book lies on the table.)", "legen: Ich lege das Buch auf den Tisch. (I put the book on the table.)"],
     ["stehen: Die Flasche steht auf dem Tisch. (The bottle stands on the table.)", "stellen: Ich stelle die Flasche auf den Tisch. (I stand the bottle on the table.)"],
     ["sitzen: Ich sitze auf dem Stuhl. (I sit on the chair.)", "sich setzen: Ich setze mich auf den Stuhl. (I sit down on the chair.)"],
     ["hängen: Das Bild hängt an der Wand. (The picture hangs on the wall.)", "hängen: Ich hänge das Bild an die Wand. (I hang the picture on the wall.)"],
     ["sein: Ich bin in der Schule. (I am at school.)", "gehen: Ich gehe in die Schule. (I go to school.)"]])}
   <p>Remember: feminine Dativ <b>der</b>, Akkusativ <b>die</b>. Masculine Dativ <b>dem</b>, Akkusativ <b>den</b>. Neuter Dativ <b>dem</b>, Akkusativ <b>das</b>.</p>
   <p><b>Quick test:</b> Can you ask <i>Wo?</i> (Where?) and the answer fits? Dativ. Do you ask <i>Wohin?</i> (Where to?) Akkusativ. The verb pair helps: liegen/stehen/sitzen/hängen (state) vs legen/stellen/setzen/hängen (action).</p>`,
  [
    ["Das Buch liegt auf ___ Tisch.", "The book lies on the table. Wo?", "dem", "den|der|des", "Wo? Nothing moves: Dativ. Masculine: dem."],
    ["Ich lege das Buch auf ___ Tisch.", "I put the book on the table. Wohin?", "den", "dem|der|des", "Wohin? Movement to a goal: Akkusativ. Masculine: den."],
    ["Die Katze schläft unter ___ Bett.", "The cat sleeps under the bed. Wo?", "dem", "das|den|der", "Wo? Dativ. Neuter: dem."],
    ["Die Katze läuft unter ___ Bett.", "The cat runs under the bed. Wohin?", "das", "dem|den|der", "Wohin? Akkusativ. Neuter stays das."],
    ["Das Bild hängt an ___ Wand.", "The picture hangs on the wall. Wo?", "der", "die|dem|den", "Wo? Dativ. Feminine: der."],
    ["Ich hänge das Bild an ___ Wand.", "I hang the picture on the wall. Wohin?", "die", "der|dem|den", "Wohin? Akkusativ. Feminine: die."],
    ["Die Kinder spielen in ___ Garten.", "The children play in the garden. Wo?", "dem", "den|der|das", "Wo? Dativ. Masculine: dem."],
    ["Die Kinder gehen in ___ Garten.", "The children go into the garden. Wohin?", "den", "dem|der|das", "Wohin? Akkusativ. Masculine: den."],
    ["Die Lampe steht neben ___ Sofa.", "The lamp stands next to the sofa. Wo?", "dem", "das|den|der", "Wo? Dativ. Neuter: dem."],
    ["Ich stelle die Lampe neben ___ Sofa.", "I put the lamp next to the sofa. Wohin?", "das", "dem|den|der", "Wohin? Akkusativ. Neuter: das."],
    ["Der Hund liegt vor ___ Tür.", "The dog lies in front of the door. Wo?", "der", "die|dem|den", "Wo? Dativ. Feminine: der."],
    ["Der Hund läuft vor ___ Tür.", "The dog runs to the door (the goal is in front of the door). Wohin?", "die", "der|dem|den", "Wohin? Akkusativ. Feminine: die. (If the dog runs back and forth in front of the door, it is Wo? and der.)"],
    ["Wo? Ich laufe in ___ Park.", "I run in the park (I stay inside it).", "dem", "den|der|die", "Wo? Dativ. Masculine: dem Park."],
    ["Wohin? Ich laufe in ___ Park.", "I run into the park (I go in).", "den", "dem|der|die", "Wohin? Akkusativ. Masculine: den Park."],
    ["Ich setze mich auf ___ Stuhl.", "I sit down on the chair. Wohin?", "den", "dem|der|das", "sich setzen = movement to a goal: Akkusativ."],
    ["Das Buch ___ auf dem Tisch.", "The book is lying on the table.", "liegt", "legt|liegen|lege", "liegen = position (Dativ: auf dem Tisch). legen = you put it somewhere."],
    ["Ich ___ das Buch auf den Tisch.", "I put the book on the table.", "lege", "liege|liegt|legt", "legen = movement to a goal (Akkusativ: auf den Tisch)."],
  ], "Wo? (Dativ) or Wohin? (Akkusativ): pick the article.");

T("adjektiv", G_CASES, "Adjektivendungen: der alte Mann", "adjective endings",
  `<p>After <b>der/die/das</b> the ending is only <b>-e or -en</b>. <b>-e</b> in: Nominativ (all three genders), Akkusativ feminine and neuter. <b>-en</b> in: Akkusativ masculine, all of Dativ, all plurals.</p>
   <p>After <b>ein</b>: <i>ein alter Mann</i>, <i>eine junge Frau</i>, <i>ein kleines Kind</i>. The adjective shows what the article hides (-er masculine, -es neuter).</p>`,
  `${TBL(["Nominativ", "Akkusativ", "Dativ"], [
     ["der alte Mann (the old man)", "den alten Mann", "dem alten Mann"],
     ["die junge Frau (the young woman)", "die junge Frau", "der jungen Frau"],
     ["das kleine Kind (the small child)", "das kleine Kind", "dem kleinen Kind"],
     ["die netten Kinder (the nice children)", "die netten Kinder", "den netten Kindern"]])}
   <p>Start rule: Nominativ singular <b>-e</b>. Akkusativ masculine <b>-en</b>. Dativ <b>-en</b>. Plural after the definite article <b>-en</b>.</p>
   <h4>After ein, mein, kein</h4>
   ${TBL(["Nominativ", "Akkusativ", "Dativ"], [
     ["ein alter Mann", "einen alten Mann", "einem alten Mann"], ["eine junge Frau", "eine junge Frau", "einer jungen Frau"],
     ["ein kleines Kind", "ein kleines Kind", "einem kleinen Kind"]])}
   <p>You were unsure about <i>die junge Frau</i>. It is feminine Akkusativ and Nominativ, so it stays <b>-e</b>. Only the masculine becomes <i>-en</i> in the Akkusativ.</p>`,
  [
    ["Der klein___ Hund schläft.", "The small dog sleeps.", "-e", "-en|-er|-es", "Nominativ singular after der: -e."],
    ["Ich sehe den klein___ Hund.", "I see the small dog.", "-en", "-e|-er|-es", "Akkusativ masculine: den kleinen."],
    ["Die jung___ Frau arbeitet hier.", "The young woman works here.", "-e", "-en|-er|-es", "Nominativ feminine: -e."],
    ["Ich treffe die jung___ Frau.", "I meet the young woman.", "-e", "-en|-er|-es", "Akkusativ feminine does not change: die junge Frau."],
    ["Das alt___ Haus ist schön.", "The old house is beautiful.", "-e", "-en|-er|-es", "Nominativ neuter: -e."],
    ["Wir kaufen das alt___ Haus.", "We buy the old house.", "-e", "-en|-er|-es", "Akkusativ neuter does not change: das alte Haus."],
    ["Ich helfe dem nett___ Mann.", "I help the nice man.", "-en", "-e|-er|-es", "Dativ: always -en."],
    ["Sie spricht mit der freundlich___ Lehrerin.", "She talks to the friendly teacher.", "-en", "-e|-er|-es", "Dativ: der freundlichen Lehrerin."],
    ["Er spielt mit den klein___ Kindern.", "He plays with the small children.", "-en", "-e|-er|-es", "Dativ plural: -en."],
    ["Ich besuche die deutsch___ Freunde.", "I visit the German friends.", "-en", "-e|-er|-es", "Plural after the definite article: -en."],
    ["Wir wohnen in dem groß___ Haus.", "We live in the big house.", "-en", "-e|-er|-es", "Dativ (Wo? after in): dem großen Haus."],
    ["Sie gibt dem müde___ Kind ein Glas Wasser.", "She gives the tired child a glass of water.", "-en", "-e|-er|-es", "Dativ: dem müden Kind."],
    ["Das ist ein alt___ Mann.", "That is an old man.", "-er", "-e|-en|-es", "After ein, the masculine Nominativ has no ending on ein, so the adjective shows it: ein alter Mann."],
    ["Ich sehe einen alt___ Mann.", "I see an old man.", "-en", "-e|-er|-es", "Akkusativ masculine: einen alten Mann."],
    ["Das ist eine jung___ Frau.", "That is a young woman.", "-e", "-en|-er|-es", "Feminine Nominativ: eine junge Frau."],
    ["Das ist ein klein___ Kind.", "That is a small child.", "-es", "-e|-en|-er", "After ein, neuter Nominativ: ein kleines Kind."],
    ["Ich spreche mit einem nett___ Mann.", "I talk to a nice man.", "-en", "-e|-er|-es", "Dativ: always -en."],
  ], "Pick the ending.");

T("relativ", G_CASES, "Relativpronomen und dass", "relative pronouns: der, die, das, den, dem",
  `<p>A relative clause gives extra information about a noun. <b>Gender and number</b> of the pronoun come from the noun before it. The <b>case</b> comes from its job <i>inside</i> the relative clause: ask wer/was, wen/was or wem. The verb is at the end.</p>
   <p><b>dass</b> (that) is a conjunction after verbs like glauben, sagen, hoffen. It never replaces der/die/das/den/dem. Wrong: <i>der Mann, dass ich gesehen habe</i>.</p>`,
  `${TBL(["Fall", "Maskulin", "Feminin", "Neutrum", "Plural"], [
     ["Nominativ (Wer/was?)", "der", "die", "das", "die"], ["Akkusativ (Wen/was?)", "den", "die", "das", "die"],
     ["Dativ (Wem?)", "dem", "der", "dem", "denen"]])}
   ${E("Der Mann, der dort steht, ist mein Lehrer.", "The man who stands there is my teacher. (Wer steht dort? Nominativ)")}
   ${E("Der Mann, den ich sehe, ist mein Lehrer.", "The man whom I see is my teacher. (Wen sehe ich? Akkusativ)")}
   ${E("Der Mann, dem ich helfe, ist mein Lehrer.", "The man whom I help is my teacher. (Wem helfe ich? Dativ)")}
   <h4>dass or a relative pronoun?</h4>
   ${E("Ich glaube, dass er heute kommt.", "I think that he is coming today. (dass: a whole statement follows)")}
   ${E("Das ist der Mann, den ich gestern gesehen habe.", "That is the man whom I saw yesterday. (den: points back to der Mann)")}
   <p>Your diagnostic mistake: <b>Das ist der Mann, dass ich gestern gesehen habe</b> is wrong. The word points back to <i>der Mann</i>, so use <b>den</b> (Wen habe ich gesehen? Akkusativ).</p>`,
  [
    ["Das ist die Frau, ___ hier arbeitet.", "That is the woman who works here.", "die", "der|den|dass", "Wer arbeitet hier? Nominativ, feminine: die."],
    ["Das ist die Frau, ___ ich gestern getroffen habe.", "That is the woman whom I met yesterday.", "die", "der|den|dass", "Wen habe ich getroffen? Akkusativ, feminine stays die."],
    ["Das ist der Mann, ___ ich geholfen habe.", "That is the man whom I helped.", "dem", "den|der|dass", "helfen takes Dativ, so the relative pronoun is dem."],
    ["Das ist das Buch, ___ ich gekauft habe.", "That is the book that I bought.", "das", "dem|den|dass", "Was habe ich gekauft? Akkusativ, neuter stays das."],
    ["Das sind die Kinder, ___ im Garten spielen.", "Those are the children who play in the garden.", "die", "denen|den|dass", "Wer spielt? Nominativ plural: die."],
    ["Das sind die Kinder, ___ ich Süßigkeiten gebe.", "Those are the children to whom I give sweets.", "denen", "die|den|dass", "Wem gebe ich Süßigkeiten? Dativ plural: denen."],
    ["Wo ist der Schlüssel, ___ du gesucht hast?", "Where is the key that you looked for?", "den", "dem|der|dass", "Was hast du gesucht? Akkusativ masculine: den."],
    ["Ich kenne den Lehrer, ___ uns Deutsch unterrichtet.", "I know the teacher who teaches us German.", "der", "den|dem|dass", "Wer unterrichtet? Nominativ masculine: der."],
    ["Das ist die Kollegin, mit ___ ich arbeite.", "That is the colleague with whom I work.", "der", "die|den|dem", "mit takes Dativ. Feminine Dativ: der."],
    ["Das ist der Freund, für ___ ich das Geschenk gekauft habe.", "That is the friend for whom I bought the present.", "den", "dem|der|dass", "für takes Akkusativ. Masculine: den."],
    ["Ich glaube, ___ er heute kommt.", "I think that he is coming today.", "dass", "den|der|das", "A whole statement follows: dass."],
    ["Das ist der Film, ___ ich gestern gesehen habe.", "That is the film that I saw yesterday.", "den", "dass|dem|der", "Was habe ich gesehen? Akkusativ masculine: den."],
    ["Sie sagt, ___ sie keine Zeit hat.", "She says that she has no time.", "dass", "die|das|den", "After sagen: dass."],
    ["Das ist die Frau, ___ neben mir wohnt.", "That is the woman who lives next to me.", "die", "dass|der|den", "Wer wohnt? Nominativ feminine: die."],
    ["Ich hoffe, ___ du die Prüfung bestehst.", "I hope that you pass the exam.", "dass", "die|das|den", "After hoffen: dass."],
    ["Das ist das Geschenk, ___ ich bekommen habe.", "That is the present that I received.", "das", "dass|dem|den", "Points back to das Geschenk. Was habe ich bekommen? Akkusativ neuter: das (not dass)."],
    ["Das ist der Mann, ___ ich gestern gesehen habe.", "That is the man whom I saw yesterday.", "den", "dass|dem|der", "Your diagnostic mistake was dass. It points back to der Mann. Wen habe ich gesehen? Akkusativ masculine: den."],
  ], "Pick the relative pronoun or dass.");
