'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import type { Post } from '@/types';

interface PostCardCompactProps {
  post: Post;
}

export function PostCardCompact({ post }: PostCardCompactProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Vérifier si l'article est récent (moins de 7 jours)
  const isRecent = (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24) < 7;

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="text-xs">
              {formattedDate}
            </Badge>
            {isRecent && (
              <Badge variant="default" className="text-xs bg-blue-600 dark:bg-blue-500">
                Nouveau
              </Badge>
            )}
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        {post.excerpt && (
          <CardContent>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {post.excerpt.replace(/<[^>]*>/g, '')}
            </p>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
