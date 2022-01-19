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
    <Flex
      w="100%"
      maxW="1160px"
      mx="auto"
      mt={["6", "8", "10", "20"]}
      px="16px"
      align="center"
      flexDir={["column", "column", "row"]}
    >
      <Text
        w="100%"
        maxW={["100%", "100%", 600]}
        mr={["0", "0", "70px"]}
        fontSize={["sm", "md", "md", "2xl"]}
        textAlign="justify"
        flexShrink={1}
      >
        {description}
      </Text>

      <Flex
        w={["100%", "100%", "auto"]}
        flexShrink={0}
        justify="space-between"
        mt={["4", "4", "0"]}
      >
        <Flex direction="column" align={["flex-start", "flex-start", "center"]}>
          <Text
            fontSize={["2xl", "4xl", "4xl", "5xl"]}
            fontWeight="semibold"
            color="primary.500"
          >
            {numberOfCountries}
          </Text>
          <Text
            fontSize={["lg", "lg", "lg", "2xl"]}
            fontWeight={["normal", "normal", "semibold"]}
            color="primary.700"
            mt={["-4px", "6px", "-12px"]}
          >
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={["flex-start", "flex-start", "center"]}
          ml={["8px", "42px"]}
        >
          <Text
            fontSize={["2xl", "4xl", "4xl", "5xl"]}
            fontWeight="semibold"
            color="primary.500"
          >
            {numberOfLanguages}
          </Text>
          <Text
            fontSize={["lg", "lg", "lg", "2xl"]}
            fontWeight={["normal", "normal", "semibold"]}
            color="primary.700"
            mt={["-4px", "6px", "-12px"]}
          >
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          align={["flex-start", "flex-start", "center"]}
          ml={["8px", "42px"]}
        >
          <Text
            fontSize={["2xl", "4xl", "4xl", "5xl"]}
            fontWeight="semibold"
            color="primary.500"
          >
            {numberOfTopCities}
          </Text>
          <Text
            fontSize={["lg", "lg", "lg", "2xl"]}
            fontWeight={["normal", "normal", "semibold"]}
            color="primary.700"
            mt={["-4px", "6px", "-12px"]}
          >
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
