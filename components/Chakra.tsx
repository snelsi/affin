import * as React from "react";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  useColorMode,
} from "@chakra-ui/react";
import theme from "styles/theme";

const UpdateTheme = ({ children }) => {
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    document.body.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return children;
};

export const Chakra = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <UpdateTheme>{children}</UpdateTheme>
    </ChakraProvider>
  );
};

export const getServerSideProps = ({ req }) => ({
  props: {
    cookies: req.headers.cookie ?? "",
  },
});
