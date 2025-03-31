'use client';
import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useColorModeValue } from '../ui/color-mode';
import { BioSection, BioYear } from './bio';
import Paragraph from './paragraph';

export default function MainBody() {
  return (
    <Container maxW="container.md">
      <VStack width="full" gap={8} alignItems="stretch">
        <Box
          borderRadius="lg"
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an software developer based in Viet Nam!
        </Box>

        {/* Name and Title Section */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={3}>
            Nguyen Tien Luc
          </Heading>
          <Text fontSize="lg">
            Digital Craftsman ( Artist / Developer / Designer )
          </Text>
        </Box>

        {/* Profile Image */}
        <Box textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="120px"
            h="120px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="https://bit.ly/naruto-sage"
              boxSize="150px"
              borderRadius="full"
              fit="cover"
              alt="Nguyen Tien Luc"
            />
          </Box>
        </Box>

        {/* Work Section */}
        <Box>
          <Heading as="h3" mb={4}>
            Work
          </Heading>
          <Paragraph>
            I&apos;m a software developer based in Hanoi, Vietnam. I currently
            have 3 years of experience at FPT Software. I really enjoy solving
            problems&mdash;when I crack a tough one, it feels just like winning
            a game. In my free time, I love playing games like DOTA 2, and when
            I&apos;m not online, you&apos;ll probably find me at the gym.
          </Paragraph>
          <Box mt={6} textAlign="center">
            <Button colorScheme="teal" size="sm">
              My portfolio &gt;
            </Button>
          </Box>
        </Box>

        {/* Bio Section */}
        <Box>
          <Heading as="h3" mb={4}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Ha Noi, Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated with an engineering degree from Hanoi Architectural
            University.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Worked at FPT Software
          </BioSection>
        </Box>

        {/* I Love Section */}
        <Box>
          <Heading as="h3" mb={4}>
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Traveling, Go to the gym, Playing games, Watching Anime
          </Paragraph>
        </Box>

        {/* On the web Section */}
        <Box>
          <Heading as="h3" mb={4}>
            On the web
          </Heading>
          <VStack align="start" gap={3}>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                @craftzdog
              </Button>
            </Link>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                @inkdrop_app (English)
              </Button>
            </Link>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                @craftzdog (日本語)
              </Button>
            </Link>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                @craftzdog
              </Button>
            </Link>
          </VStack>

          <SimpleGrid columns={[1, 2]} gap={6} mt={6}>
            <Link href="https://www.youtube.com/devaslife" target="_blank">
              <GridItem
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                borderRadius="lg"
                _hover={{
                  bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300'),
                }}
                transition="all 0.2s"
              >
                <Text fontWeight="bold">Dev as Life</Text>
                <Text fontSize="sm">My YouTube channel (&gt;200k subs)</Text>
              </GridItem>
            </Link>
            <Link href="https://www.inkdrop.app/" target="_blank">
              <GridItem
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                borderRadius="lg"
                _hover={{
                  bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300'),
                }}
                transition="all 0.2s"
              >
                <Text fontWeight="bold">Inkdrop</Text>
                <Text fontSize="sm">A Markdown note-taking app</Text>
              </GridItem>
            </Link>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}
