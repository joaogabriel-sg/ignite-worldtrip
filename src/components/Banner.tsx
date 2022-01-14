import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="section"
      w="100%"
      h="335px"
      bgImage="/banner.png"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        justify="space-between"
        align="flex-end"
      >
        <Box pb="16">
          <Heading fontWeight="medium" fontSize="36px" color="gray.100">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize="20px" fontWeight="normal" color="gray.300" mt="20px">
            Chegou a hora de tirar do papel a viagem que você
            <br /> sempre sonhou.
          </Text>
        </Box>

        <Box>
          <Image
            src="/airplane.svg"
            alt="Airplane"
            transform="auto"
            translateY="33"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
