/**
 * Type definitions for the portfolio application
 */

export interface Author {
  node: {
    name: string;
    avatar?: {
      url: string;
    };
  };
}

export interface Post {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  date: string;
  author?: Author;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
  link?: string;
  technologies?: string[];
}
