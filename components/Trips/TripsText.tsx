import { Grid } from "@chakra-ui/react";
import TextTrip from "./TextTrip";

export default function TripsText() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <TextTrip title="Vida Noturna" />
      <TextTrip title="Praia" />
      <TextTrip title="Moderno" />
      <TextTrip title="Clássico" />
      <TextTrip title="E mais..." />
    </Grid>
  );
}
