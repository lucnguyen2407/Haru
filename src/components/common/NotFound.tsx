'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Text mt={2} fontSize="2xl">
        404 Page not found
      </Text>

      <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
        <Button mt={4} colorScheme="teal">
          Go to homepage
        </Button>
      </ChakraLink>
    </Box>
  );
};
