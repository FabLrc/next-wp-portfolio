'use client';

import { usePosts } from '@/hooks/usePosts';
import { PostCard } from '@/components/post-card';

export default function BlogPage() {
  const { data, isLoading, error } = usePosts(10);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Découvrez mes derniers articles et réflexions sur le développement web.
        </p>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 dark:border-white"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
            <p className="text-red-800 dark:text-red-200">
              Erreur lors du chargement des articles. Vérifiez que l&apos;URL de l&apos;API WordPress est configurée.
            </p>
          </div>
        )}

        {data?.posts?.nodes && data.posts.nodes.length > 0 ? (
          <div className="grid gap-8">
            {data.posts.nodes.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          !isLoading && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Aucun article n&apos;a été trouvé. Les articles arrivent bientôt...
              </p>
            </div>
          )
        )}
      </main>
    </div>
  );
}
