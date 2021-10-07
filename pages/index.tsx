import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Banner from "../components/Banner";
import Separator from "../components/Separator";
import Trips from "../components/Trips";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />
      <Trips />
      <Separator />
      <Heading />
      <Slider />
    </Flex>
  );
}
