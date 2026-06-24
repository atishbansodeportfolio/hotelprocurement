export interface Project {
  id: number;
  slug: string;
  brand: string;
  location: string;
  description: string;
  isPlaceholder: boolean;
  imagePath?: string;
  hoverImagePath?: string;
  keysCount: string;
  category: 'pip' | 'concept';
  gallery?: string[];
  narrative?: string[];
}


