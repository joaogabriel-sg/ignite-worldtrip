import { Flex, Text } from "@chakra-ui/react";

type ContinentInfoProps = {
  description: string;
  numberOfCountries: number | string;
  numberOfLanguages: number | string;
  numberOfTopCities: number | string;
};

export function ContinentInfo({
  description,
  numberOfCountries,
  numberOfLanguages,
  numberOfTopCities,
}: ContinentInfoProps) {
  return (
    <Flex w="100%" maxW={1160} mx="auto" mt="80px" align="center">
      <Text
        w="100%"
        maxW={600}
        mr="70px"
        fontSize="2xl"
        textAlign="justify"
        flexShrink={1}
      >
        {description}
      </Text>

      <Flex justify="space-between" shrink={0}>
        <Flex direction="column" align="center">
          <Text fontSize="5xl" fontWeight="semibold" color="primary.500">
            {numberOfCountries}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color="primary.700"
            mt="-12px"
          >
            países
          </Text>
        </Flex>

        <Flex direction="column" align="center" ml={42}>
          <Text fontSize="5xl" fontWeight="semibold" color="primary.500">
            {numberOfLanguages}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color="primary.700"
            mt="-12px"
          >
            línguas
          </Text>
        </Flex>

        <Flex direction="column" align="center" ml={42}>
          <Text fontSize="5xl" fontWeight="semibold" color="primary.500">
            {numberOfTopCities}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color="primary.700"
            mt="-12px"
          >
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
