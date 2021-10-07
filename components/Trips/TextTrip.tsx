import { Stack, Text, Circle } from "@chakra-ui/react";

interface TextTripProps {
  title: string;
}

export default function TextTrip({ title }: TextTripProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Circle size="8px" bg="yellow.900" />
      <Text fontSize="xl" color="black.700" fontWeight="bold">
        {title}
      </Text>
    </Stack>
  );
}
