export type Quote = {
  hebrew?: string
  greek?: string
  translation: string
  citation: string
}

export type ListItem = {
  label: string
  text: string
}

export type ManuscriptWitness = {
  source: string
  reading: string
  note: string
}

export type SectionImage = {
  src: string
  alt: string
  position?: string
}

export type Section = {
  id: string
  seat: number
  kicker: string
  title: string
  paragraphs: string[]
  quotes?: Quote[]
  list?: ListItem[]
  manuscripts?: ManuscriptWitness[]
  image?: SectionImage
}

export const sections: Section[] = [
  {
    id: 'genesis-3',
    seat: 1,
    kicker: 'Genesis 3:22',
    title: 'Like One of Us',
    image: {
      src: '/angel-close-up.png',
      alt: 'Close-up of a weathered divine face, half in shadow, echoing the plural voice of Genesis 3:22.',
      position: '50% 25%',
    },
    paragraphs: [
      'After the man and woman eat from the tree of knowledge, Yahweh speaks — and the verb takes a plural address, the same construction as "let us make man" in Genesis 1:26.',
      'Rashi already wrestled with the plural, reading it toward strict monotheism. Modern divine-council scholarship reads it as Yahweh addressing the members of his own court — the same class of beings named in Job 1:6 and Psalm 82.',
    ],
    quotes: [
      {
        hebrew:
          'וַיֹּ֣אמֶר יְהֹוָ֗ה אֱלֹהִ֗ים הֵ֤ן הָֽאָדָם֙ הָיָה֙ כְּאַחַ֣ד מִמֶּ֔נּוּ לָדַ֖עַת ט֣וֹב וָרָ֑ע',
        translation:
          'Now that humankind has become like one of us, knowing good and bad — what if he should stretch out his hand and take also from the tree of life, and eat, and live forever.',
        citation: 'Genesis 3:22, JPS Tanakh',
      },
    ],
  },
  {
    id: 'genesis-6',
    seat: 2,
    kicker: 'Genesis 6:1-4',
    title: 'Sons of God, Daughters of Men',
    image: {
      src: '/genesis-6.png',
      alt: 'Dark, ancient rendering of divine beings descending toward the daughters of men, evoking the bene ha’elohim of Genesis 6.',
      position: '50% 20%',
    },
    paragraphs: [
      'The flood narrative opens with four elliptical verses: divine beings — bene ha’elohim — take human wives. The offspring are the Nephilim, the gibborim, "men of renown."',
      'Bene ha’elohim is not loose poetry. It is the fixed term for members of the divine council elsewhere in the Hebrew Bible — Job 1:6, 2:1, 38:7; Psalm 29:1, 89:6-7 — and it mirrors Ugaritic bn ’il, "sons of El."',
      'The account is famously compressed. Scholar Amar Annus argues the author already knew a fuller Watcher-mythology and told it in shorthand — the same story 1 Enoch later tells at length.',
    ],
    quotes: [
      {
        hebrew:
          'וַיִּרְא֤וּ בְנֵי־הָֽאֱלֹהִים֙ אֶת־בְּנ֣וֹת הָֽאָדָ֔ם כִּ֥י טֹבֹ֖ת הֵ֑נָּה וַיִּקְח֤וּ לָהֶם֙ נָשִׁ֔ים מִכֹּ֖ל אֲשֶׁ֥ר בָּחָֽרוּ',
        translation:
          'The divine beings saw how pleasing the human women were, and they took wives from among those who delighted them.',
        citation: 'Genesis 6:2, JPS Tanakh',
      },
      {
        translation:
          'The Nephilim appeared on earth in those days, and later too, when divine beings cohabited with the human women, who bore them offspring. Such were the heroes of old, the men of renown.',
        citation: 'Genesis 6:4, JPS Tanakh',
      },
    ],
  },
  {
    id: 'deuteronomy-32',
    seat: 3,
    kicker: 'Deuteronomy 32:8-9',
    title: 'The Vanishing Verse',
    image: {
      src: '/divorcing-the-nations-babel.png',
      alt: 'Somber depiction of the nations scattered from Babel, dividing the earth among the seventy sons of God named in Deuteronomy 32.',
      position: '50% 42%',
    },
    paragraphs: [
      'The Song of Moses describes Elyon, the Most High, dividing the nations of the earth. Among whom? Three witnesses give three different answers — and the difference is not a copying slip.',
      'The Masoretic Text reads "sons of Israel." But the Septuagint reads "sons of God," and the Dead Sea Scrolls fragment 4QDeut confirms it independently: בני אלוהים, bene elohim. Textual critics are near-unanimous that the Qumran reading is the older one.',
      'Restored, the verse describes Elyon apportioning the seventy nations among seventy sons of God — matching the seventy sons the Ugaritic myth gives to El, and the seventy nations of the Table of Nations in Genesis 10. Yahweh’s own portion, singled out in verse 9, is Jacob alone. Someone, later, found that picture uncomfortable enough to overwrite it.',
    ],
    manuscripts: [
      {
        source: 'Masoretic Text',
        reading: 'לְמִסְפַּ֖ר בְּנֵ֥י יִשְׂרָאֵֽל',
        note: '"…according to the number of the sons of Israel." Yields an anachronism: Israel did not yet exist when the nations were divided at Babel.',
      },
      {
        source: 'Septuagint',
        reading: 'κατὰ ἀριθμὸν ἀγγέλων θεοῦ',
        note: '"…according to the number of the angels of God" — a Greek translator’s echo of an underlying "sons of God."',
      },
      {
        source: 'Dead Sea Scrolls, 4QDeut',
        reading: 'בני אלוהים',
        note: '"Sons of God" — the reading textual critics judge older than the Masoretic Text, independently confirming the Septuagint.',
      },
    ],
  },
  {
    id: 'psalm-82',
    seat: 4,
    kicker: 'Psalm 82',
    title: 'He Judges Among the Gods',
    image: {
      src: '/judgement-of-council.png',
      alt: 'God sitting in judgment among the divine council, echoing the language of Psalm 82.',
      position: '50% 5%',
    },
    paragraphs: [
      'No text states the council more plainly. Elohim stands in the assembly of El; among the elohim, he pronounces judgment. Grammar alone forces the plural reading — you cannot be "in the midst of" one.',
      'The charge: the council has ruled the nations unjustly. The sentence: they will die like mortals, stripped of the immortality their rank once conferred — the same fall language used of the shining one cast down in Isaiah 14.',
      'This is Deuteronomy 32 completed. The elohim being judged are the same sons of God among whom Elyon divided the nations. Psalm 82 is their trial.',
    ],
    quotes: [
      {
        hebrew:
          'אֱֽלֹהִ֗ים נִצָּ֥ב בַּעֲדַת־אֵ֑ל בְּקֶ֖רֶב אֱלֹהִ֣ים יִשְׁפֹּֽט',
        translation:
          'God stands in the divine assembly, pronouncing judgment among the divine beings.',
        citation: 'Psalm 82:1, JPS Tanakh',
      },
      {
        hebrew: 'אֲֽנִי־אָ֭מַרְתִּי אֱלֹהִ֣ים אַתֶּ֑ם וּבְנֵ֖י עֶלְי֣וֹן כֻּלְּכֶֽם',
        translation:
          'I had taken you for divine beings, attendants of the Most High, all of you.',
        citation: 'Psalm 82:6, JPS Tanakh',
      },
      {
        hebrew: 'אָ֭כֵן כְּאָדָ֣ם תְּמוּת֑וּן וּכְאַחַ֖ד הַשָּׂרִ֣ים תִּפֹּֽלוּ',
        translation: 'But you shall die like Adam, and fall like one of the princes.',
        citation: 'Psalm 82:7, JPS Tanakh',
      },
    ],
  },
  {
    id: 'watchers',
    seat: 5,
    kicker: '1 Enoch 6-16 · Book of Watchers',
    title: 'The Oath on Hermon',
    image: {
      src: '/descending-on-mount-hermon.png',
      alt: 'Close, severe portrait of a Watcher’s face, bound by the oath sworn on Mount Hermon before the descent.',
      position: '50% 37%',
    },
    paragraphs: [
      'Two hundred Watchers descend to Mount Hermon. Their leader, Semjaza, fears carrying the guilt alone, so he binds the rest to him with an oath before they act.',
      'They take human wives and teach forbidden arts: sorcery, root-cutting, the omens of star and sun and moon. Azazel teaches metallurgy, weapons, and the ornaments of women. "All the earth was made desolate by the deeds of the teaching of Asael."',
      'Their children are giants, and the giants devour the earth’s resources, then each other. The earth itself cries out. Four archangels carry the complaint upward, and four sentences come down.',
    ],
    quotes: [
      {
        translation:
          'Semjaza, their leader, said: "I fear you will not agree to do this deed, and I alone will bear the penalty of a great sin." They all answered: "Let us swear an oath, and bind ourselves by mutual imprecations not to abandon this plan."',
        citation: '1 Enoch 6, R.H. Charles trans.',
      },
      {
        translation:
          'The spirits that go forth from the bodies of their flesh are evil spirits, for from humans they came into being, and from the holy Watchers was the origin of their creation. Evil spirits they will be called.',
        citation: '1 Enoch 15:8-9, Nickelsburg trans.',
      },
    ],
    list: [
      { label: 'Uriel', text: 'sent to warn Noah, that his seed survive the flood.' },
      { label: 'Raphael', text: 'sent to bind Azazel in the desert of Dudael until judgment.' },
      { label: 'Gabriel', text: 'sent against the giants, to turn them against one another.' },
      { label: 'Michael', text: 'sent to bind Semjaza and his company for seventy generations.' },
    ],
  },
  {
    id: 'book-of-giants',
    seat: 6,
    kicker: 'Book of Giants · Qumran',
    title: 'Gilgamesh Among the Nephilim',
    image: {
      src: '/gilgamesh-wall-carving.png',
      alt: 'Weathered stone relief carving of Gilgamesh, the Mesopotamian hero recast in the Qumran Book of Giants as monstrous offspring of the Watchers.',
      position: '50% 0%',
    },
    paragraphs: [
      'A companion scroll to 1 Enoch, found among the Dead Sea fragments, tells the same catastrophe from inside the giants’ camp. Two of them dream of the coming ruin: a garden drowned and burned but for one surviving tree; a throne descending, ringed by a heavenly host.',
      'And two of the named giants are Gilgamesh and Humbaba — lifted whole out of the Mesopotamian epic and recast as monstrous offspring of the Watchers. Scholar John Reeves calls it "a bold polemical thrust against the revered traditions of a rival culture." A separate Ugaritic fragment even preserves Gilgamesh’s stature as literally gigantic — eleven cubits tall.',
    ],
  },
  {
    id: 'mesopotamia',
    seat: 7,
    kicker: 'Enuma Elish · Atrahasis',
    title: 'The Assembly of the Gods',
    image: {
      src: '/marduk-asks-to-be-king.png',
      alt: 'image of Marduk, the Babylonian storm god, asking the assembly of gods to grant him kingship before he fights Tiamat.',
      position: '50% 17%',
    },
    paragraphs: [
      'Long before Israel had a council, Babylon had a puhru — a convened assembly of gods that decided kingship, creation, and the fate of humanity by deliberation, not decree.',
      'In the Enuma Elish, Tiamat musters an army against the younger gods. Marduk will fight her only on one condition: the assembly must first grant him kingship outright. "Convene an assembly and proclaim for me an exalted destiny." They do, he wins, and they crown him with fifty names.',
      'In the Atrahasis epic, the laboring Igigi gods strike against their forced labor, burning their own tools at Enlil’s gate. The assembly’s answer is to create humankind to bear the drudgery instead — and later, when human noise disturbs the gods’ rest, that same assembly votes to end humanity by flood.',
    ],
    quotes: [
      {
        translation:
          'If I am to defeat Tiamat and save your lives, convene the council, name a special fate.',
        citation: 'Enuma Elish, Tablet II',
      },
      {
        translation:
          'Excessive drudgery has killed us, our forced labor was heavy. Let us face our foreman: he must take this burden off us.',
        citation: 'Atrahasis, Tablet I',
      },
    ],
  },
  {
    id: 'apkallu',
    seat: 8,
    kicker: 'The Apkallu',
    title: 'Sages Before the Flood',
    image: {
      src: '/ugaritic-god-el.png',
      alt: 'Ancient carved image of the god El, patriarch of the Ugaritic pantheon, standing behind the antediluvian sages who brought civilization from the sea.',
      position: '50% 2%',
    },
    paragraphs: [
      'Mesopotamia remembered seven antediluvian sages — apkallu — who brought the arts of civilization up from the sea. The first, Oannes, gave humanity letters, law, agriculture, "everything connected with the civilized life."',
      'Scholar Amar Annus argues the Watchers are this same figure, inverted. The apkallu are divine, and mate with humans, exactly as the Watchers do. Their taught arts — omen-reading, exorcism, the secret sciences "from the mouth of Ea" — are the same catalogue 1 Enoch lists, except that in Babylon the gift is civilization, and in Enoch it is catastrophe.',
      'Even the sages’ fall is already present in the source tradition: the anti-witchcraft series Maqlu calls them "the Sages of the Apsu," warlocks; the Erra Epic has them banished beneath the sea at the time of the flood. The Jewish scribes did not invent the demonization — they radicalized it.',
    ],
  },
  {
    id: 'daniel-7',
    seat: 9,
    kicker: 'Daniel 7:9-14',
    title: 'Thrones Were Set',
    image: {
      src: '/heavenly-throne-room-vision.png',
      alt: "Daniel’s night vision: a row of thrones set in a heavenly hall before the Ancient of Days, with a cloud-borne figure approaching.",
    },
    paragraphs: [
      'Daniel watches the court convene. Not one throne but many — "thrones were set in place" — and the Ancient of Days takes his seat among them, garment white as snow, a throne of flame on wheels of fire. The council of the earlier texts is still sitting.',
      'Then a second figure arrives, borne on the clouds of heaven, and is presented before the Ancient of Days to receive an everlasting dominion. "Rider of the clouds" is elsewhere in the Hebrew Bible a title for Yahweh alone. Daniel gives it to someone else, standing beside him. The text also takes care to distinguish this figure from Michael, named a few chapters later as merely "one of the chief princes" — a member of the council, not its co-ruler.',
      'Centuries later, before Caiaphas, Jesus quotes this vision of himself. He does not claim a seat among the thrones. He claims to be the one who comes to them.',
    ],
    quotes: [
      {
        hebrew: 'חָזֵ֣ה הֲוֵ֗ית עַ֣ד דִּ֤י כׇרְסָוָן֙ רְמִ֔יו וְעַתִּ֥יק יוֹמִ֖ין יְתִ֑ב',
        translation:
          'I looked on, as thrones were set in place and the Ancient of Days took his seat. His garment was like white snow, and the hair of his head was like lamb\'s wool. His throne was tongues of flame; its wheels were blazing fire.',
        citation: 'Daniel 7:9',
      },
      {
        hebrew:
          'חָזֵ֤ה הֲוֵית֙ בְּחֶזְוֵ֣י לֵֽילְיָ֔א וַאֲרוּ֙ עִם־עֲנָנֵ֣י שְׁמַיָּ֔א כְּבַ֥ר אֱנָ֖שׁ אָתֵ֣ה הֲוָ֑א וְעַד־עַתִּ֤יק יֽוֹמַיָּא֙ מְטָ֔ה',
        translation:
          'I looked on, in the night vision, and behold, with the clouds of heaven one like a son of man came, and he reached the Ancient of Days and was presented before him.',
        citation: 'Daniel 7:13',
      },
    ],
  },
  {
    id: 'angel-of-yhwh',
    seat: 10,
    kicker: 'Exodus 23:20-23',
    title: 'My Name Is in Him',
    image: {
      src: '/guided-through-the-desert-canyon.png',
      alt: "A radiant angel guiding a traveler through a desert canyon, the divine Name burning within him.",
    },
    paragraphs: [
      'Yahweh sends an angel ahead of Israel on the road out of Egypt, with a warning attached to no other messenger in the Hebrew Bible: obey him, do not defy him, for "my name is in him." A being who carries the Name is owed the obedience owed to the Name\'s owner — and is credited, strangely, with the power to withhold pardon, which is another way of saying the power to grant it.',
      'The rabbis remembered how dangerous that verse was. The Babylonian Talmud preserves a debate in which a heretic reads Exodus 23:21 together with the divine name-bearing angel Metatron and concludes a second power stands in heaven alongside God. The sages answer by pointing back to the same verse — "be not rebellious against him" — but the argument itself survived long enough to need answering.',
      'Alan Segal traces this same reading straight into first-century Christian exegesis: Exodus 23:20 applied to the messenger who prepares the way, and the specific charge brought against Jesus — that he presumed to forgive sins — read as exactly the presumption this angel was already rumored to hold.',
    ],
    quotes: [
      {
        hebrew:
          'הִשָּׁ֧מֶר מִפָּנָ֛יו וּשְׁמַ֥ע בְּקֹל֖וֹ אַל־תַּמֵּ֣ר בּ֑וֹ כִּ֣י לֹ֤א יִשָּׂא֙ לְפִשְׁעֲכֶ֔ם כִּ֥י שְׁמִ֖י בְּקִרְבּֽוֹ',
        translation:
          'Pay heed to him and obey him. Do not defy him, for he will not pardon your offenses, since my name is in him.',
        citation: 'Exodus 23:21',
      },
      {
        translation:
          'It was Metatron, whose name is similar to that of his Master, for it is written, "My name is in him." "But if so, we should worship him!" "The same passage," replied R. Idi, "says: be not rebellious against him."',
        citation: 'b. Sanhedrin 38b',
      },
    ],
  },
  {
    id: 'john-10',
    seat: 11,
    kicker: 'John 10:34-36',
    title: 'I Said, You Are Gods',
    image: {
      src: '/temple-confrontation-the-teacher-and-elders.png',
      alt: "Jesus teaching in the temple, confronted by elders in a hostile argument over the words \"I said, you are gods.\"",
    },
    paragraphs: [
      'Charged with blasphemy at the temple, Jesus answers by quoting the council text itself: "I said, you are gods." He is citing Psalm 82:6, the verse that names the elohim later judged for their corrupt rule of the nations.',
      'Two readings divide the commentators. The mainstream reading treats Psalm 82\'s "gods" as human judges, and hears Jesus arguing from the lesser case to the greater: if mere officeholders could bear that title on God\'s own authority, how much more the one the Father himself consecrated and sent. Heiser reads the same council behind Psalm 82 he reads everywhere else — no text anywhere else seats human judges "in the clouds" — and hears Jesus claiming not comparison but membership, and open superiority, over the very beings that psalm puts on trial.',
      'Either way, the point of the citation is the same. Jesus is not lowering his claim to fit a psalm about ordinary men. He is raising it, on the psalm\'s own terms.',
    ],
    quotes: [
      {
        greek: 'Οὐκ ἔστιν γεγραμμένον ἐν τῷ νόμῳ ὑμῶν ὅτι Ἐγὼ εἶπα Θεοί ἐστε;',
        translation: 'Is it not written in your Law, "I said, you are gods"?',
        citation: 'John 10:34',
      },
      {
        greek:
          'ὃν ὁ Πατὴρ ἡγίασεν καὶ ἀπέστειλεν εἰς τὸν κόσμον ὑμεῖς λέγετε ὅτι Βλασφημεῖς, ὅτι εἶπον Υἱὸς τοῦ Θεοῦ εἰμι;',
        translation:
          'Do you say of him whom the Father consecrated and sent into the world, "You are blaspheming," because I said, "I am the Son of God"?',
        citation: 'John 10:36',
      },
    ],
  },
  {
    id: 'colossians',
    seat: 12,
    kicker: 'Colossians 1:15-20 · 2:15',
    title: 'Every Throne Made by Him',
    image: {
      src: '/triumph-in-the-celestial-throne-hall.png',
      alt: "A triumph in the celestial throne hall: thrones and dominions converging on the one who made them and disarmed the rulers.",
    },
    paragraphs: [
      'Paul names the council\'s own ranks — thrones, dominions, rulers, powers — the same bureaucratic vocabulary Daniel and Deuteronomy use for the bene elohim, and states plainly that Christ made every one of them. Nothing in the hierarchy predates him. Nothing in it stands outside his authority.',
      'Then Paul narrates their fall. The rulers and authorities are stripped, put on public display, led in a triumph — Rome\'s own image of a defeated army marched through the streets, applied to the council\'s corrupt tier. This is Psalm 82\'s sentence carried out: the elohim judged for misruling the nations are now openly humiliated by the one who made them.',
      'Creation and defeat sit in the same two chapters because they are the same claim. The powers were never a rival order. They were always subordinate — and now, unmistakably, disarmed.',
    ],
    quotes: [
      {
        greek:
          'ὅτι ἐν αὐτῷ ἐκτίσθη τὰ πάντα ἐν τοῖς οὐρανοῖς καὶ ἐπὶ τῆς γῆς, τὰ ὁρατὰ καὶ τὰ ἀόρατα, εἴτε θρόνοι εἴτε κυριότητες εἴτε ἀρχαὶ εἴτε ἐξουσίαι· τὰ πάντα δι\' αὐτοῦ καὶ εἰς αὐτὸν ἔκτισται',
        translation:
          'For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or powers — all things were created through him and for him.',
        citation: 'Colossians 1:16',
      },
      {
        greek: 'ἀπεκδυσάμενος τὰς ἀρχὰς καὶ τὰς ἐξουσίας ἐδειγμάτισεν ἐν παρρησίᾳ, θριαμβεύσας αὐτοὺς ἐν αὐτῷ',
        translation:
          'He disarmed the rulers and authorities and put them to open shame, triumphing over them.',
        citation: 'Colossians 2:15',
      },
    ],
  },
  {
    id: 'spirits-in-prison',
    seat: 13,
    kicker: '1 Peter 3:18-20',
    title: 'Proclamation to the Prison',
    image: {
      src: '/radiant-figure-in-the-chained-abyss.png',
      alt: "A radiant figure descending into the abyss to proclaim victory to chained spirits in the dark.",
    },
    paragraphs: [
      'Peter says the risen Christ, "made alive in the spirit," went and made proclamation to "spirits in prison" — not souls, the word used elsewhere for the human dead, but spirits, and specifically spirits who "did not obey" in the days before the flood.',
      'That is a precise description of one place. Four seats ago, this same story named it: Michael binding Semjaza and his company, Raphael binding Azazel under rocks in the desert of Dudael, both sentences reading "until the day of great judgment." Peter is not inventing new prisoners. He is telling us the risen Christ went down and stood in front of the ones already there.',
      'The proclamation is not an offer. It is a verdict delivered in person, to beings who have been waiting under those rocks since Genesis 6 for someone with the authority to reopen the case.',
    ],
    quotes: [
      {
        greek: 'ἐν ᾧ καὶ τοῖς ἐν φυλακῇ πνεύμασιν πορευθεὶς ἐκήρυξεν',
        translation: 'In which he went and proclaimed to the spirits in prison.',
        citation: '1 Peter 3:19',
      },
    ],
  },
  {
    id: 'pentecost',
    seat: 14,
    kicker: 'Acts 2',
    title: 'The Reversal of Babel',
    image: {
      src: '/pentecost-in-the-ancient-temple.png',
      alt: "Tongues of fire falling on a diverse crowd in an ancient temple at Pentecost, reversing the scattering of Babel.",
    },
    paragraphs: [
      'Three seats back, this story turned on a single restored word: Elyon divided the nations of the earth among the sons of God, and kept Jacob as his own portion. Everyone outside Israel answered, from then on, to an elohim other than Yahweh. That division is what Pentecost undoes.',
      'The list of nations gathered in Jerusalem echoes the Table of Nations from Genesis 10 — the same nations Babel scattered. At Babel, God descended and divided their language to break their unity. At Pentecost, the Spirit descends and divides tongues to build it: every nation hears its own language and understands. Gregory of Nazianzus put the inversion plainly, four centuries later: what was once scattered into confusion now "flows from one spirit, is poured out to many, and unites us together once more."',
      'No angel stands between the nations and Yahweh anymore. The Spirit speaks to them directly, in their own tongues, on the same ground where they were once divided and handed away.',
    ],
    quotes: [
      {
        translation:
          'Babel\'s disinheritance was going to be rectified by the message of Jesus and his Spirit.',
        citation: 'Michael Heiser, The Unseen Realm, p. 299',
      },
      {
        translation:
          'God, having ruined their shared knowledge by dividing their language, thus foiled their attempt; but the present miracle flows from one spirit, is poured out to many, and unites us together once more.',
        citation: 'Gregory of Nazianzus, Oration 41.16, "On Pentecost"',
      },
    ],
  },
  {
    id: 'spirit-and-trinity',
    seat: 15,
    kicker: 'Genesis 1:2 · Nicaea 325 · Constantinople 381',
    title: 'The Spirit Who Spoke Through the Prophets',
    image: {
      src: '/the-holy-spirit-through-scripture.png',
      alt: "The Holy Spirit moving as a luminous presence through Scripture and the prophets.",
    },
    paragraphs: [
      'The ruach elohim is present from the second verse of the whole story, hovering over the water before anything else exists. It is not a background detail. This same spirit grieves at Israel\'s rebellion in Isaiah, and it is the one power that can put breath back into dry bones in Ezekiel\'s valley — an agent, not a weather pattern.',
      'The Gospels give the same spirit a hand in Christ\'s own conception and ministry, and Acts gives it the Pentecost ingathering just told. But its own status inside the divine identity took the church three and a half centuries to settle. Nicaea, in 325, spoke of the Father and the Son at length and gave the Spirit one clause: "and in the Holy Spirit." Nothing more.',
      'Constantinople, in 381, finished the sentence. The Spirit is named Lord, giver of life, worshipped and glorified together with the Father and the Son, the one who spoke through the prophets. What Genesis 1:2 introduced without explanation, the creed finally named: not an instrument of God, but God.',
    ],
    quotes: [
      {
        hebrew: 'וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֙הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְה֑וֹם וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם',
        translation:
          'The earth being unformed and void, with darkness over the surface of the deep, and the spirit of God hovering over the water.',
        citation: 'Genesis 1:2',
      },
      {
        greek:
          'Καὶ εἰς τὸ Πνεῦμα τὸ Ἅγιον, τὸ κύριον, τὸ ζωοποιόν, τὸ ἐκ τοῦ Πατρὸς ἐκπορευόμενον, τὸ σὺν Πατρὶ καὶ Υἱῷ συμπροσκυνούμενον καὶ συνδοξαζόμενον, τὸ λαλῆσαν διὰ τῶν προφητῶν',
        translation:
          'And in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father, who with the Father and the Son together is worshipped and glorified, who spoke through the prophets.',
        citation: 'Niceno-Constantinopolitan Creed, 381',
      },
    ],
  },
  {
    id: 'philippians-2',
    seat: 16,
    kicker: 'Philippians 2:6-11',
    title: 'Every Knee, Every Realm',
    image: {
      src: '/throne-above-heaven-and-earth.png',
      alt: "A throne above heaven and earth, with the heavenly host, humankind, and the chained powers below all bowing.",
    },
    paragraphs: [
      'The oldest hymn folded into the New Testament tells the story backward from where it started. Existing in the form of God, he did not treat equality with God as something to seize. He emptied himself, took the form of a servant, was born in human likeness, and carried that humility all the way to death on a cross.',
      'Then the hymn turns, and the whole architecture of this story turns with it. God exalts him, and gives him the name above every name, so that every knee bends — of those in heaven, and on earth, and under the earth. Three tiers, one bow. Not a figure of speech: the majority of scholars reading this text for a century have taken it as the same stacked cosmology traced through every seat before this one — a heavenly tier of loyal and rebellious elohim, an earthly tier of the nations, a subterranean tier of the bound and the judged.',
      'Every tier this story has visited answers here. The council enthroned around Daniel\'s Ancient of Days, the angel who once carried the Name, the elohim judged in the assembly and disarmed in Colossae, the Watchers still sealed under their rocks, the nations regathered at Pentecost — heaven, earth, and the ground beneath it, bowing in one gesture to the name that was, from the first council in Eden, always the one this story was circling toward.',
    ],
    quotes: [
      {
        greek: 'ὃς ἐν μορφῇ Θεοῦ ὑπάρχων οὐχ ἁρπαγμὸν ἡγήσατο τὸ εἶναι ἴσα Θεῷ, ἀλλὰ ἑαυτὸν ἐκένωσεν μορφὴν δούλου λαβών',
        translation:
          'Who, though he was in the form of God, did not regard equality with God as something to be grasped, but emptied himself, taking the form of a servant.',
        citation: 'Philippians 2:6-7',
      },
      {
        greek:
          'ἵνα ἐν τῷ ὀνόματι Ἰησοῦ πᾶν γόνυ κάμψῃ ἐπουρανίων καὶ ἐπιγείων καὶ καταχθονίων',
        translation:
          'So that at the name of Jesus every knee should bow, of those in heaven and on earth and under the earth.',
        citation: 'Philippians 2:10',
      },
    ],
  },
]

export const synthesis: ListItem[] = [
  {
    label: 'One governing pattern',
    text: 'Every culture here — Sumerian, Babylonian, Ugaritic, Israelite — organizes heaven as a convened assembly under a chief god who deliberates, judges, and sends messengers through it.',
  },
  {
    label: 'A distinct class of being',
    text: '"Sons of God," bene elohim, bn ’ilm — one term, one class, subordinate to the high god but sharing his non-human nature, in Ugarit, in Israel, and arguably in Babylon’s apkallu.',
  },
  {
    label: 'Transgression among the divine',
    text: 'The sons of God overstepping their place; the Watchers’ oath; Tiamat’s revolt; the Igigi’s strike; Adapa’s hubris; the elohim of Psalm 82 judged for corrupt rule — one pattern, judged the same way each time.',
  },
  {
    label: 'Forbidden knowledge, transmitted',
    text: 'What Babylon calls civilization — the apkallu’s sciences, given lawfully by Ea — 1 Enoch calls catastrophe: the same catalogue of arts, taught by Watchers, condemned as the cause of the flood.',
  },
  {
    label: 'Giants born of the boundary broken',
    text: 'Nephilim, gibborim, the named giants of Qumran’s Book of Giants — hybrid offspring born each time a divine being crosses into the human world, and in the Jewish material, the direct origin of demons.',
  },
  {
    label: 'A textual fossil record',
    text: 'Deuteronomy 32:8-9 and Psalm 82 read, by much mainstream scholarship, as surviving evidence of an earlier stage in which Yahweh was one elohim among a populated council — a picture later scribal tradition worked to obscure, but never fully erased.',
  },
  {
    label: 'Enthroned above the council',
    text: 'The "one like a son of man" received before Daniel\'s plural thrones is claimed by Jesus himself before Caiaphas — not a seat added to the council, but the one through whom every throne, dominion, ruler, and power in it was made.',
  },
  {
    label: 'The powers disarmed',
    text: 'The corrupt elohim of Psalm 82 reappear in Colossians as the rulers and authorities Christ strips and puts to open shame, and in 1 Peter as the very Watchers Michael and Raphael once bound — now confronted directly in their prison.',
  },
  {
    label: 'The nations regathered',
    text: 'The nations Deuteronomy 32 divided among the sons of God at Babel are addressed again at Pentecost, this time by Yahweh\'s own Spirit, in their own tongues, without the mediating elohim to whom they were once allotted.',
  },
  {
    label: 'Plural resolved, not erased',
    text: 'The "let us" and "one of us" of the earliest council texts find their answer not in a return to a populated pantheon but in the Nicene and Constantinopolitan confession of one uncreated God in three persons — Father, Son, and Spirit — distinct in kind from every created elohim of the court.',
  },
]
