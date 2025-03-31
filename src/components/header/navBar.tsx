'use client';
import { Box, Container, HStack, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ColorModeButton, useColorModeValue } from '../ui/color-mode';

export default function NavBar() {
  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <Box
      bg={useColorModeValue('#ffffff40', '#20202380')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('neutral.400', 'neutralD.400')}
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.lg">
        <HStack justify="space-between" w="100%" h={16}>
          <ChakraLink
            as={NextLink}
            href="/"
            _hover={{ textDecoration: 'none' }}
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Box mr={2}>🐾</Box>
            Haru
          </ChakraLink>
          <HStack gap={4}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                as={NextLink}
                href={item.href}
                fontSize="sm"
                fontWeight="medium"
                _hover={{ textDecoration: 'none' }}
              >
                {item.name}
              </ChakraLink>
            ))}
            <ChakraLink
              as={NextLink}
              href="https://github.com/yourname"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ textDecoration: 'none' }}
            >
              <Box display="flex" alignItems="center">
                <Box mr={1}>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Box>
                Source
              </Box>
            </ChakraLink>
            <ColorModeButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
