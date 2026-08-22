export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  readTime: string;
  seoTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  featuredSnippet?: string;
  content: string; // HTML format for easy rendering
  faqs?: {
    question: string;
    answer: string;
  }[];
  internalLinks?: {
    label: string;
    href: string;
  }[];
}
