export const siteConfig = {
  name: 'Bexhearts',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bexhearts.com',
  email: 'support@bexhearts.com',
  description:
    'A Christian couples app for daily devotionals, shared prayer, weekly check-ins, intentional dates, and a private couple journal.',
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
    title: 'Put faith at the center from the start.',
    copy: 'Pray together, agree on healthy boundaries, and make honest spiritual conversations normal.',
  },
  {
    label: 'Engaged',
    title: 'Prepare for the marriage, not only the wedding.',
    copy: 'Use devotionals, weekly check-ins, and direct questions to strengthen your foundation.',
  },
  {
    label: 'Newlywed',
    title: 'Protect connection as you build a life together.',
    copy: 'Keep prayer, weekly reflection, dates, and shared memories close in your first years.',
  },
];

export const productRhythm = [
  {
    step: '01',
    title: 'Read the daily devotional',
    copy: 'One passage, a short reflection, and a practical action for the two of you.',
  },
  {
    step: '02',
    title: 'Keep your prayers together',
    copy: 'Save shared and personal prayers, then mark the ones God answers.',
  },
  {
    step: '03',
    title: 'Check in every week',
    copy: 'Talk clearly about emotional connection, faith, and communication.',
  },
  {
    step: '04',
    title: 'Keep the moments that matter',
    copy: 'Save completed dates, milestones, photos, and answered prayers in one place.',
  },
];
