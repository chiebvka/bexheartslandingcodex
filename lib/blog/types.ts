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
