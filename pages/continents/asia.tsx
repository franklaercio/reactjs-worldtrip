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

export default function Asia() {
  const continent = {
    slug: "asia",
    title: "Ásia",
    description:
      "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. ",
    banner_image: "../images/continents/asia/banner.jpg",
    countries: 50,
    languages: 60,
    cities: 27,
    cities_list: [
      {
        city: "Pequim",
        country: "China",
        thumbnail: "../images/continents/asia/china.jpg",
        flag: "../images/continents/asia/china-icon.png",
      },
      {
        city: "Seul",
        country: "Coréia do Sul",
        thumbnail: "../images/continents/asia/corea.jpg",
        flag: "../images/continents/asia/corea-icon.png",
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
