import { Grid, SimpleGrid } from "@chakra-ui/react";

import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      w="100%"
      maxW={1160}
      mx="auto"
      mt="28"
      justifyContent="space-between"
      gap="6"
    >
      <SimpleGrid>
        <TravelType icon="cocktail" title="Vida noturna" />
      </SimpleGrid>
      <SimpleGrid>
        <TravelType icon="surf" title="Praia" />
      </SimpleGrid>
      <SimpleGrid>
        <TravelType icon="building" title="Moderno" />
      </SimpleGrid>
      <SimpleGrid>
        <TravelType icon="museum" title="Clássico" />
      </SimpleGrid>
      <SimpleGrid>
        <TravelType icon="earth" title="E mais..." />
      </SimpleGrid>
    </Grid>
  );
}
