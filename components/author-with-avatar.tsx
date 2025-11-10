'use client';

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import type { Author } from '@/types';

interface AuthorWithAvatarProps {
  author: Author;
  showName?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AuthorWithAvatar({
  author,
  showName = true,
  size = 'md',
  className = '',
}: AuthorWithAvatarProps) {
  if (!author?.node?.name) {
    return null;
  }

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  // Extraire les initiales du nom de l'auteur
  const initials = author.node.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar className={sizeClasses[size]}>
        {author.node.avatar?.url && (
          <AvatarImage src={author.node.avatar.url} alt={author.node.name} />
        )}
        <AvatarFallback className={`font-semibold ${textSizeClasses[size]}`}>
          {initials}
        </AvatarFallback>
      </Avatar>
      {showName && (
        <span className={`${textSizeClasses[size]} font-medium text-slate-600 dark:text-slate-400`}>
          {author.node.name}
        </span>
      )}
    </div>
  );
}
