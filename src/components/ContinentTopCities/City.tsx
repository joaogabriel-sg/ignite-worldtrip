import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type CityProps = {
  country: string;
  city: string;
  flag: string;
  thumbnail: string;
};

export function City({ country, city, flag, thumbnail }: CityProps) {
  return (
    <Flex flexDir="column" overflow="hidden">
      <Image
        src={thumbnail}
        alt="Banner"
        w="100%"
        h="173px"
        borderTopRadius={4}
      />

      <Flex
        w="100%"
        borderWidth={1}
        borderTopWidth={0}
        borderColor="primary.50"
        borderBottomRadius={4}
        px="24px"
        pt="18px"
        pb="25"
        align="center"
        justify="space-between"
      >
        <Box>
          <Heading
            as="h4"
            fontSize="20px"
            fontWeight="semibold"
            lineHeight="25px"
          >
            {city}
          </Heading>
          <Text
            fontSize="16px"
            fontWeight="medium"
            lineHeight="25px"
            color="gray.500"
            mt="12px"
          >
            {country}
          </Text>
        </Box>

        <Image
          src={flag}
          alt="Banner"
          w="30px"
          h="30px"
          objectFit="cover"
          borderRadius="50%"
          flexShrink={0}
        />
      </Flex>
    </Flex>
  );
}
