import * as React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

interface ToggleThemeProps {}
const ToggleTheme: React.FC<ToggleThemeProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={colorMode === "light" ? "Use dark theme" : "Use light theme"}
      variant="ghost"
    >
      {colorMode === "light" ? <FiSun /> : <FiMoon />}
    </IconButton>
  );
};

export default ToggleTheme;
