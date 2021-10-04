import Header from "../components/Header";

import {
  Stack,
  Image,
  Flex,
  Box,
  Text,
  Center,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import Trips from "../components/Trips";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Box
        pt={[4, 8]}
        pb={[3, 3]}
        px={[2, 4]}
        backgroundImage="../images/background.svg"
        backgroundRepeat="repeat"
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
            <Image src="../images/airplane.svg" alt="airplane" />
          )}
        </Stack>
      </Box>

      <Trips />

      <Center mt={[8, 52]}>
        <Divider
          w={[10, 90]}
          borderColor="black.900"
          orientation="horizontal"
          alignItems="center"
          justifyContent="center"
        />
      </Center>

      <Stack
        spacing={3}
        mt={[8, 52]}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={["xl", "4xl"]} color="black.700">
          Vamos nessa?
        </Text>
        <Text fontSize={["xl", "4xl"]} color="black.700">
          Então escolha seu continente
        </Text>
      </Stack>
    </Flex>
  );
}
