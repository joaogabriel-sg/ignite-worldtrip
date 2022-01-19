import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="section"
      w="100%"
      h={["163px", "245px", "335px"]}
      bgImage="/banner.png"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        px="16px"
        justify="space-between"
        align={["center", "center", "flex-end"]}
      >
        <Box pb={["0", "0", "16"]} maxW={["100%", "524px"]}>
          <Heading
            fontWeight="medium"
            fontSize={["xl", "2xl", "4xl"]}
            color="gray.100"
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["sm", "md", "xl"]}
            fontWeight="normal"
            color="gray.300"
            mt="20px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Box>
            <Image
              src="/airplane.svg"
              alt="Airplane"
              transform="auto"
              translateY="33"
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
