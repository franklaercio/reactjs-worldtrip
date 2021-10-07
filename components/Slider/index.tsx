import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Slider() {
  const continents = [
    {
      id: "1",
      imageUrl: "../images/continents/europe.jpg",
      page: "/continents/europe",
      title: "Europa",
      description: "Este é o mais antigo continente.",
    },
    {
      id: "2",
      imageUrl: "../images/continents/asia.jpg",
      page: "/continents/asia",
      title: "Asia",
      description: "Este é o maior continente.",
    },
    {
      id: "3",
      imageUrl: "../images/continents/america.jpg",
      page: "/continents/america",
      title: "América",
      description: "Possui a maior biodiversidade do planeta.",
    },
    {
      id: "4",
      imageUrl: "../images/continents/oceania.jpg",
      page: "/continents/oceania",
      title: "Oceania",
      description: "O menor continente do planeta.",
    },
    {
      id: "5",
      imageUrl: "../images/continents/africa.jpg",
      page: "/continents/africa",
      title: "África",
      description: "Possui o maior deserto do planeta.",
    },
  ];

  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" p={5}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="50vh"
              align="center"
              justify="center"
              direction="column"
              bgImage={`${continent.imageUrl}`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`${continent.page}`}>
                <a>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
