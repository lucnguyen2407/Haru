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

  // Prevent hydration mismatch by using simplified element tree during SSR
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{props.children}</div>;
  }

  // Only render the full ChakraProvider and ColorModeProvider on the client
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
