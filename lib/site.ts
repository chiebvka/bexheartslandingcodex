export const siteConfig = {
  name: 'Bexhearts',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bexhearts.com',
  email: 'support@bexhearts.com',
  description:
    'A faith-forward app for Christian couples building a shared rhythm of devotionals, prayer, check-ins, intentional dates, and remembered moments.',
  keywords: [
    'Christian couples app',
    'couples devotional app',
    'prayer app for couples',
    'Christian dating boundaries',
    'premarital questions',
    'newlywed devotional',
    'Christian relationship app',
    'couple prayer journal',
    'Christian date night ideas',
    'devotional for dating couples',
    'faith based relationship app',
    'couples bible app',
  ],
};

// Fill these in when the store listings go live; the invite page shows
// download buttons automatically once either URL is non-empty.
export const appLinks = {
  appStore: '',
  playStore: '',
};

export const stageCards = [
  {
    label: 'Dating',
    title: 'Build rhythms before pressure does.',
    copy: 'Pray together, talk through boundaries, and make faith a normal part of your relationship.',
  },
  {
    label: 'Engaged',
    title: 'Prepare for more than the wedding.',
    copy: 'Use devotionals, check-ins, and intentional questions to build a shared foundation.',
  },
  {
    label: 'Newlywed',
    title: 'Keep choosing the small faithful habits.',
    copy: 'Make prayer, weekly reflection, and shared memories part of your first years together.',
  },
];

export const productRhythm = [
  {
    step: '01',
    title: 'Read together',
    copy: 'Daily scripture, reflection, and a small couple action.',
  },
  {
    step: '02',
    title: 'Pray together',
    copy: 'Shared and personal prayers, including answered-prayer moments.',
  },
  {
    step: '03',
    title: 'Check in gently',
    copy: 'Weekly emotional, spiritual, and communication reflections.',
  },
  {
    step: '04',
    title: 'Remember the story',
    copy: 'Dates, milestones, and moments collected in one couple space.',
  },
];

