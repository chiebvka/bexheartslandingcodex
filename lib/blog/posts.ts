export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: 'Dating' | 'Engaged' | 'Newlywed' | 'Prayer' | 'Dates';
  publishedAt: string;
  readingMinutes: number;
  content: Array<{
    heading?: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'pray-before-you-react-couples-conflict',
    title: 'Pray Before You React: A 60-Second Habit for Couples in Conflict',
    description:
      'The words that come after a pause and a prayer are almost always better than the ones that come before.',
    category: 'Prayer',
    publishedAt: '2026-07-08',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Most relationship damage does not come from the disagreement itself. It comes from the first ninety seconds after it starts, when both people are reacting instead of responding.',
          'A sixty-second prayer is long enough to interrupt that reflex and short enough to actually happen. You are not solving the argument in that minute. You are choosing who you want to be inside it.',
        ],
      },
      {
        heading: 'What the pause actually does',
        paragraphs: [
          'Naming the moment to God forces you to name it honestly to yourself. It is very hard to pray about a fight and keep pretending you had no part in it.',
          'The prayer can be five words: help me love them well. That is enough to change the sentence you say next.',
        ],
      },
      {
        heading: 'Make it a shared agreement, not a secret technique',
        paragraphs: [
          'Tell your partner you want to try this, in a calm moment, not mid-fight. A boundary you both agreed to feels like protection; one that appears mid-argument feels like a wall.',
          'Couples who practice this in Bexhearts often pair it with a shared boundary like no name-calling, even in the big ones, so the pause has something to land on.',
        ],
      },
    ],
  },
  {
    slug: 'daily-devotional-habit-for-couples',
    title: 'How to Build a Daily Devotional Habit as a Couple That Survives Busy Seasons',
    description:
      'Five minutes, one passage, one honest question — how couples make devotionals a rhythm instead of a resolution.',
    category: 'Prayer',
    publishedAt: '2026-07-06',
    readingMinutes: 5,
    content: [
      {
        paragraphs: [
          'Most couple devotional habits die for one of two reasons: the bar was set too high, or only one person was carrying it.',
          'The fix for the first is size. The fix for the second is structure. A five-minute devotional both of you complete — separately or side by side — beats a forty-minute study you manage twice a month.',
        ],
      },
      {
        heading: 'Anchor it to something that already happens',
        paragraphs: [
          'Habits attach best to existing routines: with morning coffee, on the commute, right after dinner, before the last scroll of the night. Pick the anchor you already never skip.',
          'If you live apart or work opposite shifts, same devotional, different times still counts. The point is that you both read the same words and can talk about them.',
        ],
      },
      {
        heading: 'Let a streak carry you through the boring middle',
        paragraphs: [
          'Every habit has a stretch where the novelty is gone and the depth has not arrived yet. A visible streak — with grace for the occasional missed day — is scaffolding for exactly that stretch.',
          'That is why Bexhearts builds its couple streak around one thing only: both of you finishing the day\u2019s devotional. Not perfection. Presence.',
        ],
      },
    ],
  },
  {
    slug: 'date-night-questions-christian-couples',
    title: 'Date Night Questions for Christian Couples Who Are Tired of "How Was Your Day"',
    description:
      'Questions that move a date from logistics to connection — for dating, engaged, and married couples.',
    category: 'Dates',
    publishedAt: '2026-07-04',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Good questions do more for a date than a good restaurant. The goal is not interrogation; it is giving each other a reason to say something you have not said before.',
          'Try one of these per date, not ten: What has God been teaching you lately that you have not told me? When did you feel closest to me this month? What are you quietly worried about? What would you love us to pray for together this season?',
        ],
      },
      {
        heading: 'Match the question to the season',
        paragraphs: [
          'Dating couples need discovery questions — story, family, faith history. Engaged couples need rhythm questions — money, conflict, church, rest. Married couples need maintenance questions — what needs repair, what deserves celebration.',
          'One honest answer is a successful date. Do not chase intensity; chase truth said gently.',
        ],
      },
      {
        heading: 'Write down what you learn',
        paragraphs: [
          'The best answers are worth keeping. A line in a shared journal — what you did, what they said, what you want to remember — turns a nice evening into part of your story.',
          'Bexhearts pairs a 350-idea date library with exactly that: complete a date, keep the moment, and let other couples\u2019 star ratings point you to the ideas worth trying.',
        ],
      },
    ],
  },
  {
    slug: 'couple-journal-how-to-keep-memories',
    title: 'How to Keep a Couple Journal (and Why Your Memories Deserve Better Than a Camera Roll)',
    description:
      'Answered prayers, milestones, and ordinary Tuesdays — a simple system for remembering your relationship.',
    category: 'Newlywed',
    publishedAt: '2026-07-02',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Every couple is accumulating a story. Very few are keeping it anywhere. The camera roll has ten thousand photos and no meaning; the milestones live in two people\u2019s fading memories.',
          'A couple journal fixes this with almost no effort: one entry when something matters. A moment, a milestone, an answered prayer, a date that turned into a memory.',
        ],
      },
      {
        heading: 'Record answered prayers especially',
        paragraphs: [
          'Nothing builds a couple\u2019s faith like reading what you were desperate about a year ago and seeing how it resolved. An answered-prayer record is evidence of faithfulness you can revisit on the hard days.',
          'Date the entry. Write what you asked, and later, what happened. That is the whole discipline.',
        ],
      },
      {
        heading: 'Mark the anniversaries that matter to you',
        paragraphs: [
          'First date, engagement, wedding, the day you started praying together — put them somewhere that counts down and celebrates with you.',
          'In Bexhearts this is the Journal: moments with photos, milestones with countdowns, answered prayers woven in automatically. Your story, kept.',
        ],
      },
    ],
  },
  {
    slug: 'long-distance-christian-dating-spiritually-close',
    title: 'Long-Distance Christian Dating: How to Stay Spiritually Close Across the Miles',
    description:
      'Distance tests logistics; it does not have to test faith. Shared rhythms for couples living apart.',
    category: 'Dating',
    publishedAt: '2026-06-30',
    readingMinutes: 5,
    content: [
      {
        paragraphs: [
          'Long-distance couples usually over-invest in communication volume and under-invest in shared practice. Endless texting keeps you updated; it does not keep you formed.',
          'The couples who thrive apart are the ones with rhythms that do not require proximity: the same devotional each morning, a prayer list you both carry, a weekly call that includes a check-in and not just a recap.',
        ],
      },
      {
        heading: 'Same words, different time zones',
        paragraphs: [
          'You do not need to be online together to be together. Reading the same passage — knowing your person read it too, hours earlier or later — creates a quiet, daily thread between you.',
          'Pray for each other by name, about real things. Vague prayer produces vague closeness.',
        ],
      },
      {
        heading: 'Plan virtual dates like real ones',
        paragraphs: [
          'Cook the same meal on video. Watch the same film and argue about it after. Read a Psalm and swap one honest question. Put it on the calendar with the same seriousness as an in-person date.',
          'Distance ends. The habits you build inside it come with you.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-repair-after-a-fight-couples',
    title: 'How to Repair After a Fight: A Grace-First Guide for Couples',
    description:
      'The health of a relationship is not measured by how rarely you fight, but by how well you find each other afterward.',
    category: 'Newlywed',
    publishedAt: '2026-06-28',
    readingMinutes: 5,
    content: [
      {
        paragraphs: [
          'Every couple fights. The difference between couples who grow and couples who drift is almost entirely in the repair — the deliberate turn back toward each other after the rupture.',
          'Repair is a skill, which is good news: skills can be practiced. It has three honest parts — owning your piece, hearing theirs, and choosing a way back that both of you believe in.',
        ],
      },
      {
        heading: 'Own your piece first, without a comma',
        paragraphs: [
          'An apology with a comma — I\u2019m sorry, but — is a counterattack in costume. Own what you did without narrating what provoked it. Your partner\u2019s piece is theirs to own, and they are far more likely to own it after you have gone first.',
          'Pray before this conversation if you can. It is much harder to posture before God and then posture to your partner in the same five minutes.',
        ],
      },
      {
        heading: 'Agree on the return route while it is calm',
        paragraphs: [
          'The best repair agreements are made in peacetime: we do not go to bed mid-fight, we pause with a plan; hard conversations happen face to face, not over text; no name-calling, ever.',
          'Write them down together. A shared covenant you both chose reads very differently in the heat of the moment than a rule one person invokes.',
        ],
      },
    ],
  },
  {
    slug: 'stop-comparing-your-relationship-online',
    title: 'Comparing Your Relationship to Couples Online (and How to Stop)',
    description:
      'Their highlight reel is not your real life. A practical way out of the comparison spiral.',
    category: 'Dating',
    publishedAt: '2026-06-26',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Comparison usually sneaks in through the phone: engagement photos, anniversary trips, a couple who seems effortlessly devout. Thirty seconds of scrolling and your own good, ordinary relationship suddenly looks like a deficit.',
          'The problem is not that their life is fake. It is that you are comparing their curated peak to your uncurated average, and no relationship survives that math.',
        ],
      },
      {
        heading: 'Audit the feed, honestly',
        paragraphs: [
          'Notice which accounts reliably leave you feeling behind, and mute them without ceremony. This is not bitterness; it is stewardship of your attention.',
          'Then replace the input: for every comparison trigger you remove, add one practice that turns you toward your actual partner — a gratitude named out loud, a question asked, a prayer prayed.',
        ],
      },
      {
        heading: 'Keep score of your own story instead',
        paragraphs: [
          'The antidote to watching other people\u2019s highlight reels is building your own record — not for an audience, but for the two of you. Answered prayers, milestones, small faithful streaks.',
          'A couple with a visible history of their own grace has remarkably little appetite for anyone else\u2019s.',
        ],
      },
    ],
  },
  {
    slug: 'weekly-marriage-check-in-questions',
    title: 'Weekly Check-In Questions That Actually Get Couples Talking',
    description:
      'A 15-minute weekly rhythm — three ratings and three honest questions — that catches distance before it grows.',
    category: 'Engaged',
    publishedAt: '2026-06-24',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Distance in a relationship rarely announces itself. It accumulates quietly — a stressful month, a skipped conversation, two people being efficient at logistics and absent from each other.',
          'A weekly check-in is the maintenance schedule: fifteen minutes, once a week, before anything is wrong. Rate the week honestly — emotional connection, spiritual connection, communication — then talk about the gaps.',
        ],
      },
      {
        heading: 'The three questions that matter',
        paragraphs: [
          'What did you appreciate about me this week? What do you want us to grow in? What can I be praying about for you?',
          'The first builds the habit of noticing. The second surfaces drift while it is still small. The third keeps your faith pointed at each other\u2019s real life instead of generalities.',
        ],
      },
      {
        heading: 'Answer separately, then reveal',
        paragraphs: [
          'There is a particular honesty that only happens when you answer before seeing your partner\u2019s answers. Both write, then both reveal — the comparison becomes a conversation starter instead of a performance.',
          'That reveal mechanic is exactly how check-ins work in Bexhearts: you each submit privately, and the week\u2019s reflections unlock only when you have both shown up.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-start-praying-together-as-a-couple',
    title: 'How to Start Praying Together as a Couple Without Making It Awkward',
    description:
      'A practical, gentle way for Christian couples to make prayer feel normal, honest, and sustainable.',
    category: 'Prayer',
    publishedAt: '2026-07-10',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'A lot of couples want prayer to be part of their relationship, but they wait until it feels natural. The better move is to make it small enough to repeat.',
          'Start with sixty seconds. Thank God for one specific thing. Ask for help with one real thing. End before it becomes a performance.',
        ],
      },
      {
        heading: 'Use a simple three-part rhythm',
        paragraphs: [
          'Try gratitude, request, and blessing. One of you names something you are thankful for, one of you names something you need help with, and then you pray a short blessing over the other person.',
          'The goal is not impressive language. The goal is shared attention before God.',
        ],
      },
      {
        heading: 'Let the habit stay ordinary',
        paragraphs: [
          'Prayer together does not need candles, a perfect mood, or a long devotional setup every night. It can happen before a drive, after dinner, or right before sleep.',
          'Bexhearts gives couples a practical place for that kind of faithfulness: a daily devotional, shared prayer, honest check-ins, and small actions they can repeat.',
        ],
      },
    ],
  },
  {
    slug: 'christian-dating-boundaries-that-are-practical',
    title: 'Christian Dating Boundaries That Are Practical, Not Performative',
    description:
      'A healthier way to talk about boundaries as shared protection, not shame or suspicion.',
    category: 'Dating',
    publishedAt: '2026-07-10',
    readingMinutes: 5,
    content: [
      {
        paragraphs: [
          'Boundaries work best when they are shared agreements, not rules one person uses to control the other.',
          'For Christian dating couples, a good boundary answers a simple question: what helps us honor God, protect trust, and keep tenderness in the relationship?',
        ],
      },
      {
        heading: 'Make boundaries specific',
        paragraphs: [
          'A vague boundary like “we should be careful” is hard to practice. A specific boundary like “we do not stay alone together past midnight” is easier to understand and easier to revisit.',
          'Specific does not mean harsh. It means both people know what love is asking for in real life.',
        ],
      },
      {
        heading: 'Review them without shame',
        paragraphs: [
          'The point is not to build a scoreboard. The point is to stay honest. Revisit your boundaries when schedules, stress, travel, or relationship stage changes.',
          'Bexhearts treats boundaries as part of a wider rhythm: prayer, check-ins, reflection, and intentional choices together.',
        ],
      },
    ],
  },
  {
    slug: 'premarital-questions-for-christian-couples',
    title: 'Premarital Questions Christian Couples Should Actually Talk Through',
    description:
      'Questions for engaged couples who want more than logistics before the wedding.',
    category: 'Engaged',
    publishedAt: '2026-07-10',
    readingMinutes: 4,
    content: [
      {
        paragraphs: [
          'Wedding planning can crowd out marriage preparation. The venue, budget, and guest list are real work, but they are not the only work.',
          'Engaged couples need conversations that reveal rhythms: prayer, conflict, money, family, intimacy, church, rest, and repair.',
        ],
      },
      {
        heading: 'Ask rhythm questions',
        paragraphs: [
          'Instead of only asking what each person believes, ask what you will practice together. When will you pray? How will you recover after conflict? What does Sabbath or rest look like in your home?',
          'These questions move faith from intention into a pattern.',
        ],
      },
      {
        heading: 'Keep the answers visible',
        paragraphs: [
          'Good conversations are easy to forget if they live only in memory. Write down what you are learning and return to it.',
          'That is one reason Bexhearts includes check-ins, prayer, and a couple journal in the same place.',
        ],
      },
    ],
  },
  {
    slug: 'faith-centered-date-ideas-under-25',
    title: 'Faith-Centered Date Ideas Under $25',
    description:
      'Simple date ideas for couples who want connection without turning every date into a big production.',
    category: 'Dates',
    publishedAt: '2026-07-10',
    readingMinutes: 3,
    content: [
      {
        paragraphs: [
          'A meaningful date does not need to be expensive. It needs attention, intention, and enough space for a real conversation.',
          'Here are a few simple ideas: take a prayer walk, cook a meal and answer one question each, visit a quiet park with a Psalm, or write encouragement notes for people in your church community.',
        ],
      },
      {
        heading: 'Add a faith tie without forcing it',
        paragraphs: [
          'Choose one verse, one gratitude prompt, or one prayer at the end. Keep it sincere and short.',
          'The date should still feel like a date. Faith does not need to make the moment stiff.',
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
