'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { useEffect, useState } from 'react';

export function Provider(props: ColorModeProviderProps) {
  // Use this to detect if we're in the browser
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR and before hydration, render a simple placeholder
  // After hydration, show the actual UI with all providers
  return (
    <>
      <style jsx global>{`
        .hide-until-hydrated {
          display: ${isMounted ? 'block' : 'none'};
        }
        .show-until-hydrated {
          display: ${isMounted ? 'none' : 'block'};
        }
      `}</style>

      <div className="show-until-hydrated" suppressHydrationWarning>
        {/* Empty placeholder for server rendering */}
        <div style={{ visibility: 'hidden', height: '100vh' }}></div>
      </div>

      <div className="hide-until-hydrated">
        <ChakraProvider value={defaultSystem}>
          <ColorModeProvider {...props} />
        </ChakraProvider>
      </div>
    </>
  );
}
