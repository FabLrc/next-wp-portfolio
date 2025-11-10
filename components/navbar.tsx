'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Site Title */}
          <Link
            href="/"
            className="flex-shrink-0 font-semibold text-lg text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            FabLrc
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
