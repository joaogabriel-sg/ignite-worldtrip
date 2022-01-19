import { Grid, GridItem } from "@chakra-ui/react";

import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      maxW="1160px"
      mx="auto"
      mt={["9", "9", "28"]}
      px="8px"
      flexWrap="wrap"
      align="center"
      justify="space-between"
      gap={["16px", 6]}
    >
      <GridItem>
        <TravelType icon="cocktail" title="Vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="surf" title="Praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="building" title="Moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="museum" title="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon="earth" title="E mais..." />
      </GridItem>
    </Grid>
  );
}
