import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

type TravelTypeProps = {
  icon: "building" | "cocktail" | "earth" | "museum" | "surf";
  title: string;
};

export function TravelType({ icon, title }: TravelTypeProps) {
  const isMobileVersion = useBreakpointValue({ base: false, sm: true });

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justify="center"
      wrap="wrap"
    >
      {isMobileVersion ? (
        <Image
          src={`/icons/${icon}.svg`}
          alt={icon}
          w={["20px", "75px", "auto"]}
        />
      ) : (
        <Box
          bg="primary.500"
          w="8px"
          h="8px"
          mr="8px"
          borderRadius="50%"
          flexShrink={0}
        />
      )}

      <Text
        fontSize={["lg", "lg", "2xl"]}
        fontWeight={["medium", "semibold"]}
        textTransform="lowercase"
        textAlign="center"
        mt={isMobileVersion ? "6" : "0"}
      >
        {title}
      </Text>
    </Flex>
  );
}
