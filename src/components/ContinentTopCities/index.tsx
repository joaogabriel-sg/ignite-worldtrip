import { Flex, Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

type Country = {
  flag_image: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
  name: string;
  city: string;
};

type ContinentTopCitiesProps = {
  countries: Country[];
};

export function ContinentTopCities({ countries }: ContinentTopCitiesProps) {
  return (
    <Flex
      flexDir="column"
      w="100%"
      maxW={1160}
      mx="auto"
      mt={["8", "10", "14", "20"]}
      mb="35px"
      px="16px"
    >
      <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="medium">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={["5", "7", "9", "12"]}
        mt={["8", "8", "10"]}
      >
        {countries.map((country) => (
          <City
            key={country.city}
            city={country.city}
            country={country.name}
            flag={country.flag_image.url}
            thumbnail={country.thumbnail.url}
          />
        ))}
      </Grid>
    </Flex>
  );
}
