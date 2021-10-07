import { Stack, Image, Text } from "@chakra-ui/react";

interface ImageTripProps {
  imgUrl: string;
  description: string;
}

export default function ImageTrip({ imgUrl, description }: ImageTripProps) {
  return (
    <Stack
      direction="column"
      spacing="24px"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={imgUrl} alt="cocktail" w={85} h={85} />
      <Text fontSize="2xl" color="black.700" fontWeight="bold">
        {description}
      </Text>
    </Stack>
  );
}
