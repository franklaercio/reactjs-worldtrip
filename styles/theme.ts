import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
      "50": "#FFBA08",
    },
    black: {
      "900": "#000000",
      "700": "#47585B",
      "300": "#999999",
      "50": "#999999",
    },
    white: {
      "900": "#FFFFFF",
      "450": "#F5F8FA",
      "50": "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.900",
      },
    },
  },
});
