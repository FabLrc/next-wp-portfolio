/**
 * Configuration du profil pour la page d'accueil
 * Modifiez ces valeurs selon vos informations personnelles
 */

export const profileConfig = {
  // Informations de base
  name: 'FabLrc',
  role: 'Développeur web Full Stack',
  location: 'France',
  
  // Avatar (URL de votre photo WordPress ou chemin local)
  avatar: 'https://avatars.githubusercontent.com/u/86679051?v=4', // Remplacer par l'URL réelle
  
  // Bio / Description
  bio: 'Développeur Full Stack passionné par la création d\'expériences web modernes et performantes. Spécialisé en Next.js, TypeScript, intégration IA et architecture cloud.',
  
  // Réseaux sociaux
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/FabLrc',
      icon: 'github' as const,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/fabien-laurence',
      icon: 'linkedin' as const,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fablrc',
      icon: 'twitter' as const,
    },
    {
      name: 'Email',
      url: 'contact@fablrc.dev',
      icon: 'email' as const,
    },
  ],
};
