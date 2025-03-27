'use client';
import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Image,
  List,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useColorModeValue } from '../ui/color-mode';
import { BioSection, BioYear } from './bio';
import Paragraph from './paragraph';
import { RiMailLine } from 'react-icons/ri';

export default function MainBody() {
  return (
    <Container
      maxW="container.md"
      px={{ base: 6, md: 12, lg: 16 }} // Increased padding
    >
      <VStack width="full" gap={8} alignItems="stretch">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an indie app developer based in Japan!
        </Box>

        {/* Profile Section */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2">Nguyen Tien Luc</Heading>
            <p> Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="https://bit.ly/naruto-sage"
                boxSize="150px"
                borderRadius="full"
                fit="cover"
                alt="Naruto Uzumaki"
              />
            </Box>
          </Box>
        </Box>

        {/* Work Section */}
        <VStack gap={4} alignItems="flex-start">
          <Heading as="h3">Work</Heading>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <Link href="/works/inkdrop" passHref scroll={false}>
              Inkdrop
            </Link>
            . He publishes content for marketing his products and his YouTube
            channel called &quot;
            <Link
              href="https://www.youtube.com/devaslife"
              passHref
              target="_blank"
            >
              Dev as Life
            </Link>
            &quot; has more than 100k subscribers.
          </Paragraph>
          <Box my={4}>
            <Button colorScheme="teal">My portfolio</Button>
          </Box>
        </VStack>

        {/* Bio Section */}
        <VStack gap={4} alignItems="flex-start">
          <Heading as="h3">Bio</Heading>
          <BioSection>
            <BioYear>1984</BioYear>
            Born in Osaka (大阪), Japan.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Completed the Master&apos;s Program in the Graduate School of
            Information Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Worked at Yahoo! Japan (ヤフー株式会社入社)
          </BioSection>
          <BioSection>
            <BioYear>2012 to present</BioYear>
            Working as a freelancer
          </BioSection>
        </VStack>

        {/* I Love Section */}
        <VStack gap={4} alignItems="flex-start">
          <Heading as="h3">I ♥</Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link href="https://illust.odoruinu.net/" target="_blank">
              Drawing
            </Link>
            , Playing Drums,{' '}
            <Link href="https://500px.com/p/craftzdog" target="_blank">
              Photography
            </Link>
            , Leica, Machine Learning
          </Paragraph>
        </VStack>

        {/* Social Section */}
        <VStack gap={4} alignItems="flex-start">
          <Heading as="h3">On the web</Heading>
          <List.Root>
            <List.Item>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @craftzdog
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @inkdrop_app (English)
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @craftzdog (日本語)
                </Button>
              </Link>
            </List.Item>
            <List.Item>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @craftzdog
                </Button>
              </Link>
            </List.Item>
          </List.Root>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <Link href="https://www.youtube.com/devaslife" target="_blank">
              <GridItem title="Dev as Life">
                My YouTube channel (&gt;200k subs)
              </GridItem>
            </Link>
            <Link href="https://www.inkdrop.app/" target="_blank">
              <GridItem title="Inkdrop">A Markdown note-taking app</GridItem>
            </Link>
          </SimpleGrid>
        </VStack>

        {/* Newsletter Section */}
        <VStack gap={4} alignItems="flex-start">
          <Heading as="h3">Newsletter</Heading>
          <p>
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects, tutorials, and videos
          </p>

          <Box my={4}>
            <Link href="https://www.devas.life/" passHref scroll={false}>
              <Button>
                <RiMailLine /> EmailSign up my newsletter here
              </Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}
