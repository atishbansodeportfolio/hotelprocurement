export interface ServiceDetail {
  id: number;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  metric: string;
  image: string;
}

export interface PremiumOffering {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  defaultCategoryPage: number; // Page number in index to pre-select
}

export interface LookbookCategory {
  name: string;
  pageNumber: number;
  description: string;
  images: string[];
}
