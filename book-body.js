// Content appended by build-book.js via eval-style require of helpers.
// This file is not standalone.

module.exports = function buildContent({ p, h1, h2, h3, epigraph, bullet, spacer, table, caption, practiceTitle, Paragraph, TextRun, PageBreak, AlignmentType, BorderStyle, FONT, SANS, ACCENT, GOLD, MUTED, INK }) {
  const front = [];
  const body = [];

  front.push(
    spacer(1400),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: "A GUIDE FOR THE WALKER OF THE PATH", font: SANS, size: 16, color: GOLD, characterSpacing: 140 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 12 } },
      spacing: { after: 160 },
      children: [new TextRun({ text: "PATH TO", font: SANS, size: 56, bold: true, color: ACCENT, characterSpacing: 160 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 360 },
      children: [new TextRun({ text: "ENLIGHTENMENT", font: SANS, size: 44, bold: true, color: ACCENT, characterSpacing: 60 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: "How to follow the way of Gautama Buddha", font: FONT, size: 24, italics: true, color: MUTED })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: "from first refuge to the end of suffering", font: FONT, size: 20, italics: true, color: MUTED })],
    }),
    spacer(700),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Drawn from the Dhamma and from lived practice", font: SANS, size: 18, color: GOLD })],
    }),
  );

  front.push(
    new Paragraph({ children: [new PageBreak()] }),
    spacer(2000),
    p("Path to Enlightenment", { align: AlignmentType.LEFT, after: 60, b: true }),
    p("A guide for anyone who wishes to walk the path the Buddha walked.", { align: AlignmentType.LEFT, after: 200, i: true }),
    p("This book is not a new religion and not a replacement for a living teacher or a silent course. It is a map you can hold in the hand: why the Buddha left home, what he found, and how an ordinary person — with a job, a family, a restless mind — can take the same medicine.", { align: AlignmentType.LEFT, after: 200 }),
    p("The teaching here follows the early path as it is practised in Vipassanā and Satipaṭṭhāna: morality, mastery of the mind, and wisdom born of observing sensation with equanimity. Technical words are explained as they appear. Where Pāli helps, it is given; where a simple English sentence is truer, that is used.", { align: AlignmentType.LEFT, after: 200 }),
    p("May whoever opens these pages find not more opinions, but a way to live.", { align: AlignmentType.LEFT, i: true }),
  );

  body.push(
    h1("How to use this book"),
    p("Read it once as a story: a man saw suffering, found its cause, and left a path that still works. Then use it as a manual. Each chapter ends with something you can do — not later, when life is quieter, but today.", { first: true }),
    p("If you have never sat a course, begin at Part I and do not skip the precepts. If you have already sat, you may move faster to the chapters on sensation and daily life, but return to the Four Truths whenever the technique starts to feel like a sport.", { first: true }),
    p("The Buddha did not ask for belief. He asked for a fair trial: live cleanly, still the mind, observe what is actually happening inside. This book is an invitation to that trial.", { first: true }),
  );

  body.push(
    h1("Contents"),
    p("Part I · Why anyone would walk this path", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("1.  The man who woke up", { after: 50, align: AlignmentType.LEFT }),
    p("2.  Taking refuge without becoming someone else", { after: 50, align: AlignmentType.LEFT }),
    p("3.  The disease, the cause, the cure, the medicine", { after: 200, align: AlignmentType.LEFT }),
    p("Part II · The map he left", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("4.  The Noble Eightfold Path as a way of life", { after: 50, align: AlignmentType.LEFT }),
    p("5.  Sīla, samādhi, paññā — the three trainings", { after: 50, align: AlignmentType.LEFT }),
    p("6.  The Middle Path in ordinary hours", { after: 50, align: AlignmentType.LEFT }),
    p("7.  Impermanence, unsatisfactoriness, and no-self", { after: 200, align: AlignmentType.LEFT }),
    p("Part III · Beginning, if you are beginning", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("8.  Five precepts: the ground under your feet", { after: 50, align: AlignmentType.LEFT }),
    p("9.  How to sit, and how to keep sitting", { after: 50, align: AlignmentType.LEFT }),
    p("10. Ānāpāna — the breath as a teacher", { after: 50, align: AlignmentType.LEFT }),
    p("11. Going to a course, and coming home again", { after: 200, align: AlignmentType.LEFT }),
    p("Part IV · The work that frees", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("12. Satipaṭṭhāna — awareness established", { after: 50, align: AlignmentType.LEFT }),
    p("13. How to practise Vipassanā", { after: 50, align: AlignmentType.LEFT }),
    p("14. Sensation, craving, and the art of not adding a second arrow", { after: 50, align: AlignmentType.LEFT }),
    p("15. Hindrances and friends on the path", { after: 50, align: AlignmentType.LEFT }),
    p("16. The questions that rise on the cushion", { after: 200, align: AlignmentType.LEFT }),
    p("Part V · A life shaped by the Dhamma", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("17. Off the cushion: speech, work, and relationship", { after: 50, align: AlignmentType.LEFT }),
    p("18. Kindness as the other face of wisdom", { after: 50, align: AlignmentType.LEFT }),
    p("19. Serving, giving, and staying for years", { after: 200, align: AlignmentType.LEFT }),
    p("Part VI · Where the path is going", { b: true, after: 80, align: AlignmentType.LEFT }),
    p("20. Dissolution, no-self, and the stages of freedom", { after: 50, align: AlignmentType.LEFT }),
    p("21. Absorption is not the end", { after: 50, align: AlignmentType.LEFT }),
    p("22. Nibbāna, the last moment, and why this matters now", { after: 200, align: AlignmentType.LEFT }),
    p("A letter to the one who is starting", { after: 50, align: AlignmentType.LEFT }),
    p("Appendix · One practitioner’s course record", { after: 50, align: AlignmentType.LEFT }),
    p("Glossary of living words", { after: 50, align: AlignmentType.LEFT }),
  );

  // ===== PART I =====
  body.push(
    h1("Part I"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "WHY ANYONE WOULD WALK THIS PATH", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 80 })],
    }),
    p("Before technique, there is a human problem. The Buddha did not leave a palace because he was curious about sitting still. He left because pleasure could not protect the people he loved, and he refused to pretend that it could."),
  );

  body.push(
    h1("Chapter 1"),
    h2("The man who woke up"),
    ...epigraph(
      "Both formerly and now, it is only suffering that I describe, and the cessation of suffering.",
      "The Buddha"
    ),
    p("Siddhattha Gotama was born a prince in the Sakyan country, in the foothills of the Himalaya, more than twenty-five centuries ago. He had what most people spend a life chasing: youth, health, love, a child, a future already arranged. The stories say that for a long time the hard facts of existence were kept from him. Then he saw them, one after another: an old person, a sick person, a corpse, and a wanderer who had put worldly security down in order to find something that does not rot.", { first: true }),
    p("Those four sights are not ancient folklore. They are the four sights every honest adult still meets. You will grow old, or you already have. You will fall ill. You will lose people. You will die. No salary, no relationship, and no belief system cancels that. The question is not whether this is true. The question is what you will do with the truth.", { first: true }),
    p("Gotama left home. He studied under the great teachers of his time and mastered their absorptions. He nearly destroyed his body with austerity. Neither luxury nor self-torture ended the fever in the heart. On the night of his awakening, sitting under the Bodhi tree at Uruvelā, he turned attention inward with a middle way — a clear, steady looking — and saw how suffering is made, moment by moment, and how it can be unmade.", { first: true }),
    p("He became the Buddha: not a god, not a creator, not a saviour who can walk the path for you. A human being who woke up, and then spent forty-five years showing others how. His first sermon, in the Deer Park at Isipatana, was not a metaphysics. It was a physician’s report: there is suffering; it has a cause; it has an end; there is a path.", { first: true }),
    p("If you wish to follow him, you are not asked to become Indian, to shave your head, or to abandon your family unless that is truly your calling. You are asked to become honest in the same way he became honest: to stop using distraction as a religion, and to look directly at the mind that suffers.", { first: true }),
    practiceTitle("TODAY"),
    p("Sit quietly for three minutes. Do not try to meditate well. Simply name, inwardly and without drama, one form of dukkha that is already in your life: a fear, a loss, a restlessness, a hunger that never finishes. Bow to it as a fact. This is how the path begins — not with a pose, but with truthfulness."),
  );

  body.push(
    h1("Chapter 2"),
    h2("Taking refuge without becoming someone else"),
    p("The traditional doorway is three refuges:", { first: true }),
    bullet("I take refuge in the Buddha — in the possibility of awakening, and in the example of one who did it."),
    bullet("I take refuge in the Dhamma — in the law of nature, the teaching, and the practice that reveals it."),
    bullet("I take refuge in the Sangha — in the community of those who walk, and in the noble ones who have walked far."),
    spacer(120),
    p("Refuge is not conversion. It is a change of where you put your weight. Instead of leaning on praise, on being right, on the next purchase, or on the hope that someone else will finally make you safe, you lean on what is reliable: a living example, a law that does not play favourites, and companionship on the road.", { first: true }),
    p("Dhamma, in this book, means the law of nature. Fire burns. Hydrogen and oxygen become water. Pleasant feeling invites craving. Unpleasant feeling invites aversion. These are not commandments. They are descriptions. To take refuge in the Dhamma is to stop arguing with how things work, and to learn to live in agreement with them.", { first: true }),
    p("You do not need a new name. You need a new loyalty: when craving speaks, you will consult the Buddha’s way before you consult the craving.", { first: true }),
    practiceTitle("TODAY"),
    p("Say the three refuges slowly, in your own language, once in the morning. Then ask: if this were true today, what would I not do? Keep that one restraint for the next twelve hours."),
  );

  body.push(
    h1("Chapter 3"),
    h2("The disease, the cause, the cure, the medicine"),
    p("The Four Noble Truths are the whole of the path, turned like a jewel. Everything else is commentary and training.", { first: true }),
    table(
      ["Truth", "The physician’s word", "Your work"],
      [
        ["There is suffering", "The disease", "Know it fully, in the body"],
        ["It has a cause", "The diagnosis", "Stop feeding the cause"],
        ["It can end", "The prognosis", "Taste even small cessations"],
        ["There is a path", "The medicine", "Walk it every day"],
      ]
    ),
    caption("Four tasks. Not four opinions."),
    p("Suffering, dukkha, is larger than tragedy. It is the leak in every compounded thing: the pleasant that will not stay, the painful that will not leave when we push, the dull stretch of life we sleep through until it turns. Even a good day has a fine crack in it — the knowledge that it is already passing. Desire itself, watched closely, is already a tightness. The notes of practice ask a living question: is desire dukkha? Do not answer from a book. Feel the wanting as sensation.", { first: true }),
    p("The cause is taṇhā, craving, and craving is the mother of aversion. We reach; when the world does not obey, we burn. We push; when the unwanted returns, we burn again. This is not a moral scolding. It is mechanics. Each reaction carves a groove. The groove becomes a personality. The personality becomes a life.", { first: true }),
    p("The end of suffering is not a better arrangement of the same fever. It is the fever going out — Nibbāna, the unconditioned, beyond the field of mind and matter where sense doors operate as they do now. You may not see that shore yet. You can already see small versions: the moment you do not answer anger, and the body cools; the moment a plan dies and you are still whole.", { first: true }),
    p("The path is the Eightfold Path, gathered into three trainings you will meet in the next chapters. For seven years or for seven days, the same medicine is given: sīla, samādhi, paññā.", { first: true }),
    p("The work with feeling has its own deepening. First you know vedanā is there. Then you explore the whole field of it. Then suffering is so thoroughly known that it can be laid down. Pleasant thought and unpleasant thought, pleasant body and unpleasant body — all of it is to be seen, not rearranged.", { first: true }),
    practiceTitle("TODAY"),
    p("The next time something small goes wrong — a delay, a cold look, a message not returned — pause before the story. Find the sensation in the chest, the belly, or the jaw. Name it silently: this is dukkha; this is the cause arising. Do not fix it for thirty seconds. That pause is already the path."),
  );

  // ===== PART II =====
  body.push(
    h1("Part II"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "THE MAP HE LEFT", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 120 })],
    }),
    p("A follower of the Buddha is not a collector of views. A follower is someone whose speech, work, effort, and attention are being slowly reshaped by a map that has already been walked."),
  );

  body.push(
    h1("Chapter 4"),
    h2("The Noble Eightfold Path as a way of life"),
    p("The eight limbs are not eight weekends. They grow together, like the strands of one rope.", { first: true }),
    table(
      ["Limb", "In ordinary language", "Training"],
      [
        ["Right understanding", "Seeing the Four Truths as facts", "Wisdom"],
        ["Right thought", "Intentions of letting go, goodwill, harmlessness", "Wisdom"],
        ["Right speech", "True, kind, useful, timely", "Morality"],
        ["Right action", "Not killing, stealing, or sexual harm", "Morality"],
        ["Right livelihood", "Earning without feeding cruelty", "Morality"],
        ["Right effort", "Guarding the mind; feeding the wholesome", "Concentration"],
        ["Right awareness", "Knowing what is happening now", "Concentration"],
        ["Right concentration", "A mind gathered, not scattered", "Concentration"],
      ]
    ),
    caption("If one strand frays, the rope still holds — but do not fray it on purpose."),
    p("Right understanding is not agreeing with Buddhism. It is seeing, more and more often, that actions have results, that clinging hurts, that this body is not a permanent self. Right thought is the inner weather you choose to cultivate: the wish to release, the wish that others be well, the refusal to enjoy someone’s pain.", { first: true }),
    p("Speech is where most householders fall. Gossip, sarcasm, and the small lie to stay comfortable keep the mind too agitated to see clearly. Action and livelihood are the same principle in the body and in money. If your work requires you to harm, deceive, or intoxicate others, the sitting will fight the rest of the day, and the rest of the day will win.", { first: true }),
    p("Effort, awareness, and concentration are the inner craft. Effort is ātāpī — ardent, a hard worker, not grim, but unwilling to sleep at the switch. Awareness is sati. Concentration is the collectedness that lets wisdom have a still lens.", { first: true }),
    p("Keep nearby a cluster of plain qualities that make the eight limbs breathe: awareness, discipline, dedication, motivation, effort — constantly. Not heroically. Daily.", { first: true }),
    practiceTitle("TODAY"),
    p("Choose one limb that is leaking. Only one. If it is speech, go until bedtime without talking about an absent person. If it is livelihood, write one honest sentence about how your work affects other beings. If it is effort, sit ten minutes you would have scrolled. Repair the rope at the thinnest strand."),
  );

  body.push(
    h1("Chapter 5"),
    h2("Sīla, samādhi, paññā — the three trainings"),
    p("Sīla is the base, and it is the most important. A mind that is lying, taking what is not given, or living in agitation cannot see. People want the mystical fruit and skip the soil. The soil is how you treat the next person.", { first: true }),
    p("The old image is dirt in a cloth. Sīla shakes the top layer. Samādhi rinses what is loose on the surface. Paññā reaches the stains that have set in the weave — the deep saṅkhāras — and can actually remove them. Without the first two, the third is only philosophy.", { first: true }),
    p("Sīla leads to samādhi. Samādhi leads to paññā. Paññā leads to liberation. This is not poetry. A clean life quiets remorse. A quiet mind can stay. A mind that stays can see. A mind that sees stops planting the next crop of suffering.", { first: true }),
    p("Wisdom itself has three grades. Heard wisdom is what a teacher or a book gives you. Intellectual wisdom is what you reason out and accept. Experiential wisdom — bhāvanāmayā paññā — is what you know because you observed it inside. Only the third cuts the root. This book is the first kind. Your sitting is the door to the third.", { first: true }),
    p("Study, practice, and penetration — pariyatti, paṭipatti, paṭivedha — are the same three in another dress. Do not stop at study. Do not practise blindly without understanding. Do not claim penetration you have not earned.", { first: true }),
    p("The ten perfections support a householder’s path: generosity, morality, renunciation, wisdom, energy, patience, truthfulness, resolution, loving-kindness, and equanimity. They are how the path survives a long life, not only a ten-day silence.", { first: true }),
    practiceTitle("TODAY"),
    p("Before you sit, tidy one moral loose end. An apology owed. A small theft of time or credit to return. A harsh message not sent. Then sit. Feel the difference in the body when the base is a little cleaner. That feeling is samādhi beginning to have a chance."),
  );

  body.push(
    h1("Chapter 6"),
    h2("The Middle Path in ordinary hours"),
    p("The Buddha found the way between two deaths of the spirit: drowning in pleasure, and crushing the body and heart in the name of holiness. The Middle Path is not lukewarm religion. It is precision.", { first: true }),
    p("On the cushion the same law becomes a working instruction you can memorize: accept; do not ignore; do not give importance; everything is changing. To ignore a sensation is one extreme. To make a drama of it is the other. To feel it as it is, without pulling the pleasant or pushing the unpleasant, is the middle.", { first: true }),
    p("If you will not let a pleasant sensation go, it will reappear in another costume — pride, addiction, spiritual ambition. If you will not let an unpleasant sensation be, it will harden into character. Equanimity is not coldness. It is the courtesy of letting reality finish its sentence.", { first: true }),
    p("Off the cushion the Middle Path looks like this: eat enough, not as a project. Work hard, do not worship busyness. Love people, do not devour them. Rest, do not hide. Keep the training, do not become a fanatic who cannot speak kindly to a child.", { first: true }),
    practiceTitle("TODAY"),
    p("Notice one place you live at an extreme — too much comfort, or too much self-punishment. Take one step toward the middle. Half the dessert, or a real meal if you have been starving yourself of rest. The path is made of such unglamorous corrections."),
  );

  body.push(
    h1("Chapter 7"),
    h2("Impermanence, unsatisfactoriness, and no-self"),
    p("Three marks are stamped on everything that arises: anicca, dukkha, anattā. Impermanence, unreliability, no lasting owner.", { first: true }),
    p("Impermanence is not a slogan to mutter while the mind wanders. Used that way it becomes a roadblock. Anicca-bodh is feeling change — heat becoming less heat, a pulse appearing and vanishing, a mood that cannot be found two minutes later. Remind yourself with a word if you must, then return to the bare knowing until the technique is mature.", { first: true }),
    p("Dukkha follows from that change. What we try to own is already leaving. The attempt to make a self out of a river is the ache.", { first: true }),
    p("Anattā is the most intimate and the most freeing. There is breathing, feeling, thinking, deciding — and no little emperor inside who owns the process. The body is not finally male or female in that seeing. It is a stream of tiny events, kalāpas, arising and vanishing. You do not have to believe this. You have to look carefully enough that belief becomes unnecessary.", { first: true }),
    p("Always remember, in sitting and in argument: this is the field of mind and matter. Not a small sensation is small; not a big sensation is big. Any sensation, met without reaction, can loosen a knot. When a thought appears, note “here is a thought,” and do not start a second life inside it.", { first: true }),
    practiceTitle("TODAY"),
    p("Choose one ordinary object of clinging — a plan, a face, a possession. Watch it for a minute as something that is already changing. Do not throw it away. Just stop demanding that it be permanent. That is a first taste of wisdom."),
  );

  // ===== PART III =====
  body.push(
    h1("Part III"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "BEGINNING, IF YOU ARE BEGINNING", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 80 })],
    }),
    p("A path that cannot be started on a weekday is not a path. Here is how a person with an ordinary life actually begins."),
  );

  body.push(
    h1("Chapter 8"),
    h2("Five precepts: the ground under your feet"),
    p("The Buddha gave householders a floor that will hold a human life. The five precepts are not a costume of piety. They are how you stop stabbing yourself and others while you try to see clearly.", { first: true }),
    table(
      ["Precept", "What you train"],
      [
        ["Not to kill", "Reverence for life, including the small and inconvenient"],
        ["Not to steal", "Not taking what is not freely given — goods, credit, time"],
        ["Not to harm through sex", "No exploitation; fidelity to the vows you have made"],
        ["Not to lie", "Speech that a quiet mind could still respect"],
        ["Not to intoxicate", "Keeping the instrument of insight clean"],
      ]
    ),
    caption("Break the floor and the house leans. Mend the floor and sitting becomes possible."),
    p("People argue about the fifth precept. Argue less; experiment more. A mind under chemical weather cannot know whether the clouds belong to the Dhamma or to the drink. If you are serious about following the Buddha, give the mind long stretches of its own weather.", { first: true }),
    p("When you fail — and you will — do not add a sixth poison of self-hatred. Confess inwardly, repair what you can, begin again. Remorse that leads to repair is wholesome. Remorse that becomes a story about being doomed is just another agitation.", { first: true }),
    practiceTitle("TODAY"),
    p("Take the five precepts for twenty-four hours as if you meant them. In the evening, write three lines: where you kept them, where you bent them, what you will repair. This is the first training. Everything else stands on it."),
  );

  body.push(
    h1("Chapter 9"),
    h2("How to sit, and how to keep sitting"),
    p("You do not need a special room. You need a time you will not negotiate every morning. Sit at the same hour if you can — before the world’s voice gets loud. Sit upright, comfortable enough to stay, not so comfortable that you sink. Eyes closed or slightly open. Hands at rest.", { first: true }),
    p("Beginners last longer if they start small and keep the appointment. Ten honest minutes daily will change more than a heroic hour on Sunday and nothing on Thursday. Increase slowly. Two sittings, morning and evening, become a spine.", { first: true }),
    p("Do not hunt for a spiritual experience. Hunting is craving in robes. Sit to know the present. Some days the mind is a storm. Those days count. Persistence is one of the five necessary parts of the work, alongside observation, awareness, equanimity, and impermanence.", { first: true }),
    p("Pain will come. Distinguish injury from ordinary resistance. Shift if you must, with awareness. Do not make an enemy of the body and do not make an idol of stillness.", { first: true }),
    p("At night, if you wish to practise while sleep is coming, rest awareness on the breath, or in a palm, or in a foot. Let the object be simple. Do not fight sleep. Do not feed a story.", { first: true }),
    practiceTitle("TODAY"),
    p("Choose a chair or a cushion and a time. Sit ten minutes. When the mind leaves, return without a verdict. Mark a calendar. The path is this mark, repeated until it becomes a person."),
  );

  body.push(
    h1("Chapter 10"),
    h2("Ānāpāna — the breath as a teacher"),
    p("Why the breath? Because it is always here, always changing, and not an idea. Before you open the whole body, you train the wild mind at one small door.", { first: true }),
    p("Watch in a limited area: between the upper lip and the entrance of the nostrils — as small as you can. Know the touch. Know cool and warm. Stay with equanimity and the fact of change. If sleep is coming, take a few longer breaths, then return to natural breathing. Do not turn the breath into a project to perfect.", { first: true }),
    p("This is not yet the full work of insight, but it is already Dhamma. Each time you return from a plan about the future, you are weakening the habit that makes suffering. The notes ask: why is the mind continually making plans? Watch the planner as sensation around the nose and in the chest. See the pull. Do not follow it.", { first: true }),
    p("Can you keep the mind with the breath for a whole sitting? That is a useful test, not a trophy. If you cannot, begin again. The Buddha’s path is made of beginning again without self-violence.", { first: true }),
    practiceTitle("TODAY"),
    p("For one sitting, only the small area at the nose. When you wander, come back as gently as you would lead a child by the hand. Count nothing. Compete with no one. Just know: breathing in, breathing out."),
  );

  body.push(
    h1("Chapter 11"),
    h2("Going to a course, and coming home again"),
    p("A book can point. A ten-day course in noble silence can show you your own mind without the usual exits. If you intend to follow this path in the tradition that trained these pages, sit a standard Vipassanā course with a proper teacher. Learn ānāpāna thoroughly, then Vipassanā, then mettā. Keep the precepts for those ten days as if your life depended on them. In a way, it does.", { first: true }),
    p("The course is not a holiday and not an identity. It is surgery. You will meet boredom, heat, old grief, and unexpected joy. The instruction is always the same: observe, do not react. When you leave, the world will offer you every old toy. This is the real test.", { first: true }),
    p("Why is the same vibration hard to find at home? Because home is designed for your habits. No issue. Remain equanimous with the meditation that is actually happening. Do not cling to the intensity of the centre. Clinging to a past sitting is just another pleasant saṅkhāra.", { first: true }),
    p("In busy conditions you may check sensation anywhere in the body. The object is not a holy spot. The object is reality now. One breath in a doorway, one sweep of the hands on a commute, one moment of not speaking the angry sentence — this is how a course becomes a life.", { first: true }),
    p("Return to longer courses when you can. Serve others on courses when you are ready. Teaching children, cooking, sweeping — these are not lesser Dhamma. They are sīla and mettā with shoes on.", { first: true }),
    practiceTitle("TODAY"),
    p("If you have never sat a course, look up a centre and write the dates that would be possible this year. If you have sat, write the date of your next sitting or your next service. A follower of the Buddha makes a next step visible."),
  );

  // ===== PART IV =====
  body.push(
    h1("Part IV"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "THE WORK THAT FREES", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 140 })],
    }),
    p("Do nothing. Observe sensation with impermanence and equanimity. That sentence is the whole technique. It takes a lifetime to stop doing something else instead."),
  );

  body.push(
    h1("Chapter 12"),
    h2("Satipaṭṭhāna — awareness established"),
    ...epigraph("Ekayāno maggo — this is the only path.", "Satipaṭṭhāna Sutta"),
    p("Sati is awareness. Paṭṭhāna is the establishing. The Buddha called this the only path because no one has ever become free by remaining blind at the root of reaction.", { first: true }),
    p("The conscious mind can vow: I will not crave; I will not hate. The deeper mind is wired through the whole body and, by its nature, is blind. Day and night it reaches for pleasant sensation and pushes unpleasant sensation. This is why New Year promises die in February, and why a quiet hall is not a lecture hall.", { first: true }),
    p("The four foundations are four doors into one house.", { first: true }),
    table(
      ["Foundation", "What you contemplate"],
      [
        ["The body", "Breath, posture, parts, elements"],
        ["Feeling", "Pleasant, unpleasant, neutral — as felt"],
        ["The mind", "Lustful or not, angry or not, scattered or gathered"],
        ["Mental contents", "Hindrances, aggregates, factors, truths"],
      ]
    ),
    caption("Four contemplations. One honesty."),
    p("The body is to be known as it is, not as vanity paints it. In this body there are hair, nails, teeth, skin, flesh, sinews, bone, marrow, organs, blood, sweat, tears, urine — a bag of elements: earth as solidity, water as cohesion, fire as temperature, air as motion. The point is not disgust. The point is to stop taking a process as “I” and “mine.”", { first: true }),
    p("Practise with three qualities without which awareness is only a circus trick: ātāpī — ardent; sampajāno — clearly knowing the rise and fall of feeling; satimā — present. Awareness without knowing rise and fall is useless skill. Together they are sammā-sati, right awareness, the heart of liberation.", { first: true }),
    p("Mere understanding leads to mere awareness. Deep grooves require equanimity joined to that clear knowing. Then old reaction can come up in layers. Harsh saṅkhāras often surface first. They are not to be multiplied. They are to be seen.", { first: true }),
    practiceTitle("TODAY"),
    p("For one hour of ordinary life, know posture as posture: walking when walking, sitting when sitting, reaching when reaching. When you forget, begin again. This is kāyānupassanā in the marketplace."),
  );

  body.push(
    h1("Chapter 13"),
    h2("How to practise Vipassanā"),
    p("Why sensation? Because the blind mind lives in the body. Why Vipassanā? Because seeing things as they are, at the root of reaction, is how the root dies. Why the suttas? Because the Satipaṭṭhāna Sutta is the map of that seeing.", { first: true }),
    p("After the mind can stay with the breath, you move attention through the body, part by part, then in sweeps, feeling whatever is there — heat, pulse, tightness, moisture, emptiness, pain, pleasure, nothing obvious. You do not invent sensation. You do not reject the blank areas. You wait, you feel, you move on.", { first: true }),
    bullet("Work part by part; then sweep the mass of the body."),
    bullet("If you like, one pass down with a breath, one pass up with a breath."),
    bullet("If distracted, return to the breath, then continue."),
    bullet("Do not camp on one part more than a few minutes."),
    bullet("Move more quickly once the way is clear."),
    bullet("When the surface is known, work more piercingly, through the parts."),
    bullet("Do not pull the pleasant. Do not push the unpleasant."),
    bullet("Stay in the present — yathā bhūta, as it actually is."),
    bullet("Be kind to whatever comes. Kindness is not preference."),
    spacer(120),
    p("If dullness covers the scan, look at dullness itself with equanimity. If the mind wanders badly, rest it on the breath, then return. Use the breath at the start of a sitting; remain with equanimity during the sweep.", { first: true }),
    p("When the entire surface can be felt, penetrate through the body. Always with anicca felt, not chanted. In deep sitting the long words fall away. Keep the short ones: not permanent; no reaction; respect; law of nature. Draṣṭā bhāv, sākṣī bhāv — the stance of the witness.", { first: true }),
    p("If thoughts arise, put the mind back with the breath for a moment, then continue the sweep. Do nothing else. Observation is the action.", { first: true }),
    practiceTitle("TODAY"),
    p("If you have been taught Vipassanā, give one sitting entirely to the rules above — especially not staying, not pulling, not pushing. If you have not been taught, stay with the breath and the precepts until a qualified course trains you. This book will not initiate you. It will only tell you why the initiation matters."),
  );

  body.push(
    h1("Chapter 14"),
    h2("Sensation, craving, and the art of not adding a second arrow"),
    p("The Buddha spoke of two arrows. The first is the unavoidable: heat, loss, a harsh word, a dying body. The second is the one we fire ourselves: this should not be; I cannot bear this; I must have the opposite. Vipassanā is training to feel the first arrow completely, and to put the bow down.", { first: true }),
    p("Vedanā in vedanā: feel the feeling directly. No second object. Pleasant, unpleasant, or neither. Gross or subtle, settled or unsettled. Anything that arises in the mind spreads into the body. That meeting place is where craving is born, and where it can die.", { first: true }),
    p("How do you join anicca to equanimity? Check the sensation as it is, and appreciate its law. Not as a motto. As a demonstration the body is already giving.", { first: true }),
    p("Saṅkhāra means the patterns of reaction, the grooves in sensation. Some are like a line in water — gone as they are drawn. Some are like a line in sand. Some are cut in stone. Old fear, old lust, old pride: stone-work. Each equanimous moment is weather on that stone. You will not finish the mountain in a week. You can stop carving new letters today.", { first: true }),
    p("Udaya and vaya — arising and passing — if only understood, become mere awareness. Mere awareness leaves the deep grooves untouched. Those require equanimity and clear knowing of rise and fall. Then dissolution can come, and with it layer after layer of the past. Let them come. Do not make a self out of them. Do not make a self out of being the one who is dissolving.", { first: true }),
    practiceTitle("TODAY"),
    p("When pleasant feeling appears — praise, sugar, a good sitting — notice the lean of the mind toward more. When unpleasant feeling appears, notice the lean toward away. Name the lean. Stay with the sensation until it changes on its own. You have just practised the Third Noble Truth in miniature."),
  );

  body.push(
    h1("Chapter 15"),
    h2("Hindrances and friends on the path"),
    p("Nibbāna is spoken of as something not far, hidden by a curtain. The five hindrances are that curtain. They keep you from seeing at the level of sensation.", { first: true }),
    table(
      ["Hindrance", "How it visits", "How a walker responds"],
      [
        ["Sensual desire", "Planning, hunger, fantasy", "Feel it as sensation; do not obey the story"],
        ["Aversion", "Heat, argument, tightness", "Do not add the second arrow"],
        ["Sloth and torpor", "Heaviness, a blind scan", "Sit upright; look at dullness; use the breath"],
        ["Restlessness and remorse", "The body cannot stay; the past replays", "Return to a small area; repair what remorse can repair"],
        ["Doubt", "The path itself on trial", "Remember a moment the method already worked; continue"],
      ]
    ),
    caption("Enemies at the gate are still teachers if you do not invite them in to live."),
    p("Against them stand friends. Sati: awareness joined to trust in the path. Viriya: courage. Investigation that divides experience into parts instead of a fog. Rapture that may come and must not be clung to. Deep calm. Collectedness. Equanimity. These seven factors of enlightenment arise from practice and then feed practice.", { first: true }),
    p("Wholesome states are to be cultivated; unwholesome states are to be seen and not fed. Craving never finishes — that is its characteristic. Mettā is the lawful answer to aversion. You will meet it as a formal practice after insight sittings, and as a way of walking through a kitchen.", { first: true }),
    practiceTitle("TODAY"),
    p("Name the hindrance that is most often your curtain. For one day, the moment you recognise it, smile as if you had met a familiar weather. Then do the response in the table. Recognition without war is already wisdom."),
  );

  body.push(
    h1("Chapter 16"),
    h2("The questions that rise on the cushion"),
    p("A living path produces living questions. Keep them as questions until the body answers.", { first: true }),
    h3("Is desire itself suffering?"),
    p("Watch the wanting as heat, lean, and story. See whether peace increases when the wanting is believed or when it is merely known. Let that be your scripture.", { first: true }),
    h3("Why does desire arrive in the middle of a good sitting?"),
    p("Because the deep mind is still doing its old job. Attraction is not a failure of the method. It is the method showing you the material. Feel it. Do not date it.", { first: true }),
    h3("How do I meditate as I fall asleep?"),
    p("Breath, palm, or foot. Simple object. No campaign against sleep.", { first: true }),
    h3("Why is home weaker than the centre?"),
    p("Home is your museum of habits. Practise anyway. Equanimity with a modest sitting is better Dhamma than craving for last year’s flow.", { first: true }),
    h3("What if I cannot feel anything?"),
    p("Nothing obvious is also a truth. Stay. The demand to feel fireworks is desire. Subtle awareness is the path the notes keep naming.", { first: true }),
    practiceTitle("TODAY"),
    p("Write one question your practice has actually asked — not a clever question, a sore one. Sit with it for ten minutes as sensation in the body. Do not solve it. Let it be seen. Insight is what remains when the argument gets tired."),
  );

  // ===== PART V =====
  body.push(
    h1("Part V"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "A LIFE SHAPED BY THE DHAMMA", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 100 })],
    }),
    p("If the path exists only on a cushion, it is a hobby. The Buddha walked among villages. So will you."),
  );

  body.push(
    h1("Chapter 17"),
    h2("Off the cushion: speech, work, and relationship"),
    p("Following Gautama Buddha is a citizenship of the heart. You still pay bills. You still disappoint people and are disappointed. The difference is that you have a higher loyalty than your mood.", { first: true }),
    p("Speak as if the person were present, because in the mind they are. Work as if the result of the work will visit you again, because in the law of kamma it will. In conflict, look first for the sensation, then for the needed sentence. A follower who is technically calm and privately cruel has understood nothing.", { first: true }),
    p("Relationship is the fierce teacher. People will press every remaining groove. This is not an obstacle to the holy life for a householder. It is the holy life. Practise not devouring those you love. Practise not abandoning them when they are unbeautiful. Practise apology that does not include a defence.", { first: true }),
    p("Keep away from craving and aversion in this world — the old warning. You will not succeed perfectly. Succeed a little more often. That is a path.", { first: true }),
    practiceTitle("TODAY"),
    p("In the next difficult conversation, feel your feet on the floor before you answer. If you cannot feel the feet, you are not ready to speak. Wait one breath. Then speak only what is true and necessary."),
  );

  body.push(
    h1("Chapter 18"),
    h2("Kindness as the other face of wisdom"),
    p("Insight without kindness becomes a knife. Kindness without insight becomes sentiment. The Buddha taught both. After a sitting of observation, the practice of mettā turns the collected mind toward the welfare of all beings, beginning with yourself — not as a pet, but as a being who also wishes to be free of the second arrow.", { first: true }),
    p("May I be happy. May I be free from enmity. May I be free from the inner storm. May I live with ease. Then the same wish for those you love, those you do not know, those who have hurt you — as far as is honest today. Do not fake a saint. Offer what is real, even if today it is only the wish not to harm.", { first: true }),
    p("Be kind to anything that comes up in meditation. The cruel memory, the ugly desire, the pride. Kindness here means: do not hit a suffering mind with a second stick. See it. Let it change.", { first: true }),
    practiceTitle("TODAY"),
    p("At the end of your sitting, spend two minutes wishing well. If you cannot wish well to an enemy, wish well to a stranger on the street you will pass this afternoon. Then pass them as if the wish were a vow."),
  );

  body.push(
    h1("Chapter 19"),
    h2("Serving, giving, and staying for years"),
    p("Dāna, giving, loosens the hand that grabs. Give money, time, attention, a seat, the last word. Serve on a course if you have sat. Wash dishes. Help a children’s sitting. The Dhamma was kept alive by people who were willing to be unimportant.", { first: true }),
    p("A path measured in weekends will not uproot stone-cut saṅkhāras. Measure in years. The notes say: for seven years, or for seven days, the same three trainings. Some seeds open quickly. Some open after a long winter of ordinary sittings no one applauds.", { first: true }),
    p("When chanting or the presence of a teacher steadies the field, receive it as help, not as magic that replaces your work. Dhamma vibration is a support to sampajāno — to staying with the knowing.", { first: true }),
    p("Do not become a collector of courses or a critic of other walkers. The Buddha’s path is not a club. It is a medicine. Take it. Let others take the medicine that heals them, so long as it leads to less greed, less hatred, less delusion.", { first: true }),
    practiceTitle("TODAY"),
    p("Give something away that costs you a little — time or money or the need to be right. Then sit. Feel whether the body is even slightly more spacious. That space is the beginning of renunciation."),
  );

  // ===== PART VI =====
  body.push(
    h1("Part VI"),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [new TextRun({ text: "WHERE THE PATH IS GOING", font: SANS, size: 22, bold: true, color: GOLD, characterSpacing: 140 })],
    }),
    p("Practice is not aimed at an experience. Experiences come and go. The aim is the end of the need to react — and, finally, the end of the fire."),
  );

  body.push(
    h1("Chapter 20"),
    h2("Dissolution, no-self, and the stages of freedom"),
    p("There may come a time when the solid body is felt as a field of tiny events — bhaṅga, dissolution. Anattā becomes obvious: no I, no mine. If this comes, do not grasp the bliss of it. Dissolution clung to is another line in stone. If it does not come, do not counterfeit it. Work with solidity. The Buddha did not ask you to prefer a movie of emptiness to the truth of this moment.", { first: true }),
    p("The path is traditionally described in stages. Sotāpanna, the stream-enterer, has seen enough that certain deep errors cannot again send one into the lower fields of existence. Sakadāgāmī returns once more, or finishes in this life. Anāgāmī does not return to this sensual world; a refined stage remains until the work is complete. The arahant has finished. These names are a map. Only knowledge is the land. Do not tattoo a rank on a self you are trying to see through.", { first: true }),
    p("Ignorance and saṅkhāra keep the wheel of mind and matter turning. Each new reaction writes another cause. Each moment of equanimity with anicca refuses to write it. That is enough philosophy. The rest is sitting, and living as if the sitting were true.", { first: true }),
    practiceTitle("TODAY"),
    p("Drop every fantasy of becoming an advanced meditator. For one sitting, be a beginner who feels what is here. Stream-entry is not an ambition. It is a result of not lying to yourself for long enough."),
  );

  body.push(
    h1("Chapter 21"),
    h2("Absorption is not the end"),
    p("The mind can become vast, still, rapturous. The Buddha knew these jhānas and did not despise them. He also said that even the high absorptions, used as a home, do not by themselves finish the work. After jhāna, latent tendencies remain — anusaya, the old cliché of the mind, sleeping.", { first: true }),
    p("Calm is a lamp. Insight is what the lamp is for. If you become a collector of peace, peace becomes another sensuality. Use collectedness to see sensation, to see the lean of craving, to see the empty nature of the one who wants.", { first: true }),
    practiceTitle("TODAY"),
    p("If a sitting is pleasant, end it by noticing the wish to stay. If a sitting is dry, end it without a verdict. Both endings train the same freedom."),
  );

  body.push(
    h1("Chapter 22"),
    h2("Nibbāna, the last moment, and why this matters now"),
    p("Nibbāna is beyond mind and matter. It is not a better dream. It is the stopping of the dream’s engine. Sense doors as we know them do not operate there. You cannot photograph it. You can walk toward it every time you do not add a reaction to a sensation.", { first: true }),
    p("The tradition says that at the last moment of life, the quality of the mind — the sensation, the reaction or the non-reaction — conditions what comes next, and that the work can continue. Whether you take that in the oldest sense or as a metaphor for how this very hour shapes the next, the counsel is the same: do not wait for a perfect retreat to become the person you will be when you have no time to pretend.", { first: true }),
    p("When the five senses fall quiet, mind remains. When mind too becomes still in the deepest way, there is what the Buddha called the unconditioned. The observer stays with vedanā until there is nothing left that needs an observer. That is the direction. Subtle, subtle awareness is the path.", { first: true }),
    p("This matters now because the people you love are not permanent, and neither are you. Following Gautama Buddha is the decision to use the remaining time to stop multiplying pain. It is the most practical decision a human being can make.", { first: true }),
    practiceTitle("TODAY"),
    p("At bedtime, review the day without prosecution. Where did you add a second arrow? Where did you put the bow down? Thank the second kind of moment. Resolve one repair for tomorrow. Sleep as a person on a path, not as a person postponing one."),
  );

  body.push(
    h1("A letter to the one who is starting"),
    ...epigraph("Appamādena sampādetha — strive on with diligence.", "The Buddha’s last words"),
    p("Friend,", { after: 160 }),
    p("You do not need to be ready. Readiness is often another delay. You need a precept you will keep today, a seat you will return to tomorrow, and a willingness to see what you would rather improve or escape.", { first: true }),
    p("The Buddha walked this path with a human body and a human mind. He did not hoard the way. He left it in the open: know suffering, drop its cause, taste its end, develop the eight limbs. Sit. Live cleanly. Love without devouring. Serve. Begin again.", { first: true }),
    p("Accept. Do not ignore. Do not give importance. Everything is changing.", { first: true }),
    p("The path is awareness — subtle, then more subtle. Walking is enough. You may walk.", { first: true }),
    spacer(360),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [new TextRun({ text: "Sabbe sattā sukhitā hontu", font: FONT, size: 24, italics: true, color: ACCENT })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "May all beings be happy.", font: SANS, size: 18, color: GOLD })],
    }),
  );

  body.push(
    h1("Appendix"),
    h2("One practitioner’s course record"),
    p("A path is walked in real places, with real teachers, over real years. This record is included not as a résumé but as evidence that the training is a long companionship: sitting, serving, returning."),
    table(
      ["Date", "Course", "Place and teacher"],
      [
        ["Jul 2026", "Satipaṭṭhāna Sutta — sat", "Dhamma Padhāna — Ian Hetherington"],
        ["Feb 2026", "Ten-Day — served", "Dhamma Dīpa — Daniel Sanfey"],
        ["Aug 2025", "Children’s course — served", "Dhamma Dīpa"],
        ["Mar 2025", "Ten-Day — sat", "Dhamma Dīpa — Kirk Brown"],
        ["May 2024", "Children’s course — served", "Dhamma Dīpa"],
        ["Feb 2023", "Children’s course — served", "Dhamma Dīpa"],
        ["Sep 2015", "Three-Day — sat", "Dhamma Sukhakāri — Patrick Elder"],
        ["Jan 2002", "Three-Day — sat", "Dhamma Kitti, Kathmandu"],
        ["Jan 2001", "Ten-Day — served", "Dhamma Shringa — Roop Jyoti"],
        ["Oct 2000", "Ten-Day — sat", "Dhamma Shringa, Kathmandu"],
        ["Jan 2000", "Children & teenagers — served", "Dhamma Shringa — Roop Jyoti"],
        ["Oct 1999", "Ten-Day — sat", "Dhamma Shringa, Kathmandu"],
        ["Jun 1999", "Ten-Day — sat", "Dhamma Shringa — Suman Dhakhwa"],
      ]
    ),
    caption("From a first sit in Kathmandu to Satipaṭṭhāna at Dhamma Padhāna — twenty-seven years of beginning again."),
  );

  const glossary = [
    ["Anattā", "Not-self. There is a process; there is no lasting owner."],
    ["Anicca", "Impermanence. Everything compounded arises and passes."],
    ["Ānāpāna", "Knowing the incoming and outgoing breath at a small area."],
    ["Anusaya", "A latent tendency; old reaction asleep in the deep mind."],
    ["Ātāpī", "Ardent effort; the willingness to work without drama."],
    ["Bhaṅga", "Dissolution; the body known as a field of arising and passing."],
    ["Buddha", "One who has awakened. Also the historical Gotama, our guide."],
    ["Dhamma", "The law of nature; the teaching; the practice; mental contents."],
    ["Dukkha", "Suffering; the unreliability of what we try to hold."],
    ["Jhāna", "Absorption; deep collectedness. A lamp, not the destination."],
    ["Kalāpa", "The tiniest unit of matter in this way of describing the body."],
    ["Kamma", "Action and its result; the law that what we plant, we meet."],
    ["Mettā", "Loving-kindness; the wish that beings be well."],
    ["Nibbāna", "The unconditioned; the going out of the fire of reaction."],
    ["Paññā", "Wisdom, especially wisdom born of direct observation."],
    ["Refuge", "Where you put your weight: Buddha, Dhamma, Sangha."],
    ["Samādhi", "Concentration; a gathered mind."],
    ["Sampajāno", "Clear knowing of arising and passing, especially of feeling."],
    ["Sangha", "The community of walkers, and the noble ones who have walked far."],
    ["Saṅkhāra", "Reaction; the groove carved by craving and aversion."],
    ["Sati", "Awareness; remembering the present."],
    ["Satipaṭṭhāna", "Awareness established in body, feeling, mind, and contents."],
    ["Sīla", "Morality; the floor of the path."],
    ["Vedanā", "Sensation or feeling — pleasant, unpleasant, or neither."],
    ["Vipassanā", "Insight; seeing things as they are at the root of reaction."],
    ["Yathā bhūta", "As it actually is. The only time the path can be walked: now."],
  ];

  body.push(
    h1("Glossary of living words"),
    p("These are not ornaments. They are tools. Use the English until the Pāli becomes a friend; use the Pāli when one word holds more than a sentence."),
    ...glossary.flatMap(([term, def]) => [
      new Paragraph({
        spacing: { before: 140, after: 40 },
        children: [new TextRun({ text: term, font: SANS, size: 22, bold: true, color: ACCENT })],
      }),
      p(def, { after: 80 }),
    ]),
  );

  return { front, body };
};
