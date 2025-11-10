'use client';

import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/lib/graphql-client';
import { GET_POSTS_QUERY, GET_POST_BY_SLUG_QUERY } from '@/lib/queries';
import type { Post } from '@/types';

interface PostsResponse {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
    nodes: Post[];
  };
}

interface PostBySlugResponse {
  postBy: Post;
}

export function usePosts(first: number = 10) {
  return useQuery<PostsResponse>({
    queryKey: ['posts', first],
    queryFn: async () => {
      try {
        const data = await graphqlClient.request(GET_POSTS_QUERY, { first });
        return data as PostsResponse;
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Return empty posts on error (no connection to WordPress)
        return {
          posts: {
            pageInfo: { hasNextPage: false, endCursor: null },
            nodes: [],
          },
        };
      }
    },
  });
}

export function usePostBySlug(slug: string) {
  return useQuery<PostBySlugResponse>({
    queryKey: ['post', slug],
    queryFn: async () => {
      try {
        const data = await graphqlClient.request(GET_POST_BY_SLUG_QUERY, { slug });
        return data as PostBySlugResponse;
      } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
      }
    },
    enabled: !!slug,
  });
}
