import MainBody from '@/components/body/mainBody';
import Footer from '@/components/footer/footer';
import NavBar from '@/components/header/navBar';
import { Box, Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main" minH="100vh" display="flex" flexDir="column">
      <Box
        position="fixed"
        width="100%"
        top={0}
        zIndex={100}
        backdropFilter="blur(10px)"
      >
        <NavBar />
      </Box>

      <Container maxW="container.md" flex="1" pt={24} pb={8}>
        <MainBody />
      </Container>

      <Footer />
    </Box>
  );
}
