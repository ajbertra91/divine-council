export type Quote = {
  hebrew?: string
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

export type Section = {
  id: string
  seat: number
  kicker: string
  title: string
  paragraphs: string[]
  quotes?: Quote[]
  list?: ListItem[]
  manuscripts?: ManuscriptWitness[]
}

export const sections: Section[] = [
  {
    id: 'genesis-3',
    seat: 1,
    kicker: 'Genesis 3:22',
    title: 'Like One of Us',
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
    kicker: 'Genesis 6:1–4',
    title: 'Sons of God, Daughters of Men',
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
    kicker: 'Deuteronomy 32:8–9',
    title: 'The Vanishing Verse',
    paragraphs: [
      'The Song of Moses describes Elyon, the Most High, dividing the nations of the earth. Among whom? Three witnesses give three different answers — and the difference is not a copying slip.',
      'The Masoretic Text reads "sons of Israel." But the Septuagint reads "sons of God," and the Dead Sea Scrolls fragment 4QDeut confirms it independently: בני אלוהים, bene elohim. Textual critics are near-unanimous that the Qumran reading is the older one.',
      'Restored, the verse describes Elyon apportioning the seventy nations among seventy sons of God — matching the seventy sons Ugaritic myth gives to El, and the seventy nations of the Table of Nations in Genesis 10. Yahweh’s own portion, singled out in verse 9, is Jacob alone. Someone, later, found that picture uncomfortable enough to overwrite it.',
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
    kicker: '1 Enoch 6–16 · Book of Watchers',
    title: 'The Oath on Hermon',
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
        citation: '1 Enoch 15:8–9, Nickelsburg trans.',
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
    paragraphs: [
      'Mesopotamia remembered seven antediluvian sages — apkallu — who brought the arts of civilization up from the sea. The first, Oannes, gave humanity letters, law, agriculture, "everything connected with the civilized life."',
      'Scholar Amar Annus argues the Watchers are this same figure, inverted. The apkallu are divine, and mate with humans, exactly as the Watchers do. Their taught arts — omen-reading, exorcism, the secret sciences "from the mouth of Ea" — are the same catalogue 1 Enoch lists, except that in Babylon the gift is civilization, and in Enoch it is catastrophe.',
      'Even the sages’ fall is already present in the source tradition: the anti-witchcraft series Maqlu calls them "the Sages of the Apsu," warlocks; the Erra Epic has them banished beneath the sea at the time of the flood. The Jewish scribes did not invent the demonization — they radicalized it.',
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
    text: 'Deuteronomy 32:8–9 and Psalm 82 read, by much mainstream scholarship, as surviving evidence of an earlier stage in which Yahweh was one elohim among a populated council — a picture later scribal tradition worked to obscure, but never fully erased.',
  },
]
