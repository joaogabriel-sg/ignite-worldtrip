import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" h="100px">
      <Flex maxW={1160} mx="auto">
        <Image
          src="/logo.svg"
          alt="Um avião voando por cima a logo do worldtrip"
        />
      </Flex>
    </Flex>
  );
}
