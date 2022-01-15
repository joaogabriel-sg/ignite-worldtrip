import { Flex, Box, Heading } from "@chakra-ui/react";

type ContinentBannerProps = {
  banner: string;
  title: string;
};

export function ContinentBanner({ banner, title }: ContinentBannerProps) {
  return (
    <Flex
      as="section"
      w="100%"
      h="500px"
      bgImage={banner}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box w="100%" h="100%" bg="rgba(28, 20, 1, 0.35)">
        <Flex
          w="100%"
          maxW={1160}
          h="100%"
          mx="auto"
          align="flex-end"
          pb="60px"
        >
          <Heading fontSize="5xl" fontWeight="semibold" color="gray.100">
            {title}
          </Heading>
        </Flex>
      </Box>
    </Flex>
  );
}
