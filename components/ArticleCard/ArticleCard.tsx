import * as React from "react";
import { Heading, useColorMode } from "@chakra-ui/react";
import IArticle from "interfaces/IArticle";
import { Card, Info, Divider, Description, StyledList } from "./style";

interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article, ...props }) => {
  const { colorMode } = useColorMode();

  if (!article) return null;
  const { title, authors, year, publisher, description, topics, downloadUrl } = article;
  return (
    <Card as="article" data-theme={colorMode} {...props}>
      <Heading as="h3" fontSize="xl">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </Heading>
      <Info>
        <span>{authors.join(", ")}</span>
        {year && (
          <>
            <Divider />
            <span>{year}</span>
          </>
        )}
        {publisher && (
          <>
            <Divider />
            <span>{publisher}</span>
          </>
        )}
      </Info>
      {description && <Description>{description}</Description>}
      <StyledList topics={topics} maxTags={5} spacing="8px" />
    </Card>
  );
};

export default ArticleCard;
