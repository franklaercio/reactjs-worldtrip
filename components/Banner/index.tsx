import { Stack, Image, Box, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      pt={[4, 8]}
      pb={[3, 3]}
      px={[2, 4]}
      backgroundImage="../images/background.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Stack
        direction="row"
        spacing={[20, 40, 60]}
        alignItems={["left", "left", "center"]}
        justifyContent={["left", "left", "center"]}
      >
        <Stack direction="column">
          <Text fontSize={["2xl", "3xl", "4xl"]} color="white.900">
            5 Continentes,
          </Text>
          <Text fontSize={["2xl", "3xl", "4xl"]} color="white.900">
            infinitas possibilidades,
          </Text>
          <Text fontSize={["xs", "sm", "md"]} color="white.50">
            Chegou a hora de tirar do papel a viagem que
          </Text>
          <Text fontSize={["xs", "sm", "md"]} color="white.50">
            você sempre sonhou.
          </Text>
        </Stack>

        {isWideVersion && (
          <Image src="../images/airplane.svg" alt="airplane" /> // Colocar escala
        )}
      </Stack>
    </Box>
  );
}
