import * as React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { Box, useColorMode, Heading, Text } from "@chakra-ui/react";

const Card = styled(Box)`
  background-color: var(--color-red-400);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(150, 0, 0, 0.12);
  color: var(--color-base-black);
  transition: var(--transition-ease);
  padding: 24px;
  &:hover,
  &:focus-within {
    box-shadow: 0px 8px 32px rgba(150, 0, 0, 0.15);
  }
`;

interface ErrorCardProps {
  error: { response: { status: string; statusText: string } };
}
const ErrorCard: React.FC<ErrorCardProps> = ({ error, ...props }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation("common");

  if (!error?.response) return null;
  return (
    <Card data-theme={colorMode} {...props} mb="clamp(16px, 5vw, 32px)">
      <Heading size="lg" mb="16px">
        {error.response.status} | {t("something went wrong")}
      </Heading>
      <Text>{error.response.statusText}</Text>
    </Card>
  );
};

export default ErrorCard;
