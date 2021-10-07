import { Center, Divider } from "@chakra-ui/react";

export default function Separator() {
  return (
    <Center mt={8} mb={8}>
      <Divider
        w={[10, 40, 90]}
        borderColor="black.900"
        orientation="horizontal"
        alignItems="center"
        justifyContent="center"
      />
    </Center>
  );
}
