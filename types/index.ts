/**
 * Type definitions for the portfolio application
 */

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
  date: string;
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
