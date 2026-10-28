const VERB32 = [
  ["sein", "war", "ist gewesen", "to be"], ["haben", "hatte", "hat gehabt", "to have"],
  ["werden", "wurde", "ist geworden", "to become"], ["gehen", "ging", "ist gegangen", "to go"],
  ["kommen", "kam", "ist gekommen", "to come"], ["bleiben", "blieb", "ist geblieben", "to stay"],
  ["fahren", "fuhr", "ist gefahren", "to drive, to go"], ["fliegen", "flog", "ist/hat geflogen", "to fly"],
  ["laufen", "lief", "ist gelaufen", "to run, to walk"], ["sehen", "sah", "hat gesehen", "to see"],
  ["finden", "fand", "hat gefunden", "to find"], ["essen", "aß", "hat gegessen", "to eat"],
  ["trinken", "trank", "hat getrunken", "to drink"], ["nehmen", "nahm", "hat genommen", "to take"],
  ["geben", "gab", "hat gegeben", "to give"], ["sprechen", "sprach", "hat gesprochen", "to speak"],
  ["schreiben", "schrieb", "hat geschrieben", "to write"], ["lesen", "las", "hat gelesen", "to read"],
  ["schlafen", "schlief", "hat geschlafen", "to sleep"], ["helfen", "half", "hat geholfen", "to help"],
  ["stehen", "stand", "hat gestanden", "to stand"], ["liegen", "lag", "hat gelegen", "to lie"],
  ["sitzen", "saß", "hat gesessen", "to sit"], ["rufen", "rief", "hat gerufen", "to call"],
  ["treffen", "traf", "hat getroffen", "to meet"], ["beginnen", "begann", "hat begonnen", "to begin"],
  ["heißen", "hieß", "hat geheißen", "to be called"], ["verlieren", "verlor", "hat verloren", "to lose"],
  ["vergessen", "vergaß", "hat vergessen", "to forget"], ["wissen", "wusste", "hat gewusst", "to know (a fact)"],
  ["denken", "dachte", "hat gedacht", "to think"], ["bringen", "brachte", "hat gebracht", "to bring"],
];

T("wortstellung", G_VERBS, "Wortstellung: Verb auf Position 2", "word order: verb in position 2",
  `<p><b>The conjugated verb is always in position 2.</b> Position means one block of the sentence, not one word. If something other than the subject starts the sentence (<i>Morgen</i> (tomorrow), <i>Heute</i> (today), <i>Danach</i> (afterwards), or a whole <i>Wenn</i>-clause (if-clause)), the verb comes next and the subject moves behind it.</p>
   <p>In a clause that starts with <b>weil, wenn, obwohl, dass</b> (because, if, although, that) the verb goes to the <b>end</b> of that clause.</p>`,
  `<p>The verb with the personal ending (<i>kaufe</i>, <i>besuchst</i>) is the second block of a statement. Whatever stands in front of it fills position 1.</p>
   ${TBL(["Position 1", "Position 2 (verb)", "Rest"], [
     ["Ich", "kaufe", "heute ein Buch. (I buy a book today.)"],
     ["Heute", "kaufe", "ich ein Buch. (Today I buy a book.)"],
     ["Wenn ich Zeit habe,", "besuche", "ich dich. (If I have time, I visit you.)"],
     ["Morgen", "fahre", "ich nach München. (Tomorrow I drive to Munich.)"],
   ])}
   <p>Your repeated mistake: <b>Wenn ich Zeit habe, ich besuche dich.</b> The whole <i>Wenn</i>-clause is position 1, so the verb must come right after the comma: <b>Wenn ich Zeit habe, besuche ich dich.</b></p>
   <h4>Clause with weil, wenn, obwohl, dass: verb at the end</h4>
   ${E("Weil ich müde bin, gehe ich schlafen.", "Because I am tired, I go to sleep.")}
   ${E("Obwohl es regnet, gehen wir spazieren.", "Although it is raining, we go for a walk.")}
   <p><b>Memory line:</b> Starts with Wenn/Weil/Obwohl clause, then the verb, then the subject. Starts with Morgen/Heute/Danach, then the verb, then the subject.</p>`,
  [
    ["Heute ___ ich meine Freundin.", "Today I visit my girlfriend.", "besuche", "ich besuche|besucht|besuchen", "Heute is position 1, so the verb comes next and ich follows it. The blank is only the verb (ich is already there)."],
    ["Wenn ich krank bin, ___ ich zu Hause.", "If I am ill, I stay at home.", "bleibe", "ich bleibe|bleibt|bleiben", "The Wenn-clause fills position 1. The main-clause verb comes straight after the comma, then the subject: bleibe ich."],
    ["Danach ___ wir einen Kaffee.", "Afterwards we drink a coffee.", "trinken", "wir trinken|getrunken|trinkt", "Danach is position 1, the verb is position 2, then wir."],
    ["Weil er keine Zeit hat, ___ er nicht mit.", "Because he has no time, he does not come along.", "kommt", "er kommt|kommen|gekommen", "Weil-clause first, so the verb comes next: kommt er. mitkommen is separable: mit goes to the end."],
    ["Morgen ___ meine Eltern nach Wien.", "Tomorrow my parents go to Vienna.", "fahren", "meine Eltern fahren|fährt|fuhr", "Morgen is position 1, then the verb. Parents is plural (they), so fahren."],
    ["Obwohl sie müde ist, ___ sie weiter.", "Although she is tired, she keeps working.", "arbeitet", "sie arbeitet|arbeiten|gearbeitet", "Obwohl-clause first, then the verb, then sie. The stem ends in t: arbeitet."],
    ["Wenn-clause first: which sentence is correct?", "If I have time, I visit you.", "Wenn ich Zeit habe, besuche ich dich.", "Wenn ich Zeit habe, ich besuche dich.|Wenn ich habe Zeit, besuche ich dich.|Wenn ich habe Zeit, ich besuche dich.", "Verb at the end of the Wenn-clause (habe), then the main-clause verb straight after the comma (besuche ich).", "Where is the verb in the Wenn-clause, and what comes right after the comma?"],
    ["Morgen first: which sentence is correct?", "Tomorrow I drive to Munich.", "Morgen fahre ich nach München.", "Morgen ich fahre nach München.|Ich morgen fahre nach München.|Morgen nach München fahre ich.", "Morgen is position 1, so the verb must be position 2: Morgen fahre ich. Never Morgen ich fahre."],
    ["Weil es regnet, ___ wir zu Hause.", "Because it is raining, we stay at home.", "bleiben", "wir bleiben|bleibt|geblieben", "Weil-clause is position 1, then the verb bleiben, then wir."],
    ["Weil ich müde ___, gehe ich schlafen.", "Because I am tired, I go to sleep.", "bin", "bin ich|ich bin|ist", "After weil the verb goes to the end of its clause: weil ich müde bin."],
    ["Sie macht ihre Hausaufgaben danach. Which version starts with Danach correctly?", "Afterwards she does her homework.", "Danach macht sie ihre Hausaufgaben.", "Danach sie macht ihre Hausaufgaben.|Danach ihre Hausaufgaben macht sie.|Danach sie ihre Hausaufgaben macht.", "Danach is position 1, so the verb macht is position 2 and the subject sie follows."],
    ["Obwohl-clause first: which sentence is correct?", "Although he is tired, he goes for a walk.", "Obwohl er müde ist, geht er spazieren.", "Obwohl er müde ist, er geht spazieren.|Obwohl er ist müde, geht er spazieren.|Obwohl er müde ist, spazieren geht er.", "Obwohl sends ist to the end of its clause. The main clause then starts with its verb: geht er."],
    ["Wenn ich genug Geld habe, ___ ich ein neues Handy.", "If I have enough money, I buy a new phone.", "kaufe", "ich kaufe|kauft|gekauft", "The Wenn-clause fills position 1, so the verb comes next: kaufe ich."],
    ["Seit einem Jahr ___ ich in Wien.", "I have lived in Vienna for a year.", "wohne", "ich wohne|wohnt|wohnen", "Seit einem Jahr is position 1 (one block), so the verb is position 2. This was one of your diagnostic gaps."],
  ]);

T("habensein", G_VERBS, "Perfekt: haben oder sein", "present perfect: have or be",
  `<p>Perfekt = <b>haben or sein</b> (position 2) + <b>Partizip II</b> (end).</p>
   <p><b>sein</b>: movement from A to B (<i>gehen, fahren, kommen, fliegen</i>) and change of state (<i>einschlafen, aufwachen, wachsen, werden, sterben</i>), plus <i>sein</i> and <i>bleiben</i> themselves.</p>
   <p><b>haben</b>: everything else, especially verbs with an Akkusativ object (<i>essen, kaufen, sehen, lesen</i>) and states that do not change (<i>schlafen, arbeiten, lernen</i>).</p>`,
  `<p>Ask two questions. Is someone moving from A to B? Does something change (awake to asleep, small to big)? If yes to either, use <b>sein</b>. Otherwise <b>haben</b>.</p>
   ${TBL(["haben (have)", "sein (be)"], [
     ["essen: hat gegessen (ate)", "gehen: ist gegangen (went)"],
     ["kaufen: hat gekauft (bought)", "fahren: ist gefahren (drove)"],
     ["lernen: hat gelernt (learned)", "kommen: ist gekommen (came)"],
     ["schlafen: hat geschlafen (slept)", "einschlafen: ist eingeschlafen (fell asleep)"],
     ["arbeiten: hat gearbeitet (worked)", "aufstehen: ist aufgestanden (got up)"],
   ])}
   <p>Also with <b>sein</b>: <i>sein</i> (ist gewesen), <i>bleiben</i> (ist geblieben), <i>werden</i> (ist geworden). Compare <i>schlafen</i> (state, haben) with <i>einschlafen</i> (change, sein).</p>
   <p>In Austria and the south you will often hear <i>ich bin gestanden / gesessen / gelegen</i>. Haben is the standard form for exams: <i>ich habe gestanden</i>.</p>
   <h4>Perfekt in all persons</h4>
   ${TBL(["", "machen (haben)", "gehen (sein)", "anrufen (haben)"], [
     ["ich", "habe gemacht", "bin gegangen", "habe angerufen"], ["du", "hast gemacht", "bist gegangen", "hast angerufen"],
     ["er/sie/es", "hat gemacht", "ist gegangen", "hat angerufen"], ["wir", "haben gemacht", "sind gegangen", "haben angerufen"],
     ["ihr", "habt gemacht", "seid gegangen", "habt angerufen"], ["sie/Sie", "haben gemacht", "sind gegangen", "haben angerufen"],
   ])}
   <p>Your mistake to fix: <b>Gestern habe ich nach Hause gegangen</b> is wrong. <b>Gestern bin ich nach Hause gegangen.</b> (Yesterday I went home.)</p>`,
  [
    ["Gestern ___ ich nach Hause gegangen.", "Yesterday I went home.", "bin", "habe|hat|war", "gehen is movement to a place, so sein: ich bin gegangen. This was a diagnostic gap.", "Is someone moving from A to B?"],
    ["Wir ___ gestern einen Film gesehen.", "We watched a film yesterday.", "haben", "sind|seid|hat", "sehen has an object (einen Film) and no movement: haben."],
    ["Sie ___ um sieben Uhr aufgestanden.", "She got up at seven.", "ist", "hat|hast|sind", "From lying to standing is a change of state: sein."],
    ["Er ___ den ganzen Tag geschlafen.", "He slept all day.", "hat", "ist|hast|bin", "Sleeping is a state, nothing changes: haben."],
    ["Er ___ gestern um 22 Uhr eingeschlafen.", "He fell asleep yesterday at 10 pm.", "ist", "hat|haben|sind", "Falling asleep is a change of state: sein. Compare schlafen (haben)."],
    ["Ich ___ meine Mutter angerufen.", "I called my mother.", "habe", "bin|hat|habt", "anrufen has an Akkusativ object (meine Mutter): haben."],
    ["Das Kind ___ viel gewachsen.", "The child has grown a lot.", "ist", "hat|haben|sind", "Growing is a change of state: sein."],
    ["Ich ___ meinen Schlüssel verloren.", "I lost my key.", "habe", "bin|hat|hast", "verlieren has an object (meinen Schlüssel): haben."],
    ["Wir ___ lange auf den Bus gewartet.", "We waited a long time for the bus.", "haben", "sind|hat|seid", "warten is a state, no movement: haben."],
    ["Du ___ viel gelernt.", "You learned a lot.", "hast", "bist|hat|habe", "lernen: haben. du goes with hast."],
    ["Ihr ___ ins Kino gegangen.", "You (plural) went to the cinema.", "seid", "habt|sind|bist", "gehen is movement: sein. ihr goes with seid."],
    ["Meine Schwester ___ früh aufgestanden.", "My sister got up early.", "ist", "hat|sind|hast", "aufstehen is a change of state: sein."],
    ["Sie ___ Ärztin geworden.", "She became a doctor.", "ist", "hat|sind|hast", "werden always takes sein."],
    ["Wir ___ nach Salzburg gefahren.", "We drove to Salzburg.", "sind", "haben|seid|hat", "fahren with a destination (nach Salzburg) is movement: sein."],
    ["Ich ___ zwei Stunden geschlafen.", "I slept for two hours.", "habe", "bin|hat|habt", "schlafen is a state: haben."],
    ["Wir ___ zu Hause geblieben.", "We stayed at home.", "sind", "haben|hatten|waren", "bleiben is one of the sein exceptions: ist geblieben."],
  ]);

T("partizip", G_VERBS, "Partizip II: regelmäßig oder unregelmäßig", "past participle: regular or irregular",
  `<p><b>Regular (weak):</b> ge + stem + <b>t</b>: <i>geplant, gedauert, gelernt</i>.</p>
   <p><b>Irregular (strong):</b> ge + stem + <b>en</b>, often with a vowel change: <i>gesehen, gegangen, geschrieben</i>.</p>
   <p>Stem ends in <b>t or d</b>: extra e (<i>gewartet, gearbeitet</i>). <b>No ge-</b> after be-, ge-, er-, ver-, ent-, zer- (<i>besucht, erklärt, verloren</i>). <b>Separable</b> verbs put ge in the middle (<i>aufgestanden, angerufen</i>). Mixed: <i>denken, bringen, wissen</i> (<i>gedacht, gebracht, gewusst</i>).</p>`,
  `<p>The Partizip is the tell for regular versus irregular. Sophie's task was dauern, warten, planen. All three are regular: they end in <b>-t</b>, not in -en.</p>
   ${E("Ich habe die Reise geplant und gewartet, aber es hat lange gedauert.", "I planned the trip and waited, but it took a long time.")}
   ${TBL(["", "Regular (schwach)", "Irregular (stark)"], [
     ["Partizip II", "ge + stem + t: gelernt, geplant", "ge + stem + en: gegangen, gesehen"],
     ["Präteritum", "stem + te: plante, dauerte", "no -te, vowel changes: ging, sah"],
     ["Mixed", "denken: dachte, gedacht", "bringen: brachte, gebracht; kennen: kannte, gekannt; wissen: wusste, gewusst"],
   ])}
   <p><b>Why gewartet and not gewartt?</b> The stem ends in t, so an extra e is needed to pronounce it. Same for <i>arbeiten</i> (gearbeitet) and <i>du findest</i>.</p>
   <h4>32 verbs to know</h4>
   ${TBL(["Infinitiv", "Präteritum (er)", "Perfekt", "Meaning"], VERB32)}`,
  [
    ["Ich habe die Reise ___. (planen)", "I planned the trip.", "geplant", "geplanen|geplannt|plant", "planen is regular: ge + stem + t."],
    ["Es hat lange ___. (dauern)", "It took a long time.", "gedauert", "gedauren|gedauern|dauert", "dauern is regular: ge + dauer + t."],
    ["Wir haben lange ___. (warten)", "We waited a long time.", "gewartet", "gewartt|gewarten|wartet", "The stem ends in t, so an extra e: gewartet."],
    ["Ich habe gestern Pizza ___. (essen)", "I ate pizza yesterday.", "gegessen", "geesst|gegesst|geessen", "essen is irregular: ge + essen."],
    ["Er ist nach Hause ___. (gehen)", "He went home.", "gegangen", "gegeht|gegehen|gegangt", "gehen is irregular: gegangen (vowel change e to a)."],
    ["Wir haben einen Film ___. (sehen)", "We watched a film.", "gesehen", "gesieht|gesehnt|gesehet", "sehen is irregular: ge + sehen. The du/er stem change (sieht) does not go into the Partizip."],
    ["Ich habe meinen Schlüssel ___. (verlieren)", "I lost my key.", "verloren", "geverloren|verlieret|verlort", "ver- never gets ge-. verlieren is irregular: verloren."],
    ["Sie hat ihre Mutter ___. (anrufen)", "She called her mother.", "angerufen", "geanrufen|angeruft|angegerufen", "Separable verb: ge goes in the middle (an + ge + rufen), written in one word."],
    ["Er ist früh ___. (aufstehen)", "He got up early.", "aufgestanden", "geaufstanden|aufgestehen|aufgestand", "Separable and irregular: auf + ge + standen."],
    ["Ich habe meine Freundin ___. (besuchen)", "I visited my girlfriend.", "besucht", "gebesucht|besuchen|gebesuchen", "be- gets no ge-. besuchen is regular: besucht."],
    ["Sie hat lange ___. (arbeiten)", "She worked for a long time.", "gearbeitet", "gearbeit|gearbeiten|gearbeitt", "Regular, stem ends in t: extra e."],
    ["Ich habe an dich ___. (denken)", "I thought of you.", "gedacht", "gedenkt|gedenket|gedanken", "denken is a mixed verb: a vowel change (dachte) but the -t ending: gedacht."],
    ["Er hat mir ein Geschenk ___. (bringen)", "He brought me a present.", "gebracht", "gebringt|gebringen|gebrungen", "bringen is mixed: brachte, gebracht."],
    ["Ich habe das nicht ___. (wissen)", "I did not know that.", "gewusst", "gewisst|gewissen|gewüsst", "wissen is mixed: wusste, gewusst."],
    ["Sie hat einen Brief ___. (schreiben)", "She wrote a letter.", "geschrieben", "geschreibt|geschriebt|geschreiben", "schreiben is irregular: ge + stem with vowel change + en."],
    ["Which Partizip II belongs to a regular verb?", "", "gelernt", "gesungen|getrunken|gefahren", "gelernt ends in -t: regular (lernen). The others end in -en: irregular."],
    ["A regular Partizip II ends in ___.", "", "-t", "-en|-te|-st", "Regular verbs: ge + stem + t (geplant). Irregular: ge + stem + en (gesehen)."],
  ]);

T("praesens", G_VERBS, "Präsens: ich, du, er, wir, ihr, sie", "present tense conjugation",
  `<p>Regular endings: <b>-e, -st, -t, -en, -t, -en</b>. Stem ends in t/d: add e (<i>du wartest, er arbeitet</i>).</p>
   <p><b>Stem changers</b> change only in <b>du</b> and <b>er/sie/es</b>: a becomes ä (<i>fahren: du fährst</i>), e becomes i or ie (<i>essen: du isst, sehen: du siehst</i>). <i>sein, haben, werden, wissen</i> are fully irregular and must be learned.</p>`,
  `<p>Learn the pattern, not 20 separate verbs. ich, wir, ihr, sie are always normal. Only du and er/sie/es can change the stem.</p>
   <h4>Regular verbs</h4>
   ${CONJ(["lernen (learn)", "machen (do, make)", "warten (wait)", "arbeiten (work)"], [
     "lerne lernst lernt lernen lernt lernen", "mache machst macht machen macht machen",
     "warte wartest wartet warten wartet warten", "arbeite arbeitest arbeitet arbeiten arbeitet arbeiten"])}
   <h4>The three you cannot avoid, plus wissen</h4>
   ${CONJ(["sein (be)", "haben (have)", "werden (become)", "wissen (know)"], [
     "bin bist ist sind seid sind", "habe hast hat haben habt haben",
     "werde wirst wird werden werdet werden", "weiß weißt weiß wissen wisst wissen"])}
   <h4>Stem changers: a becomes ä</h4>
   ${CONJ(["fahren (drive)", "schlafen (sleep)", "laufen (run)"], [
     "fahre fährst fährt fahren fahrt fahren", "schlafe schläfst schläft schlafen schlaft schlafen",
     "laufe läufst läuft laufen lauft laufen"])}
   <h4>Stem changers: e becomes i or ie</h4>
   ${CONJ(["essen (eat)", "lesen (read)", "sehen (see)", "geben (give)"], [
     "esse isst isst essen esst essen", "lese liest liest lesen lest lesen",
     "sehe siehst sieht sehen seht sehen", "gebe gibst gibt geben gebt geben"])}
   ${CONJ(["nehmen (take)", "sprechen (speak)", "helfen (help)"], [
     "nehme nimmst nimmt nehmen nehmt nehmen", "spreche sprichst spricht sprechen sprecht sprechen",
     "helfe hilfst hilft helfen helft helfen"])}
   <p>Careful: <i>seid</i> (you are, ihr) is not <i>seit</i> (since).</p>`,
  [
    ["Du ___ nach Wien. (fahren)", "You drive to Vienna.", "fährst", "fahrst|fährt|fahrt", "fahren changes a to ä with du and er: du fährst."],
    ["Er ___ nach Wien. (fahren)", "He drives to Vienna.", "fährt", "fahrt|fahrst|fährst", "er also gets the ä: er fährt."],
    ["Ihr ___ nach Wien. (fahren)", "You (plural) drive to Vienna.", "fahrt", "fährt|fahren|fährst", "ihr has no stem change: ihr fahrt."],
    ["Du ___ einen Apfel. (essen)", "You eat an apple.", "isst", "esst|essen|essst", "essen: e becomes i for du: du isst (the stem ends in s, so only one t is added)."],
    ["Er ___ ein Buch. (lesen)", "He reads a book.", "liest", "lest|lesst|liesst", "lesen: e becomes ie for du and er: er liest."],
    ["Du ___ den Hund. (sehen)", "You see the dog.", "siehst", "sehst|sieht|seht", "sehen: e becomes ie for du: du siehst."],
    ["Sie (she) ___ mir das Buch. (geben)", "She gives me the book.", "gibt", "gebt|giebt|geben", "geben: e becomes i for du and er/sie/es: sie gibt."],
    ["Du ___ den Bus. (nehmen)", "You take the bus.", "nimmst", "nehmst|nimmt|nehmt", "nehmen: e becomes i and the h disappears: du nimmst."],
    ["Er ___ gut Deutsch. (sprechen)", "He speaks German well.", "spricht", "sprecht|sprichst|sprechen", "sprechen: e becomes i for er: er spricht."],
    ["Du ___ mir. (helfen)", "You help me.", "hilfst", "helfst|hilft|helft", "helfen: e becomes i for du: du hilfst."],
    ["Du ___ lange. (warten)", "You wait a long time.", "wartest", "wartst|wartet|warten", "The stem ends in t, so du needs an extra e: wartest."],
    ["Er ___ im Büro. (arbeiten)", "He works in the office.", "arbeitet", "arbeitt|arbeiten|arbeitest", "The stem ends in t: er arbeitet (extra e)."],
    ["Ihr ___ lange. (warten)", "You (plural) wait a long time.", "wartet", "wartest|wartt|warten", "ihr: stem + t, with an extra e because the stem ends in t."],
    ["Du ___ müde. (sein)", "You are tired.", "bist", "bin|ist|seid", "sein: ich bin, du bist, er ist."],
    ["Ihr ___ müde. (sein)", "You (plural) are tired.", "seid", "sind|seit|bist", "ihr seid. seit (since) is a different word."],
    ["Du ___ Zeit. (haben)", "You have time.", "hast", "habst|hat|habt", "haben: du hast, er hat, ihr habt."],
    ["Du ___ Arzt. (werden)", "You become a doctor.", "wirst", "werdest|wird|werdet", "werden: ich werde, du wirst, er wird."],
    ["Ich ___ es nicht. (wissen)", "I do not know it.", "weiß", "weißt|wisse|wissen", "wissen: ich weiß, du weißt, er weiß. ich and er are the same."],
    ["Du ___ es nicht. (wissen)", "You do not know it.", "weißt", "weiß|wisst|wissen", "du weißt (ß, ending -t)."],
    ["Es ___ lange. (dauern)", "It takes a long time.", "dauert", "dauer|dauern|dauerst", "dauern is regular: es dauert."],
  ]);

T("praeteritum", G_VERBS, "Präteritum und Plusquamperfekt", "simple past and past perfect",
  `<p><b>Präteritum:</b> regular = stem + <b>te</b> (<i>machte, wartete</i>). Irregular = vowel change, no ending for ich and er (<i>ging, sah, kam</i>). <i>war, hatte, wurde</i> for sein, haben, werden. Modals: <i>musste, konnte, wollte, sollte, durfte</i> (no umlaut).</p>
   <p><b>Plusquamperfekt</b> (past perfect): <b>hatte or war + Partizip II</b>. It is the earlier of two past events.</p>`,
  `${TBL(["", "sein", "haben", "werden", "machen", "warten"], [
     ["ich", "war", "hatte", "wurde", "machte", "wartete"], ["du", "warst", "hattest", "wurdest", "machtest", "wartetest"],
     ["er/sie/es", "war", "hatte", "wurde", "machte", "wartete"], ["wir", "waren", "hatten", "wurden", "machten", "warteten"],
     ["ihr", "wart", "hattet", "wurdet", "machtet", "wartetet"], ["sie/Sie", "waren", "hatten", "wurden", "machten", "warteten"]])}
   ${CONJ(["gehen", "kommen", "sehen", "finden", "fahren", "geben"], [
     "ging gingst ging gingen gingt gingen", "kam kamst kam kamen kamt kamen", "sah sahst sah sahen saht sahen",
     "fand fandest fand fanden fandet fanden", "fuhr fuhrst fuhr fuhren fuhrt fuhren", "gab gabst gab gaben gabt gaben"])}
   ${CONJ(["müssen", "können", "wollen", "sollen", "dürfen"], [
     "musste musstest musste mussten musstet mussten", "konnte konntest konnte konnten konntet konnten",
     "wollte wolltest wollte wollten wolltet wollten", "sollte solltest sollte sollten solltet sollten",
     "durfte durftest durfte durften durftet durften"])}
   <p>Strong verbs: ich and er have no ending, then du -st, wir -en, ihr -t, sie -en. Stems ending in d/t take an extra e (<i>fandest, fandet</i>).</p>
   <h4>Plusquamperfekt: hatte or war + Partizip II</h4>
   ${E("Als ich ankam, war der Zug schon abgefahren.", "When I arrived, the train had already left.")}
   ${E("Ich hatte schon gegessen, als du angerufen hast.", "I had already eaten when you called.")}
   <p>The helper follows the same rule as the Perfekt: movement or change gets <i>war</i>, everything else <i>hatte</i>. In spoken German (especially in Austria) people use the Perfekt for most past events. Präteritum is common for sein, haben and the modals, and in writing.</p>`,
  [
    ["Ich ___ gestern sehr müde. (sein)", "I was very tired yesterday.", "war", "wurde|bin|wäre", "Präteritum of sein: ich war."],
    ["Sie ___ keine Zeit. (haben)", "She had no time.", "hatte", "hätte|hat|haben", "Präteritum of haben: sie hatte. hätte is Konjunktiv II (would have)."],
    ["Er ___ lange arbeiten. (müssen)", "He had to work for a long time.", "musste", "müsste|muss|gemusst", "Modal in the Präteritum: stem + te, umlaut disappears: musste."],
    ["Wir ___ nicht kommen. (können)", "We could not come.", "konnten", "könnten|konnte|kannten", "können: konnte, plus -en for wir. könnten would be Konjunktiv II."],
    ["Ich ___ lange auf den Zug. (warten)", "I waited a long time for the train.", "wartete", "wartte|warte|wartet", "Regular, stem ends in t: stem + ete."],
    ["Er ___ nach Hause. (gehen)", "He went home.", "ging", "gehte|gingt|ginge", "gehen is irregular: ging. ginge is Konjunktiv II."],
    ["Wir ___ einen Film. (sehen)", "We saw a film.", "sahen", "sehten|sahn|saht", "sehen: sah, plus -en for wir."],
    ["Du ___ den Schlüssel. (finden)", "You found the key.", "fandest", "fandst|fandet|fundest", "Stem ends in d: extra e before -st: fandest."],
    ["Ich ___ nach Wien. (fahren)", "I drove to Vienna.", "fuhr", "fahrte|fuhre|fuhrte", "fahren is irregular: fuhr, no ending for ich."],
    ["Als ich ankam, ___ der Zug schon abgefahren.", "When I arrived, the train had already left.", "war", "hatte|wurde|ist", "Plusquamperfekt. abfahren is movement, so war + Partizip II."],
    ["Ich ___ schon gegessen, als du angerufen hast.", "I had already eaten when you called.", "hatte", "war|habe|hätte", "Plusquamperfekt. essen takes haben: hatte + gegessen."],
    ["Nachdem wir gegessen ___, gingen wir spazieren.", "After we had eaten, we went for a walk.", "hatten", "haben|waren|hatte", "Plusquamperfekt: hatten + gegessen (the earlier action). wir needs hatten."],
    ["Sie war vorher nie in Berlin ___.", "She had never been in Berlin before.", "gewesen", "gewest|gesein|war", "Plusquamperfekt of sein: war + gewesen."],
    ["Which tense is 'Ich hatte gegessen'?", "I had eaten.", "Plusquamperfekt (past perfect)", "Perfekt (present perfect)|Präteritum (simple past)|Futur I (future)", "hatte + Partizip II is the Plusquamperfekt."],
  ]);

T("futur", G_VERBS, "Futur I: werden + Infinitiv", "future tense",
  `<p>Futur I = <b>werden</b> (position 2) + <b>infinitive</b> (end). <i>Ich werde lernen.</i> (I will learn.) The present with a time word also works: <i>Morgen gehe ich zum Arzt.</i> (Tomorrow I go to the doctor.)</p>
   <p>Futur I can also express a guess: <i>Er wird wahrscheinlich zu Hause sein.</i> (He is probably at home.)</p>`,
  `<p>Pattern: subject + <b>werde/wirst/wird/werden/werdet/werden</b> + rest + <b>infinitive</b>.</p>
   ${E("Ich werde Orangensaft trinken.", "I will drink orange juice.")}
   ${E("Wirst du Orangensaft trinken?", "Will you drink orange juice?")}
   ${E("Mein Freund wird heute einen Laptop kaufen.", "My friend will buy a laptop today.")}
   ${E("Wir werden nächstes Jahr umziehen.", "We will move next year.")}
   <p>A separable verb (umziehen) stays in one piece at the end. The same sentence in Perfekt: <i>Mein Freund hat heute einen Laptop gekauft.</i> (My friend bought a laptop today.)</p>
   <p><b>Note on your lesson sheet:</b> it says "Futur 2: werden und Infinitiv". Werden + infinitive is normally called <b>Futur I</b>. Futur II is werden + Partizip II + haben/sein (<i>Er wird gegangen sein</i>, he will have gone). Ask Sophie which name she uses.</p>`,
  [
    ["Mein Freund ___ heute einen Laptop kaufen.", "My friend will buy a laptop today.", "wird", "werden|wurde|würde", "er takes wird. The infinitive kaufen goes to the end."],
    ["Ich ___ Orangensaft trinken.", "I will drink orange juice.", "werde", "wurde|wird|werden", "ich takes werde."],
    ["___ du Orangensaft trinken?", "Will you drink orange juice?", "Wirst", "Wirdst|Werde|Wurdest", "du takes wirst. In a question the verb is first."],
    ["Wir werden nächstes Jahr ___. (umziehen)", "We will move next year.", "umziehen", "umgezogen|ziehen um|zuumziehen", "After werden the infinitive stands at the end. The separable verb stays in one piece."],
    ["Ich werde die Reise ___ und warten. (planen)", "I will plan the trip and wait.", "planen", "geplant|plant|plane", "After werden: infinitive (planen), not Partizip II."],
    ["Es wird lange ___. (dauern)", "It will take a long time.", "dauern", "gedauert|dauert|dauerte", "werden + infinitive."],
    ["Which sentence is correct?", "My friend will buy a laptop.", "Mein Freund wird einen Laptop kaufen.", "Mein Freund wird kaufen einen Laptop.|Mein Freund wird einen Laptop gekauft.|Mein Freund werden einen Laptop kaufen.", "wird in position 2, infinitive (kaufen) at the end."],
    ["Morgen ___ ich zum Arzt gehen.", "Tomorrow I will go to the doctor.", "werde", "ich werde|wird|werden", "Morgen is position 1, then the verb werde, then ich."],
    ["Er ___ wahrscheinlich zu Hause sein.", "He is probably at home (a guess).", "wird", "werde|wurde|werden", "Futur I can express a guess about the present."],
    ["Which sentence is in Futur I?", "", "Ich werde lernen. (I will learn.)", "Ich habe gelernt. (I learned.)|Ich lerne gerade. (I am learning now.)|Ich hatte gelernt. (I had learned.)", "werden + infinitive = Futur I."],
  ]);

T("modal", G_VERBS, "Modalverben", "modal verbs",
  `<p><b>müssen</b> (must), <b>können</b> (can), <b>sollen</b> (should, supposed to), <b>wollen</b> (want), <b>dürfen</b> (may), <b>mögen</b> (like). The modal is in position 2, the second verb is an <b>infinitive at the end</b>. ich and er/sie/es have <b>no ending</b>: <i>ich muss, er muss, er will</i>.</p>
   <p><b>nicht müssen</b> = not necessary. <b>nicht dürfen</b> = forbidden. <b>sollen</b> = someone else wants it. <b>wollen</b> = you want it.</p>`,
  `${CONJ(["müssen (must)", "können (can)", "sollen (should)", "wollen (want)", "dürfen (may)", "mögen (like)"], [
     "muss musst muss müssen müsst müssen", "kann kannst kann können könnt können", "soll sollst soll sollen sollt sollen",
     "will willst will wollen wollt wollen", "darf darfst darf dürfen dürft dürfen", "mag magst mag mögen mögt mögen"])}
   <p>A separable verb stays in one piece at the end: <i>Er will ein Angebot annehmen.</i> (He wants to accept an offer.)</p>
   <h4>Sophie's homework, rewritten with a modal</h4>
   ${E("Ich will in den Urlaub fliegen.", "I want to fly on holiday.")}
   ${E("Ich muss Deutsch lernen.", "I must learn German.")}
   ${E("Wir müssen Steuern zahlen.", "We have to pay taxes.")}
   ${E("Ihr könnt in der Stadt wohnen.", "You can live in the city.")}
   ${E("Er will ein Angebot annehmen.", "He wants to accept an offer.")}
   <p>English speakers mix these up: <b>Du musst nicht kommen</b> = you do not have to come. <b>Du darfst nicht kommen</b> = you are not allowed to come. <i>mögen</i> is "to like" (<i>Ich mag Kaffee</i>, I like coffee). <i>Ich möchte</i> means "I would like".</p>`,
  [
    ["Ich ___ in den Urlaub fliegen. (wollen)", "I want to fly on holiday.", "will", "wolle|wollt|wollen", "ich and er have no ending: ich will."],
    ["Er ___ ein Angebot annehmen. (wollen)", "He wants to accept an offer.", "will", "wollt|wollen|willt", "er will, not er wollt. annehmen goes to the end in one piece."],
    ["Wir ___ Steuern zahlen. (müssen)", "We have to pay taxes.", "müssen", "muss|müsst|musst", "wir takes -en: müssen."],
    ["Ihr ___ in der Stadt wohnen. (können)", "You (plural) can live in the city.", "könnt", "können|kannst|kann", "ihr takes -t: könnt."],
    ["Hier ___ man nicht rauchen. (dürfen)", "You may not smoke here.", "darf", "dürft|darfst|dürfen", "man is like er: darf. nicht dürfen = forbidden."],
    ["___ du mir helfen? (können)", "Can you help me?", "Kannst", "Kann|Könnt|Kannt", "In a question the modal is first. du takes -st: kannst."],
    ["Ihr ___ heute nicht kommen. (not necessary)", "You do not have to come today.", "müsst", "dürft|müssen|musst", "nicht müssen = not necessary. dürft would mean not allowed."],
    ["Der Arzt sagt, ich ___ mehr schlafen. (sollen)", "The doctor says I should sleep more.", "soll", "sollt|will|solle", "sollen = someone else wants it (the doctor). ich soll, no ending."],
    ["Morgen ___ ich früh aufstehen. (müssen)", "Tomorrow I have to get up early.", "muss", "musst|müsst|müssen", "Morgen is position 1, muss is position 2, aufstehen goes to the end."],
    ["Ich muss Deutsch ___. (lernen)", "I must learn German.", "lernen", "gelernt|lerne|zu lernen", "After a modal the second verb is a bare infinitive at the end."],
    ["Er kann gut Deutsch ___. (sprechen)", "He can speak German well.", "sprechen", "spricht|gesprochen|sprach", "Infinitive at the end. The stem change (spricht) only appears when sprechen is the conjugated verb."],
    ["Du ___ hier nicht parken. (dürfen)", "You may not park here.", "darfst", "darf|dürft|dürfst", "du takes -st: darfst."],
    ["Wir ___ heute ins Kino gehen. (wollen)", "We want to go to the cinema today.", "wollen", "wollt|will|wolle", "wir takes -en: wollen."],
    ["Sie (she) ___ Kaffee. (mögen)", "She likes coffee.", "mag", "mögt|möge|mögen", "mögen: ich mag, er/sie mag, no ending."],
    ["Which sentence means 'You do not have to come'?", "", "Du musst nicht kommen.", "Du darfst nicht kommen. (You are not allowed to come.)|Du kannst nicht kommen. (You cannot come.)|Du sollst nicht kommen. (You should not come.)", "nicht müssen = not necessary. nicht dürfen = forbidden."],
  ]);

T("konjunktiv", G_VERBS, "Konjunktiv II: wäre, hätte, würde", "subjunctive: wishes, politeness, hypotheticals",
  `<p>Forms: <b>wäre</b> (would be), <b>hätte</b> (would have), <b>könnte</b> (could), <b>müsste</b> (would have to), <b>würde</b> + infinitive (would do). For sein and haben use <b>wäre/hätte</b>, not "würde sein / würde haben".</p>
   <p>Pattern: <b>Wenn + Konjunktiv II (verb at the end), würde + infinitive.</b> <i>Wenn ich reich wäre, würde ich ein Haus kaufen.</i> (If I were rich, I would buy a house.) Do not use the plain present for something unreal.</p>`,
  `${TBL(["Infinitiv", "Konjunktiv II"], [
     ["sein (be)", "ich wäre"], ["haben (have)", "ich hätte"], ["können (can)", "ich könnte"],
     ["müssen (must)", "ich müsste"], ["dürfen (may)", "ich dürfte"], ["werden (become)", "ich würde"],
     ["gehen (go)", "ich ginge / ich würde gehen"], ["kaufen (buy)", "ich kaufte / ich würde kaufen"]])}
   <h4>When to use it</h4>
   ${E("Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.", "If I had more money, I would buy a house. (hypothetical)")}
   ${E("Ich wäre gern am Meer. / Ich hätte gern einen Hund.", "I would like to be at the sea. / I would like a dog. (wishes)")}
   ${E("Könnten Sie mir bitte helfen?", "Could you help me please? (polite request)")}
   ${E("An deiner Stelle würde ich mehr lernen.", "In your place I would study more. (advice)")}
   <h4>Real versus hypothetical</h4>
   ${E("Wenn ich Zeit habe, besuche ich dich.", "If I have time, I visit you. (real, can happen)")}
   ${E("Wenn ich Zeit hätte, würde ich dich besuchen.", "If I had time, I would visit you. (hypothetical)")}
   <p>In the Wenn-clause the verb is at the end. In the main clause <i>würde</i> is in position 2 and the infinitive goes to the end.</p>`,
  [
    ["Wenn ich reich ___, würde ich um die Welt reisen.", "If I were rich, I would travel around the world.", "wäre", "würde|bin|war", "sein in Konjunktiv II: ich wäre. Never würde sein."],
    ["Wenn ich mehr Zeit ___, würde ich Sport machen.", "If I had more time, I would do sport.", "hätte", "habe|hatte|würde", "haben in Konjunktiv II: ich hätte."],
    ["Wenn ich du ___, würde ich das Angebot annehmen.", "If I were you, I would accept the offer.", "wäre", "war|würde sein|wurde", "Hypothetical: wäre."],
    ["Ich ___ gern ein eigenes Haus. (haben)", "I would like to have my own house.", "hätte", "habe|hatte|würde", "A wish: hätte gern."],
    ["___ du mir bitte helfen? (können)", "Could you help me please?", "Könntest", "Kannst|Konntest|Könnt", "A polite request uses Konjunktiv II: du könntest."],
    ["Wenn sie in Paris ___, würde sie den Eiffelturm besuchen.", "If she were in Paris, she would visit the Eiffel Tower.", "wäre", "ist|war|würde", "Hypothetical: sie wäre."],
    ["An deiner Stelle ___ ich früher schlafen gehen. (werden)", "In your place I would go to bed earlier.", "würde", "wurde|werde|wäre", "Advice: würde + infinitive (schlafen gehen)."],
    ["Wenn er besser lernen würde, ___ er die Prüfung bestehen.", "If he studied better, he could pass the exam.", "könnte", "kann|konnte|können", "Konjunktiv II of können: er könnte."],
    ["Ich ___ gern länger bleiben, aber ich muss arbeiten. (werden)", "I would like to stay longer, but I have to work.", "würde", "wurde|werde|wäre", "würde + gern + infinitive: a wish that cannot happen."],
    ["Wenn wir Urlaub hätten, ___ wir ans Meer fahren.", "If we had a holiday, we would go to the sea.", "würden", "wurden|werden|würde", "wir takes würden."],
    ["Which sentence is correct?", "If I had more money, I would buy a house.", "Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.", "Wenn ich mehr Geld habe, würde ich ein Haus kaufen.|Wenn ich mehr Geld hätte, ich würde ein Haus kaufen.|Wenn ich mehr Geld würde haben, würde ich ein Haus kaufen.", "Wenn + hätte (end of clause), then würde in position 2 straight after the comma."],
    ["Ich ___ gern am Meer. (sein)", "I would like to be at the sea.", "wäre", "bin|war|wurde", "A wish with sein: ich wäre gern."],
    ["Is this real or hypothetical? 'Wenn ich Zeit habe, besuche ich dich.'", "If I have time, I visit you.", "Real situation (Indikativ)", "Hypothetical situation (Konjunktiv II)|Polite request", "habe is the normal present, so the situation can really happen."],
    ["Wenn ich in Berlin wäre, ___ ich meine Freundin besuchen.", "If I were in Berlin, I would visit my girlfriend.", "würde", "werde|wurde|wäre", "Main clause: würde + infinitive."],
  ]);

T("passiv", G_VERBS, "Passiv: das Brot wird gebacken", "passive voice",
  `<p>Passiv = <b>werden + Partizip II</b>. The object of the active sentence becomes the subject. <i>Der Bäcker backt das Brot.</i> (The baker bakes the bread.) becomes <i>Das Brot wird gebacken.</i> (The bread is baked.)</p>
   <p>Plural: <i>werden</i>. The doer, if named, is <b>von + Dativ</b>: <i>vom Mechaniker</i> (by the mechanic).</p>`,
  `${TBL(["Aktiv (active)", "Passiv (passive)"], [
     ["Der Koch kocht die Suppe. (The cook cooks the soup.)", "Die Suppe wird gekocht. (The soup is cooked.)"],
     ["Der Lehrer korrigiert die Prüfung. (The teacher marks the exam.)", "Die Prüfung wird korrigiert. (The exam is marked.)"],
     ["Die Firma produziert das Auto. (The company makes the car.)", "Das Auto wird produziert. (The car is made.)"],
     ["Der Mechaniker repariert das Fahrrad. (The mechanic repairs the bike.)", "Das Fahrrad wird repariert. (The bike is repaired.)"]])}
   <p>Partizip II you need: backen: <i>gebacken</i> (not gebackt), schreiben: <i>geschrieben</i>, öffnen: <i>geöffnet</i>, untersuchen: <i>untersucht</i>, nehmen: <i>genommen</i>.</p>
   <p>Singular subject: <i>wird</i>. Plural subject: <i>werden</i>. <i>Die Hausaufgaben werden korrigiert.</i> (The homework is marked.) With the doer: <i>Das Auto wird vom Mechaniker repariert.</i></p>`,
  [
    ["Das Brot ___ gebacken.", "The bread is baked.", "wird", "werden|wirst|hat", "Singular subject (das Brot): wird."],
    ["Die Möbel ___ produziert.", "The furniture is made.", "werden", "wird|wirst|hat", "Plural subject: werden."],
    ["Der Brief wird ___. (schreiben)", "The letter is written.", "geschrieben", "geschreiben|schreiben|geschriebt", "werden + Partizip II. schreiben is irregular: geschrieben."],
    ["Das Brot wird ___. (backen)", "The bread is baked.", "gebacken", "gebackt|gebacket|backen", "backen is irregular: gebacken, not gebackt."],
    ["Die Tür wird ___. (öffnen)", "The door is opened.", "geöffnet", "geöffnen|geöffneten|öffnet", "Regular. The stem öffn ends in a consonant cluster, so an extra e: ge + öffn + et."],
    ["Das Auto wird ___ Mechaniker repariert.", "The car is repaired by the mechanic.", "vom", "von|bei dem|zum", "The doer is von + Dativ: von dem becomes vom."],
    ["Die Hausaufgaben ___ korrigiert.", "The homework is marked.", "werden", "wird|werde|wurde", "Hausaufgaben is plural: werden."],
    ["Der Koch kocht die Suppe. Which is the Passiv?", "The soup is cooked.", "Die Suppe wird gekocht.", "Die Suppe wird kochen.|Die Suppe hat gekocht.|Der Koch wird gekocht.", "The object (die Suppe) becomes the subject: werden + Partizip II."],
    ["Der Lehrer korrigiert die Prüfung. Which is the Passiv?", "The exam is marked.", "Die Prüfung wird korrigiert.", "Die Prüfung wird korrigieren.|Die Prüfung werden korrigiert.|Der Lehrer wird korrigiert.", "wird + Partizip II. Singular subject, so wird."],
    ["Der Mechaniker repariert das Fahrrad. Which is the Passiv?", "The bike is repaired.", "Das Fahrrad wird repariert.", "Das Fahrrad wird reparieren.|Das Fahrrad werden repariert.|Das Fahrrad hat repariert.", "wird + repariert (reparieren has no ge-)."],
    ["Die Polizei kontrolliert die Dokumente. Which is the Passiv?", "The documents are checked.", "Die Dokumente werden kontrolliert.", "Die Dokumente wird kontrolliert.|Die Dokumente werden kontrollieren.|Die Dokumente sind kontrollieren.", "Plural subject: werden + Partizip II."],
    ["Der Patient wird ___. (untersuchen)", "The patient is examined.", "untersucht", "geuntersucht|untersuchen|untersuchet", "untersuchen is inseparable: no ge-. Regular: untersucht."],
  ]);
