'use client';

import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/lib/graphql-client';
import { GET_RECENT_POSTS_QUERY } from '@/lib/queries';
import type { Post } from '@/types';

interface RecentPostsResponse {
  posts: {
    nodes: Post[];
  };
}

export function useRecentPosts(limit = 3) {
  return useQuery<RecentPostsResponse>({
    queryKey: ['recentPosts', limit],
    queryFn: async () => {
      return graphqlClient.request<RecentPostsResponse>(GET_RECENT_POSTS_QUERY, {
        first: limit,
      });
    },
  });
}
