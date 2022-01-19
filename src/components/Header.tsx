import { Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

type HeaderProps = {
  goBack?: boolean;
};

export function Header({ goBack = false }: HeaderProps) {
  const router = useRouter();

  function handleGoHome() {
    router.push("/");
  }

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "75px", "100px"]}
      position="relative"
    >
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        align="center"
        px="16px"
        justify="space-between"
      >
        {goBack && (
          <Icon
            as={FiChevronLeft}
            fontSize="2xl"
            color="gray.700"
            cursor="pointer"
            onClick={handleGoHome}
          />
        )}

        <Flex flex="1" justify="center">
          <Image
            w="auto"
            h={["25px", "32px", "auto"]}
            src="/logo.svg"
            alt="Um avião voando por cima a logo do worldtrip"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
