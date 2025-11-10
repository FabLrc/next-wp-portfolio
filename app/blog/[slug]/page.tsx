'use client';

import { usePostBySlug } from '@/hooks/usePosts';
import { PostContent } from '@/components/post-content';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { data, isLoading, error } = usePostBySlug(slug);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 dark:border-white"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-200">
              Erreur lors du chargement de l&apos;article.
            </p>
          </div>
        )}

        {data?.postBy ? (
          <PostContent post={data.postBy} />
        ) : (
          !isLoading && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Article non trouvé.
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
}