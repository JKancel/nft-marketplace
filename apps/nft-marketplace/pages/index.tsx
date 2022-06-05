import ControlledProductGrid from '@nft-marketplace/components/Grids/ProductGrid/controlled/ControlledProductGrid';
import {
  Heading,
  HStack,
  Link,
  Text,
  Image,
  Box,
  Flex,
  StackDivider,
} from '@chakra-ui/react';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>NFT Marketplace Demo</title>
      </Head>
      <Flex mr="30px" mt="15px" w="50px" marginLeft="auto">
        <Link isExternal href="https://github.com/buildable/nft-marketplace">
          <Image
            alt="Github Logo"
            src="https://assets.buildable.dev/catalog/node-templates/github.svg"
          />
        </Link>
      </Flex>
      <Heading color="black" w="100%" textAlign="center">
        NFT Marketplace Demo
      </Heading>
      <HStack mt="3" justify="center" w="100%">
        <Text color="black" fontWeight="semibold" fontSize="lg">
          Powered by
        </Text>
        <HStack divider={<StackDivider borderColor="gray.200" />}>
          <Link isExternal href="https://buildable.dev">
            <Image
              alt="Buildable logo"
              w="100px"
              src="/images/buildableLogo.svg"
            />
          </Link>
          <Link isExternal href="https://moralis.io/">
            <Image
              alt="Moralis logo"
              w="100px"
              src="/images/moralisLogo.svg"
            />
          </Link>
        </HStack>
      </HStack>
      <Box
        maxW="1500px"
        mx="auto"
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <ControlledProductGrid />
      </Box>
    </>
  );
}

export default Index;
