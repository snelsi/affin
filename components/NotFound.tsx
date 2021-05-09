import * as React from "react";
import styled from "@emotion/styled";
import { Box, Text, useColorMode } from "@chakra-ui/react";

const Card = styled(Box)`
  background-color: var(--color-indigo-300);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  color: var(--color-base-black);
  transition: var(--transition-ease);
  padding: 24px;
  &:hover,
  &:focus-within {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  }

  &[data-theme="dark"] {
    background-color: var(--color-true-gray-800);
    color: var(--color-gray-50);

    box-shadow: 0px 8px 24px rgba(60, 60, 60, 0.12);
    &:hover,
    &:focus-within {
      box-shadow: 0px 8px 32px rgba(60, 60, 60, 0.15);
    }
  }
`;

interface NotFoundProps {}
const NotFound: React.FC<NotFoundProps> = ({ ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Card data-theme={colorMode} {...props}>
      Упс! Ничего не найдено :(
    </Card>
  );
};

export default NotFound;
