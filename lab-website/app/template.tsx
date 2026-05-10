'use client';

import { usePathname } from 'next/navigation';
import PageTransition from '@/components/PageTransition';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // The home page (/) manages its own transition via SplashScreen.tsx
  // to coordinate with the particle loading animation.
  if (pathname === '/') return <>{children}</>;
  
  // All other pages get the standard bottom-up page transition
  return <PageTransition>{children}</PageTransition>;
}
