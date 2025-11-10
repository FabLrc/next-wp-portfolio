import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/types';

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
        <span className="mr-2">←</span>
        Retour au blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 flex-wrap">
          <time dateTime={post.date}>{formattedDate}</time>
          {post.author?.node?.name && (
            <>
              <span>•</span>
              <span>{post.author.node.name}</span>
            </>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-96 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden mb-8">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      {post.content && (
        <div className="prose dark:prose-invert max-w-none mb-12">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="post-content text-slate-700 dark:text-slate-300 leading-relaxed space-y-4"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-colors"
        >
          <span className="mr-2">←</span>
          Retour au blog
        </Link>
      </footer>
    </article>
  );
}
