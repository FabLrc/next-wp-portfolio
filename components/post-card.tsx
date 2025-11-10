import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/types';
import { AuthorWithAvatar } from './author-with-avatar';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-slate-950">
      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-900">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <time dateTime={post.date} className="text-sm text-slate-600 dark:text-slate-400">
            {formattedDate}
          </time>
          {post.author?.node?.name && (
            <AuthorWithAvatar author={post.author} size="sm" showName={false} />
          )}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
            {post.excerpt.replace(/<[^>]*>/g, '')}
          </p>
        )}

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Lire l&apos;article
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}
