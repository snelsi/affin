import * as React from "react";
import { useColorMode, Skeleton, Stack } from "@chakra-ui/react";
import { Card } from "./style";

interface ArticleCardPlaceholderProps {}
const ArticleCardPlaceholder: React.FC<ArticleCardPlaceholderProps> = ({ ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Card as="div" data-theme={colorMode} {...props}>
      <Skeleton height="20px" maxW="65%" />
      <Skeleton height="16px" maxW="80%" mt="16px" />
      <Stack spacing="12px" mt="20px">
        <Skeleton height="16px" />
        <Skeleton height="16px" />
        <Skeleton height="16px" />
      </Stack>
    </Card>
  );
};

export default ArticleCardPlaceholder;
