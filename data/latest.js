const ART_TABLES = `<h4>How the article changes with gender</h4>
   ${TBL(["der, die, das", "Maskulin", "Feminin", "Neutrum", "Plural"], [
     ["<b class=\"cN\">Nominativ</b> Wer/was?", "der", "die", "das", "die"],
     ["<b class=\"cA\">Akkusativ</b> Wen/was?", "<b class=\"cA\">den</b>", "die", "das", "die"],
     ["<b class=\"cD\">Dativ</b> Wem?", "<b class=\"cD\">dem</b>", "<b class=\"cD\">der</b>", "<b class=\"cD\">dem</b>", "<b class=\"cD\">den</b> (+n on the noun)"]])}
   ${TBL(["ein, mein, kein", "Maskulin", "Feminin", "Neutrum", "Plural"], [
     ["<b class=\"cN\">Nominativ</b> Wer/was?", "ein", "eine", "ein", "keine"],
     ["<b class=\"cA\">Akkusativ</b> Wen/was?", "<b class=\"cA\">einen</b>", "eine", "ein", "keine"],
     ["<b class=\"cD\">Dativ</b> Wem?", "<b class=\"cD\">einem</b>", "<b class=\"cD\">einer</b>", "<b class=\"cD\">einem</b>", "<b class=\"cD\">keinen</b> (+n on the noun)"]])}
   <p>Only the <b>masculine</b> changes from Nominativ to Akkusativ (der to den, ein to einen). In the Dativ every gender changes.</p>`;
T("dativobjekt", G_LATEST, "Das indirekte Objekt: Wem?", "the indirect object (Dativ) and when the rule does not apply",
  `<p>Ask <b>Wem?</b> (to/for whom?) to find the <b>indirekte Objekt</b>. It stands in the <b>Dativ</b>. Ask <b>Wen oder was?</b> to find the <b>direkte Objekt</b>, which stands in the <b>Akkusativ</b>. Four cases where the Wem? rule does not work: pure Dativ verbs, verbs that force Akkusativ for a person, prepositional objects, reflexive verbs.</p>`,
  `${E("Sascha bringt Oma schöne Blumen.", "Sascha brings grandma nice flowers.")}
   ${TBL(["Word", "Question", "Job", "Case"], [
     ["Oma", "Wem bringt er sie?", "indirektes Objekt", "<b>Dativ</b>"],
     ["schöne Blumen", "Wen oder was bringt er?", "direktes Objekt", "<b>Akkusativ</b>"]])}
   <h4>When the rule does not apply</h4>
   ${TBL(["Case", "Example", "Why"], [
     ["1. Pure Dativ verbs", "Ich helfe <b>dir</b>. Das Auto gehört <b>mir</b>.", "There is no Akkusativ object. The Dativ stands alone."],
     ["2. Verbs that force Akkusativ for a person", "Ich frage <b>dich</b>. Ich rufe <b>dich</b> an.", "The person is the direct object. Never: <i>Ich frage dir</i>."],
     ["3. Fixed prepositions", "Ich denke <b>an dich</b>. Ich spreche <b>mit dir</b>.", "A Präpositionalobjekt. You ask <i>An wen?</i> or <i>Mit wem?</i>, not <i>Wem?</i>."],
     ["4. Reflexive verbs", "Ich freue <b>mich</b>.", "The reflexive pronoun already fills the object slot."]])}`,
  [
    ["Sascha bringt Oma schöne Blumen. Which words are the Dativobjekt?", "Sascha brings grandma nice flowers.", "Oma", "Sascha|schöne Blumen|bringt", "Wem bringt er die Blumen? Oma. That is the indirect object (Dativ)."],
    ["Sascha bringt Oma schöne Blumen. Which words are the Akkusativobjekt?", "Sascha brings grandma nice flowers.", "schöne Blumen", "Oma|Sascha|bringt Oma", "Wen oder was bringt er? Blumen. That is the direct object (Akkusativ)."],
    ["Which question finds the Dativobjekt?", "", "Wem?", "Wen?|Wessen?|Wer?", "Wem? = to/for whom? = Dativ."],
    ["Which question finds the Akkusativobjekt?", "", "Wen oder was?", "Wem?|Wessen?|Wer?", "Wen oder was? = whom or what? = Akkusativ."],
    ["Sie schenkt ___ Bruder ein Buch.", "She gives her brother a book.", "ihrem", "ihren|ihre|ihrer", "Wem schenkt sie das Buch? Dativ. Masculine: ihrem Bruder. The book is the Akkusativ object."],
    ["Er zeigt ___ Frau das Foto.", "He shows the woman the photo.", "der", "die|dem|den", "Wem zeigt er das Foto? Dativ. Feminine Dativ: der Frau."],
    ["Ich helfe ___.", "I help you.", "dir", "dich|du|dein", "helfen takes only a Dativ object: Ich helfe dir. There is no Akkusativ object."],
    ["Das Auto gehört ___.", "The car belongs to me.", "mir", "mich|ich|mein", "gehören takes only a Dativ object: Das Auto gehört mir."],
    ["Ich frage ___.", "I ask you.", "dich", "dir|du|dein", "fragen forces Akkusativ for the person. Never: Ich frage dir."],
    ["Ich rufe ___ an.", "I call you.", "dich", "dir|du|dein", "anrufen forces Akkusativ for the person: Ich rufe dich an."],
    ["Which sentence is correct?", "", "Ich frage dich.", "Ich frage dir.|Ich frage du.|Ich frage dein.", "fragen takes Akkusativ for the person. A Dativ object is not allowed here."],
    ["Why is it 'Ich rufe dich an' and not 'Ich rufe dir an'?", "", "anrufen takes Akkusativ for the person", "dich is a Dativ form|anrufen is reflexive|you always ask Wem? for people", "anrufen forces Akkusativ for the person. A person is not always Dativ."],
    ["Which sentence has only a Dativobjekt and no Akkusativobjekt?", "", "Ich helfe dir.", "Ich gebe dir ein Buch.|Ich sehe dich.|Ich rufe dich an.", "helfen: only a Dativ object. geben has two objects. sehen and anrufen take Akkusativ."],
    ["Ich denke an ___.", "I think of you.", "dich", "dir|du|dein", "denken an takes Akkusativ. It is a Präpositionalobjekt: An wen denke ich? Not Wem?"],
    ["Ich spreche mit ___.", "I talk to you.", "dir", "dich|du|dein", "mit always takes Dativ. It is a Präpositionalobjekt: Mit wem spreche ich?"],
    ["Ich denke an dich. Which question finds dich?", "I think of you.", "An wen?", "Wem?|Wessen?|Wo?", "With a fixed preposition you ask with the preposition: An wen? It is a Präpositionalobjekt, not a Dativobjekt."],
    ["Ich spreche mit dir. Which question finds dir?", "I talk to you.", "Mit wem?", "An wen?|Wessen?|Wen?", "With a fixed preposition you ask with the preposition: Mit wem?"],
  ], "Dativ or Akkusativ? Find the object.");

T("verb-praep", G_LATEST, "Verben mit Präposition", "verbs with a fixed preposition and its case",
  `<p>Many verbs come with a <b>fixed preposition</b>, and the preposition decides the case. Learn the whole phrase together: <i>warten auf</i>, <i>sprechen mit</i>. The two-way prepositions <b>an, in, vor</b> take a case that depends on the verb, so learn it per verb.</p>`,
  `${TBL(["Akkusativ", "Dativ", "Wechsel: fixed case per verb"], [
     ["<b>auf</b>: warten auf, sich freuen auf", "<b>mit</b>: sprechen mit, telefonieren mit", "<b>an + Akk.</b>: denken an, sich erinnern an, glauben an"],
     ["<b>für</b>: sich interessieren für, danken für", "<b>von</b>: träumen von, erzählen von, abhängen von", "<b>an + Dat.</b>: zweifeln an, teilnehmen an, arbeiten an"],
     ["<b>über</b>: nachdenken über, sich ärgern über", "<b>zu</b>: gratulieren zu, gehören zu", "<b>in + Akk.</b>: sich verlieben in, einwilligen in"],
     ["<b>um</b>: bitten um, sich kümmern um", "<b>nach</b>: suchen nach, fragen nach", "<b>vor + Dat.</b>: Angst haben vor, schützen vor"],
     ["<b>gegen</b>: protestieren gegen", "<b>bei</b>: sich bedanken bei, helfen bei", ""],
     ["", "<b>aus</b>: bestehen aus", ""]])}
   ${E("Ich warte auf den Bus.", "I wait for the bus. (auf + Akkusativ)")}
   ${E("Ich spreche mit meiner Mutter.", "I talk to my mother. (mit + Dativ)")}
   <p><b>Homework from class:</b> write one sentence with each preposition, with as many as you like. The app cannot check free sentences, so read yours out loud to Sophie.</p>`,
  [
    ["Ich warte ___ den Bus.", "I wait for the bus.", "auf", "für|an|über", "warten auf + Akkusativ."],
    ["Sie freut sich ___ den Urlaub.", "She is looking forward to the holiday.", "auf", "mit|bei|von", "sich freuen auf + Akkusativ (looking forward to)."],
    ["Wir interessieren uns ___ Musik.", "We are interested in music.", "für", "an|auf|mit", "sich interessieren für + Akkusativ."],
    ["Ich danke dir ___ das Geschenk.", "I thank you for the present.", "für", "an|mit|von", "danken für + Akkusativ."],
    ["Ich ärgere mich ___ den Lärm.", "I am annoyed about the noise.", "über", "auf|mit|von", "sich ärgern über + Akkusativ."],
    ["Ich bitte dich ___ Hilfe.", "I ask you for help.", "um", "für|auf|über", "bitten um + Akkusativ."],
    ["Sie kümmert sich ___ ihre Katze.", "She takes care of her cat.", "um", "für|auf|mit", "sich kümmern um + Akkusativ."],
    ["Wir protestieren ___ den Plan.", "We protest against the plan.", "gegen", "mit|von|zu", "protestieren gegen + Akkusativ."],
    ["Ich spreche ___ meiner Mutter.", "I talk to my mother.", "mit", "an|auf|für", "sprechen mit + Dativ."],
    ["Sie telefoniert ___ ihrem Chef.", "She is on the phone with her boss.", "mit", "an|für|über", "telefonieren mit + Dativ."],
    ["Er träumt ___ einem Urlaub am Meer.", "He dreams of a holiday by the sea.", "von", "auf|an|für", "träumen von + Dativ."],
    ["Wir gratulieren dir ___ deinem Geburtstag.", "We congratulate you on your birthday.", "zu", "für|auf|an", "gratulieren zu + Dativ."],
    ["Ich suche ___ meinem Schlüssel.", "I am looking for my key.", "nach", "für|auf|an", "suchen nach + Dativ."],
    ["Er fragt ___ dem Weg.", "He asks for the way.", "nach", "auf|für|um", "fragen nach + Dativ."],
    ["Ich bedanke mich ___ meinem Lehrer.", "I thank my teacher.", "bei", "an|von|zu", "sich bedanken bei + Dativ (the person). For the thing: danken für."],
    ["Der Kuchen besteht ___ Mehl, Eiern und Zucker.", "The cake consists of flour, eggs and sugar.", "aus", "von|mit|zu", "bestehen aus + Dativ."],
    ["Das hängt ___ dem Wetter ab.", "That depends on the weather.", "von", "aus|bei|zu", "abhängen von + Dativ."],
    ["denken an", "to think of", "Akkusativ", "Dativ", "Ich denke an den Urlaub. (I think of the holiday.) an + Akkusativ."],
    ["sich erinnern an", "to remember", "Akkusativ", "Dativ", "Ich erinnere mich an den Film. (I remember the film.) an + Akkusativ."],
    ["glauben an", "to believe in", "Akkusativ", "Dativ", "Ich glaube an dich. (I believe in you.) an + Akkusativ."],
    ["zweifeln an", "to doubt", "Dativ", "Akkusativ", "Ich zweifle an dem Plan. (I doubt the plan.) an + Dativ."],
    ["teilnehmen an", "to take part in", "Dativ", "Akkusativ", "Ich nehme an dem Kurs teil. (I take part in the course.) an + Dativ."],
    ["arbeiten an", "to work on", "Dativ", "Akkusativ", "Wir arbeiten an dem Projekt. (We work on the project.) an + Dativ."],
    ["sich verlieben in", "to fall in love with", "Akkusativ", "Dativ", "Er verliebt sich in eine Frau. (He falls in love with a woman.) in + Akkusativ."],
    ["Angst haben vor", "to be afraid of", "Dativ", "Akkusativ", "Sie hat Angst vor dem Hund. (She is afraid of the dog.) vor + Dativ."],
    ["schützen vor", "to protect from", "Dativ", "Akkusativ", "Wir schützen das Kind vor dem Regen. (We protect the child from the rain.) vor + Dativ."],
    ["Ich denke an ___ Urlaub.", "I think of the holiday.", "den", "dem|der|des", "denken an + Akkusativ. Masculine: den."],
    ["Wir arbeiten an ___ Projekt.", "We work on the project.", "dem", "das|den|der", "arbeiten an + Dativ. Neuter: dem."],
    ["Sie hat Angst vor ___ Hund.", "She is afraid of the dog.", "dem", "den|der|das", "Angst haben vor + Dativ. Masculine: dem."],
    ["Er erinnert sich an ___ Reise.", "He remembers the trip.", "die", "der|dem|den", "sich erinnern an + Akkusativ. Feminine: die."],
  ], "Pick the preposition or the case.");

T("dem-den", G_LATEST, "dem oder den? Artikel im Dativ und Akkusativ", "definite, indefinite and possessive articles",
  `<p>First ask: <b>Wem?</b> Dativ. <b>Wen oder was?</b> Akkusativ. Then pick the article for the gender. Only the <b>masculine</b> shows a clear difference with all three kinds of article: <i>dem / den</i>, <i>einem / einen</i>, <i>meinem / meinen</i>. Feminine Akkusativ stays <i>die / eine / meine</i>, feminine Dativ is <i>der / einer / meiner</i>.</p>
   ${ART_TABLES}`,
  `${ART_TABLES}
   ${E("Ich helfe dem Mann. WEM?", "I help the man. (Dativ: helfen)")}
   ${E("Ich sehe den Hund.", "I see the dog. (Akkusativ: sehen)")}
   ${E("Wir danken den Lehrern.", "We thank the teachers. (Dativ plural: den, and -n on the noun)")}
   <p>Possessive articles (mein, dein, sein, unser, euer, ihr) take the same endings as <i>ein</i>.</p>`,
  [
    ["Ich helfe ___ Mann.", "I help the man.", "dem", "den|der|das", "Wem helfe ich? helfen takes Dativ. Masculine: dem."],
    ["Ich sehe ___ Hund.", "I see the dog.", "den", "dem|der|das", "Wen sehe ich? sehen takes Akkusativ. Masculine: den."],
    ["Sie gibt ___ Kind einen Apfel.", "She gives the child an apple.", "dem", "den|der|das", "Wem gibt sie den Apfel? Dativ. Neuter: das Kind becomes dem Kind."],
    ["Er kauft ___ Tisch.", "He buys the table.", "den", "dem|der|das", "Was kauft er? kaufen takes Akkusativ. Masculine: den."],
    ["Wir danken ___ Lehrer.", "We thank the teacher.", "dem", "den|der|das", "Wem danken wir? danken takes Dativ. Masculine: dem."],
    ["Ich besuche ___ Freund.", "I visit the friend.", "den", "dem|der|das", "Wen besuche ich? besuchen takes Akkusativ. Masculine: den."],
    ["Sie antwortet ___ Chef.", "She answers the boss.", "dem", "den|der|das", "Wem antwortet sie? antworten takes Dativ. Masculine: dem."],
    ["Ich helfe ___ Mann. (ein)", "I help a man.", "einem", "einen|einer|eine", "helfen takes Dativ. Masculine: einem Mann."],
    ["Ich sehe ___ Hund. (ein)", "I see a dog.", "einen", "einem|einer|eine", "sehen takes Akkusativ. Masculine: einen Hund."],
    ["Er kauft ___ Tisch. (ein)", "He buys a table.", "einen", "einem|einer|eine", "kaufen takes Akkusativ. Masculine: einen Tisch."],
    ["Wir danken ___ Lehrer. (ein)", "We thank a teacher.", "einem", "einen|einer|eine", "danken takes Dativ. Masculine: einem Lehrer."],
    ["Ich besuche ___ Freundin.", "I visit a friend (female).", "eine", "einen|einem|einer", "besuchen takes Akkusativ. Feminine: eine does not change."],
    ["Sie antwortet ___ Chefin.", "She answers a (female) boss.", "einer", "eine|einem|einen", "antworten takes Dativ. Feminine: einer."],
    ["Ich helfe ___ Mann. (mein)", "I help my husband.", "meinem", "meinen|meiner|meine", "helfen takes Dativ. Masculine: meinem."],
    ["Ich sehe ___ Schule.", "I see my school.", "meine", "meinen|meinem|meiner", "sehen takes Akkusativ. Feminine: meine does not change."],
    ["Wir danken ___ Lehrerin.", "We thank my teacher (female).", "meiner", "meine|meinem|meinen", "Wem danken wir? Dativ. Feminine: meiner."],
    ["Er kauft ___ Tisch. (mein)", "He buys my table.", "meinen", "meinem|meiner|meine", "kaufen takes Akkusativ. Masculine: meinen."],
    ["Sie gibt ___ Kind einen Apfel. (ihr)", "She gives her child an apple.", "ihrem", "ihren|ihrer|ihre", "Wem gibt sie den Apfel? Dativ. Neuter: ihrem Kind."],
  ], "Dativ or Akkusativ? Pick the article.");

T("endungen-da", G_LATEST, "Adjektivendungen im Dativ und Akkusativ", "adjective endings after ein, with and without prepositions",
  `<p>After <b>ein, mein, kein</b>: <b>-en</b> in the whole Dativ (einem alten, einer alten) and in the masculine Akkusativ (einen alten). <b>-e</b> in the feminine Akkusativ (eine alte). <b>-es</b> in the neuter Akkusativ (ein altes).</p>
   <p>With a preposition, first decide the case. <b>Wechselpräpositionen</b> (in, auf, an, über, unter, vor, hinter, neben, zwischen): <b>Wo?</b> = Dativ, <b>Wohin?</b> = Akkusativ. <b>Always Akkusativ:</b> für, durch, ohne, gegen, um. <b>Always Dativ:</b> mit, von, zu, bei, aus, nach, seit.</p>
   ${ART_TABLES}`,
  `${TBL(["", "Maskulin", "Feminin", "Neutrum"], [
     ["Akkusativ", "einen alt<b>en</b> Mann", "eine alt<b>e</b> Frau", "ein alt<b>es</b> Kind"],
     ["Dativ", "einem alt<b>en</b> Mann", "einer alt<b>en</b> Frau", "einem alt<b>en</b> Kind"]])}
   ${E("Wir arbeiten am alten wie am neuen Projekt.", "We work on the old and on the new project. (an dem = am, Dativ: -en)")}
   <p>Note: <i>dunkel</i> loses the e: <i>durch einen dunklen Wald</i>.</p>`,
  [
    ["Ich helfe einer alt___ Frau.", "I help an old woman.", "-en", "-e|-er|-es", "helfen takes Dativ. Feminine Dativ: einer alten Frau."],
    ["Ich sehe eine groß___ Katze.", "I see a big cat.", "-e", "-en|-er|-es", "Akkusativ feminine: eine große Katze."],
    ["Sie gibt einem klein___ Kind einen Apfel.", "She gives a small child an apple.", "-en", "-e|-er|-es", "Dativ: einem kleinen Kind."],
    ["Er kauft ein neu___ Auto.", "He buys a new car.", "-es", "-e|-en|-er", "Akkusativ neuter: ein neues Auto."],
    ["Wir danken einem nett___ Lehrer.", "We thank a nice teacher.", "-en", "-e|-er|-es", "danken takes Dativ: einem netten Lehrer."],
    ["Ich besuche einen alt___ Freund.", "I visit an old friend.", "-en", "-e|-er|-es", "Akkusativ masculine: einen alten Freund."],
    ["Sie antwortet einer freundlich___ Chefin.", "She answers a friendly boss.", "-en", "-e|-er|-es", "antworten takes Dativ. Feminine: einer freundlichen Chefin."],
    ["Er kauft eine neu___ Tasche.", "He buys a new bag.", "-e", "-en|-er|-es", "Akkusativ feminine: eine neue Tasche."],
    ["Ich sehe ein klein___ Haus.", "I see a small house.", "-es", "-e|-en|-er", "Akkusativ neuter: ein kleines Haus."],
    ["Ich gehe in ___ groß___ Park.", "I go into a big park. (Wohin?)", "einen, -en", "einem, -en|einen, -e|einem, -e", "Wohin? Akkusativ. Masculine: einen großen Park."],
    ["Das Kind spielt in ___ groß___ Park.", "The child plays in a big park. (Wo?)", "einem, -en", "einen, -en|einem, -e|einen, -e", "Wo? Dativ. Masculine: einem großen Park."],
    ["Er legt das Buch auf ___ neu___ Tisch.", "He puts the book on a new table. (Wohin?)", "einen, -en", "einem, -en|einen, -e|einem, -e", "Wohin? Akkusativ. Masculine: einen neuen Tisch."],
    ["Das Buch liegt auf ___ neu___ Tisch.", "The book lies on a new table. (Wo?)", "einem, -en", "einen, -en|einem, -e|einen, -e", "Wo? Dativ. Masculine: einem neuen Tisch."],
    ["Sie stellt die Lampe neben ___ alt___ Sofa.", "She puts the lamp next to an old sofa. (Wohin?)", "ein, -es", "einem, -en|ein, -e|einem, -es", "Wohin? Akkusativ. Neuter: ein altes Sofa."],
    ["Die Lampe steht neben ___ alt___ Sofa.", "The lamp stands next to an old sofa. (Wo?)", "einem, -en", "ein, -es|einem, -e|ein, -en", "Wo? Dativ. Neuter: einem alten Sofa."],
    ["Wir fahren in ___ klein___ Stadt.", "We drive into a small town. (Wohin?)", "eine, -e", "einer, -en|eine, -en|einer, -e", "Wohin? Akkusativ. Feminine: eine kleine Stadt."],
    ["Wir wohnen in ___ klein___ Stadt.", "We live in a small town. (Wo?)", "einer, -en", "eine, -e|einer, -e|eine, -en", "Wo? Dativ. Feminine: einer kleinen Stadt."],
    ["Er hängt das Bild an ___ weiß___ Wand.", "He hangs the picture on a white wall. (Wohin?)", "eine, -e", "einer, -en|eine, -en|einer, -e", "Wohin? Akkusativ. Feminine: eine weiße Wand."],
    ["Das Bild hängt an ___ weiß___ Wand.", "The picture hangs on a white wall. (Wo?)", "einer, -en", "eine, -e|einer, -e|eine, -en", "Wo? Dativ. Feminine: einer weißen Wand."],
    ["Das Geschenk ist für ___ nett___ Lehrer.", "The present is for a nice teacher.", "einen, -en", "einem, -en|einen, -e|einem, -e", "für always takes Akkusativ. Masculine: einen netten Lehrer."],
    ["Ich gehe mit ___ nett___ Freundin ins Kino.", "I go to the cinema with a nice friend (female).", "einer, -en", "eine, -e|einer, -e|eine, -en", "mit always takes Dativ. Feminine: einer netten Freundin."],
    ["Wir gehen durch ___ dunkl___ Wald.", "We walk through a dark forest.", "einen, -en", "einem, -en|einen, -e|einem, -e", "durch always takes Akkusativ. Masculine: einen dunklen Wald."],
    ["Er kommt aus ___ klein___ Dorf.", "He comes from a small village.", "einem, -en", "ein, -es|einen, -en|einem, -e", "aus always takes Dativ. Neuter: einem kleinen Dorf."],
    ["Sie läuft um ___ groß___ See.", "She runs around a big lake.", "einen, -en", "einem, -en|einen, -e|einem, -e", "um always takes Akkusativ. Masculine (der See): einen großen See."],
  ], "Pick the article and the ending.");

T("reflexiv", G_LATEST, "Reflexive Verben", "reflexive verbs: mich, dich, sich, uns, euch",
  `<p>A reflexive verb needs a <b>Reflexivpronomen</b>: <b>mich, dich, sich, uns, euch, sich</b>. The pronoun points back to the subject: you do something to yourself. Only the <b>er/sie/es</b> and <b>sie/Sie</b> forms use <b>sich</b>.</p>`,
  `${TBL(["Person", "sich freuen"], [
     ["ich", "Ich freue <b>mich</b>."], ["du", "Du freust <b>dich</b>."], ["er/sie/es", "Er freut <b>sich</b>."],
     ["wir", "Wir freuen <b>uns</b>."], ["ihr", "Ihr freut <b>euch</b>."], ["sie/Sie", "Sie freuen <b>sich</b>."]])}
   ${TBL(["Verb", "Meaning", "Example"], [
     ["sich freuen (auf / über)", "to be glad", "Ich freue mich auf den Urlaub."],
     ["sich waschen", "to wash yourself", "Er wäscht sich jeden Morgen."],
     ["sich anziehen", "to get dressed", "Das Kind zieht sich allein an."],
     ["sich setzen", "to sit down", "Bitte setzen Sie sich!"],
     ["sich interessieren (für)", "to be interested", "Wir interessieren uns für Musik."],
     ["sich treffen (mit)", "to meet", "Ich treffe mich mit meiner Freundin."],
     ["sich erinnern (an)", "to remember", "Erinnerst du dich an den Film?"]])}
   <p>A reflexive verb has no room for an indirect object: you cannot "give" your joy to someone else.</p>`,
  [
    ["Ich freue ___ auf den Urlaub.", "I am looking forward to the holiday.", "mich", "dich|sich|uns", "ich goes with mich."],
    ["Du freust ___ auf das Wochenende.", "You are looking forward to the weekend.", "dich", "mich|sich|euch", "du goes with dich."],
    ["Er wäscht ___ jeden Morgen.", "He washes every morning.", "sich", "mich|dich|ihn", "er/sie/es goes with sich."],
    ["Wir freuen ___ auf die Ferien.", "We are looking forward to the holidays.", "uns", "euch|sich|mich", "wir goes with uns."],
    ["Ihr freut ___ über das Geschenk.", "You (plural) are happy about the present.", "euch", "uns|sich|dich", "ihr goes with euch."],
    ["Sie interessieren ___ für Sport.", "They are interested in sport.", "sich", "uns|euch|sie", "sie (they) goes with sich."],
    ["Das Kind zieht ___ allein an.", "The child gets dressed alone.", "sich", "mich|dich|es", "The subject is das Kind (es), so: sich."],
    ["Bitte setzen Sie ___!", "Please sit down!", "sich", "dich|euch|uns", "The polite Sie goes with sich."],
    ["Ich treffe ___ mit meiner Freundin.", "I meet my friend (female).", "mich", "dich|sich|mir", "ich goes with mich."],
    ["Erinnerst du ___ an den Film?", "Do you remember the film?", "dich", "mich|sich|dir", "du goes with dich."],
    ["Wir treffen ___ um acht.", "We meet at eight.", "uns", "euch|sich|wir", "wir goes with uns."],
    ["Ich interessiere mich ___ Musik.", "I am interested in music.", "für", "an|auf|mit", "sich interessieren für + Akkusativ."],
    ["Ich treffe mich ___ meiner Freundin.", "I meet my friend (female).", "mit", "an|für|auf", "sich treffen mit + Dativ."],
    ["Erinnerst du dich ___ den Film?", "Do you remember the film?", "an", "für|auf|mit", "sich erinnern an + Akkusativ."],
    ["Which verb is NOT reflexive?", "", "helfen", "sich waschen|sich setzen|sich freuen", "helfen is a pure Dativ verb: Ich helfe dir."],
    ["Why is there no Dativobjekt in 'Ich freue mich'?", "", "mich already fills the object slot and points back to the subject", "freuen takes Dativ|freuen needs a preposition|ich is Dativ", "A reflexive verb has no room for another object. The pronoun refers to the subject."],
  ], "Pick the Reflexivpronomen or the preposition.");
