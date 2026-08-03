// Common types used throughout the application

export interface SanityImage {
  asset: {
    _id: string;
    url: string;
  };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: SanityImage;
  publishedAt: string;
  excerpt: string;
  body?: any; // For rich text content
  categories: string[];
  authorName: string;
  authorImage?: SanityImage;
}

export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  mainImage: SanityImage;
  tags: string[];
  link?: string;
  githubLink?: string;
}

export interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  date: string;
  image: SanityImage;
  link?: string;
  description: string;
}

export interface GalleryImage {
  _id: string;
  title: string;
  description?: string;
  image: SanityImage;
  tags?: string[];
}