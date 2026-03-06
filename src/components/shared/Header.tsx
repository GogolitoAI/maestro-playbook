'use client';

import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight">Maestro AI</span>
            <span className="text-xs text-muted-foreground ml-1.5 hidden sm:inline">Playbook</span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/"
            className="text-sm px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/qualification"
            className="text-sm px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            Qualifier
          </Link>
        </nav>
      </div>
    </header>
  );
}
