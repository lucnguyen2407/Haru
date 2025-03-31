'use client';

import { Center, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="loading-placeholder" style={{ height: '100vh' }}></div>
    );
  }

  return (
    <Center h="100vh">
      <Spinner size="xl" color="blue.500" />
    </Center>
  );
}
