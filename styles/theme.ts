import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    ":not(.chakra-dont-set-collapse) > .chakra-collapse": {
      overflow: "initial !important",
    },
  },
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
