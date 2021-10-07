import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Image, Icon } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
  isContinent: boolean;
}

export default function Header({ isContinent }: HeaderProps) {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex bg="white.900" m={6} align="center" justify="center">
        <Grid
          w="100%"
          maxW="1160px"
          alignItems="center"
          templateColumns="repeat(3, 1fr)"
          justifyContent="center"
          alignSelf="start"
        >
          {isContinent && (
            <Link href="/">
              <a>
                <Icon
                  as={RiArrowLeftSLine}
                  fontSize={[20, 40]}
                  color="black.700"
                  justifySelf="start"
                />
              </a>
            </Link>
          )}
          <Image
            w={["81px", "184px"]}
            src="../images/logo.svg"
            alt="Logo"
            justifySelf="center"
            gridColumn="2"
          />
        </Grid>
      </Flex>
    </>
  );
}
