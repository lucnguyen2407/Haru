'use client';
import { Box, Container, HStack, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ColorModeButton } from '../ui/color-mode';

export default function NavBar() {
  return (
    <Box>
      <Container maxW="container.lg">
        <HStack justify="space-between" w="100%" h={16}>
          <ChakraLink
            as={NextLink}
            href="/"
            _hover={{ textDecoration: 'none' }}
          >
            Haru
          </ChakraLink>
          <HStack wordSpacing={4}>
            <ChakraLink as={NextLink} href="/projects">
              Projects
            </ChakraLink>
            <ChakraLink as={NextLink} href="/blog">
              Blog
            </ChakraLink>
            <ChakraLink as={NextLink} href="/cv">
              CV
            </ChakraLink>
            <ChakraLink as={NextLink} href="/contact">
              Contact
            </ChakraLink>
            <ColorModeButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
