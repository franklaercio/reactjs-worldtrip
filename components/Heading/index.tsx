import { Stack, Text } from "@chakra-ui/react";

export default function Heading() {
  return (
    <Stack spacing={3} alignItems="center" justifyContent="center">
      <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="black.700">
        Vamos nessa?
      </Text>
      <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} color="black.700">
        Então escolha seu continente
      </Text>
    </Stack>
  );
}
