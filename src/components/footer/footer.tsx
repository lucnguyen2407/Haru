'use client';
import { Container, HStack, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useColorModeValue } from '../ui/color-mode';
import { LuGithub, LuLinkedin, LuTwitter, LuYoutube } from 'react-icons/lu';

const socialLinks = [
  {
    label: 'Twitter',
    icon: LuTwitter,
    href: 'https://twitter.com/yourhandle',
    colorPalette: 'blue',
  },
  {
    label: 'LinkedIn',
    icon: LuLinkedin,
    href: 'https://www.linkedin.com/in/yourprofile',
    colorPalette: 'linkedin',
  },
  {
    label: 'GitHub',
    icon: LuGithub,
    href: 'https://github.com/yourusername',
    colorPalette: 'gray',
  },
  {
    label: 'YouTube',
    icon: LuYoutube,
    href: 'https://www.youtube.com/@yourchannel',
    colorPalette: 'red',
  },
];

const FooterLink = ({ href, name }: { href: string; name: string }) => (
  <Link href={href}>
    <Text
      fontSize="sm"
      color={useColorModeValue('neutral.800', 'neutralD.800')}
      _hover={{ color: useColorModeValue('neutral.1000', 'neutralD.1000') }}
    >
      {name}
    </Text>
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container as="footer" maxW="container.lg" py={8}>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: 'none', md: 'flex' }}
      >
        <FooterLink href="mailto:your.email@domain.com" name="Contact" />

        <Text
          fontSize="sm"
          color={useColorModeValue('neutral.800', 'neutralD.800')}
        >
          © {currentYear} Your Name
        </Text>

        <HStack>
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label={social.label}
                size="sm"
                variant="ghost"
                colorPalette={social.colorPalette}
                _hover={{
                  transform: 'translateY(-2px)',
                  opacity: 0.8,
                }}
              >
                <social.icon />
              </IconButton>
            </Link>
          ))}
        </HStack>

        <FooterLink href="/privacy" name="Privacy" />
      </HStack>
    </Container>
  );
}
