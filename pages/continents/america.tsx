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

export default function America() {
  const continent = {
    slug: "america",
    title: "América",
    description:
      "América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas.",
    banner_image: "../images/continents/america/banner.jpg",
    countries: 50,
    languages: 60,
    cities: 27,
    cities_list: [
      {
        city: "Rio de Janeiro",
        country: "Brasil",
        thumbnail: "../images/continents/america/brazil.jpg",
        flag: "../images/continents/america/brazil-icon.png",
      },
      {
        city: "Chicago",
        country: "Estados Unidos",
        thumbnail: "../images/continents/america/usa.jpg",
        flag: "../images/continents/america/usa-icon.png",
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
