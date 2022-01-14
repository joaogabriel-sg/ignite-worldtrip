import { Flex, Image, Text } from "@chakra-ui/react";

type TravelTypeProps = {
  icon: "building" | "cocktail" | "earth" | "museum" | "surf";
  title: string;
};

export function TravelType({ icon, title }: TravelTypeProps) {
  return (
    <Flex direction="column" align="center">
      <Image src={`/icons/${icon}.svg`} alt={icon} />
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        textTransform="lowercase"
        mt="6"
      >
        {title}
      </Text>
    </Flex>
  );
}
