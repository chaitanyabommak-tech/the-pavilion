'use client';

import { useEffect } from 'react';
import { initUTMTracking } from '@/lib/utm';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize UTM tracking on page load
    // This captures UTM parameters from URL and stores them
    initUTMTracking();
  }, []);

  return <>{children}</>;
}
