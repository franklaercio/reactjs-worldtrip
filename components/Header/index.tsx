import Head from "next/head";
import { Center, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Center m="6" h={[2, 8]}>
        <Image src="images/logo.svg" alt="Logo" />
      </Center>
    </>
  );
}
