import MainBody from '@/components/body/mainBody';
import Footer from '@/components/footer/footer';
import NavBar from '@/components/header/navBar';
import { Box, Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main" minH="100vh" display="flex" flexDir="column" gap={8}>
      <Box position={'sticky'} top={0} zIndex={100} backdropFilter="blur(10px)">
        <NavBar />
      </Box>

      <Container
        maxW="container.md"
        flex="1"
        py={8}
        px={{ base: 6, md: 12, lg: 50 }}
        mx="auto"
      >
        <MainBody />
      </Container>

      <Footer />
    </Box>
  );
}
