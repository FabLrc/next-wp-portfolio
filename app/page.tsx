'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SocialLinks } from '@/components/social-links';
import { PostCardCompact } from '@/components/post-card-compact';
import { useRecentPosts } from '@/hooks/useRecentPosts';
import { profileConfig } from '@/lib/profile-config';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { data, isLoading, error } = useRecentPosts(3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32 border-4 border-slate-200 dark:border-slate-800">
                  <AvatarImage src={profileConfig.avatar} alt={profileConfig.name} />
                  <AvatarFallback className="text-3xl font-bold">
                    {profileConfig.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {profileConfig.name}
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    {profileConfig.role}
                  </p>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {profileConfig.bio}
                </p>

                <Separator />

                {/* Social Links */}
                <div>
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Me suivre
                  </h2>
                  <SocialLinks links={profileConfig.socialLinks} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Derniers articles
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
            >
              Voir tous les articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-300 dark:border-slate-700 border-t-blue-600 dark:border-t-blue-400"></div>
            </div>
          )}

          {error && (
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardContent className="pt-6">
                <p className="text-red-800 dark:text-red-200">
                  Erreur lors du chargement des articles.
                </p>
              </CardContent>
            </Card>
          )}

          {data?.posts?.nodes && data.posts.nodes.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {data.posts.nodes.map((post) => (
                <PostCardCompact key={post.id} post={post} />
              ))}
            </div>
          ) : (
            !isLoading && (
              <Card>
                <CardContent className="pt-6 text-center py-12">
                  <p className="text-slate-600 dark:text-slate-400">
                    Aucun article pour le moment. Revenez bientôt !
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </section>
      </main>
    </div>
  );
}
