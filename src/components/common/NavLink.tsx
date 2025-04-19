'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useColorModeValue } from '../ui/color-mode';

interface NavLinkProps extends ButtonProps {
  href: string;
  name: string;
}

export default function NavLink({ href, name, ...rest }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === '/' ? pathname === href : pathname.includes(href.split('/')[1]);

  const hoverBg = useColorModeValue('neutral.200', 'neutralD.200');

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button
        as="a"
        aria-current={isActive ? 'page' : undefined}
        variant="ghost"
        size="md"
        px={4}
        _hover={{
          bg: hoverBg,
        }}
        {...rest}
      >
        {name}
      </Button>
    </NextLink>
  );
}
