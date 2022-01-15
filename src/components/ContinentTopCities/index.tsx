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
    <Flex flexDir="column" w="100%" maxW={1160} mx="auto" mt="80px" mb="35px">
      <Heading fontSize="4xl" fontWeight="medium">
        Cidades +100
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap="48px" mt="40px">
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
