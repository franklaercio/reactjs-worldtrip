import { Stack } from "@chakra-ui/react";
import ImageTrip from "./ImageTrip";

export default function TripsImage() {
  return (
    <Stack
      direction="row"
      w="full"
      spacing={20}
      alignItems="center"
      justifyContent="center"
    >
      <ImageTrip
        imgUrl="../images/icons/cocktail.svg"
        description="Vida Noturna"
      />

      <ImageTrip imgUrl="../images/icons/surf.svg" description="Praia" />

      <ImageTrip imgUrl="../images/icons/building.svg" description="Moderno" />

      <ImageTrip imgUrl="../images/icons/museum.svg" description="Clássico" />

      <ImageTrip imgUrl="../images/icons/earth.svg" description="E mais" />
    </Stack>
  );
}
