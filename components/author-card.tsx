'use client';

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import type { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className = '' }: AuthorCardProps) {
  if (!author?.node?.name) {
    return null;
  }

  // Extraire les initiales du nom de l'auteur
  const initials = author.node.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`p-6 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50 ${className}`}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          {author.node.avatar?.url && (
            <AvatarImage src={author.node.avatar.url} alt={author.node.name} />
          )}
          <AvatarFallback className="text-lg font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {author.node.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Auteur de cet article
          </p>
        </div>
      </div>
    </div>
  );
}
