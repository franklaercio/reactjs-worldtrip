import { Flex, useBreakpointValue } from "@chakra-ui/react";
import TripsImage from "./TripsImage";
import TripsText from "./TripsText";

export default function Trips() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      m={{ base: 4, md: 10, lg: 20 }}
      alignItems="center"
      justifyContent="center"
    >
      {isWideVersion ? <TripsImage /> : <TripsText />}
    </Flex>
  );
}
