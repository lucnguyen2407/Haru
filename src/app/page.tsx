import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Box, Container, Spinner } from '@chakra-ui/react';

// Dynamic imports for better code splitting
const NavBar = dynamic(() => import('@/components/header/navBar'), {
  loading: () => <Box h="16" />,
});

const MainBody = dynamic(() => import('@/components/body/mainBody'), {
  loading: () => <Spinner size="xl" />,
});

const Footer = dynamic(() => import('@/components/footer/footer'), {
  loading: () => <Box h="16" />,
});

export default function Home() {
  return (
    <Box as="main" minH="100vh" display="flex" flexDir="column">
      <Suspense fallback={<Box h="16" />}>
        <NavBar />
      </Suspense>

      <Container maxW="container.lg" flex="1">
        <Suspense fallback={<Spinner size="xl" />}>
          <MainBody />
        </Suspense>
      </Container>

      <Suspense fallback={<Box h="16" />}>
        <Footer />
      </Suspense>
    </Box>
  );
}
