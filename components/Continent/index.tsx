import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverTrigger,
  Text,
  Grid,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export interface ContinentProps {
  continent: {
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
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
        gap={[5, 10, 16, 20]}
        my={["8", "20"]}
      >
        <Text
          fontSize={["lg", "xl", "xl", "2xl"]}
          color="gray.700"
          textAlign="justify"
        >
          {continent.description}
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {continent.countries}
            </Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
              países
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {continent.languages}
            </Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
              línguas
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.400"
              fontWeight="500"
            >
              {continent.cities}
            </Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
              cidades +100
              <Popover>
                <PopoverTrigger>
                  <span>
                    <Icon
                      cursor="pointer"
                      as={RiInformationLine}
                      ml="1"
                      color="gray.400"
                      w={["10px", "16px"]}
                      h={["10px", "16px"]}
                    />
                  </span>
                </PopoverTrigger>
              </Popover>
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
