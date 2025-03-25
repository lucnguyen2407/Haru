'use client';
import { Box, Container, HStack, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ColorModeButton } from '../ui/color-mode';
import NavLink from '../common/NavLink';

export default function NavBar() {
  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];
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
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} name={item.name} />
            ))}
            <ColorModeButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
