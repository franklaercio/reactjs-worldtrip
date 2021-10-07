import { Flex, Heading } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import Continent from "../../components/Continent";
import Header from "../../components/Header";

export interface ContinentProps {
  slug: string;
  title: string;
  description: string;
  banner_image: string;
  countries: number;
  languages: number;
  cities: number;
  cities_list: {
    city: string;
    country: string;
    thumbnail: string;
    flag: string;
  }[];
}

export default function Europe() {
  const continent = {
    slug: "europe",
    title: "Europa",
    description:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    banner_image: "../images/continents/europe/banner.jpg",
    countries: 50,
    languages: 60,
    cities: 27,
    cities_list: [
      {
        city: "Londres",
        country: "Reino Unido",
        thumbnail: "../images/continents/europe/london.jpg",
        flag: "../images/continents/europe/uk-icon.png",
      },
      {
        city: "Paris",
        country: "França",
        thumbnail: "../images/continents/europe/paris.jpg",
        flag: "../images/continents/europe/france-icon.png",
      },
      {
        city: "Roma",
        country: "Itália",
        thumbnail: "../images/continents/europe/roma.jpg",
        flag: "../images/continents/europe/italy-icon.png",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        thumbnail: "../images/continents/europe/praga.jpg",
        flag: "../images/continents/europe/tcheco-icon.png",
      },
      {
        city: "Amsterdam",
        country: "Holanda",
        thumbnail: "../images/continents/europe/amsterdam.jpg",
        flag: "../images/continents/europe/holand-icon.png",
      },
    ],
  };

  return (
    <Flex direction="column" h="100vh">
      <Header isContinent={true} />
      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`${continent.banner_image}`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {continent.title}
        </Heading>
      </Flex>
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem" p={2}>
        <Continent continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}
