import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#FFBA08",
      50: "rgba(255, 186, 8, 0.5)",
    },
    gray: {
      700: "#47585B",
      500: "#999999",
      300: "#DADADA",
      100: "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700",
      },
    },
  },
} as Theme | {});
