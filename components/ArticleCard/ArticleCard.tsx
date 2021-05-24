import * as React from "react";
import { Heading, useColorMode } from "@chakra-ui/react";
import IArticle from "interfaces/IArticle";
import { Card, Info, Divider, Description, StyledList } from "./style";
import stripHtml from "utils/stripHtml";

interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article, ...props }) => {
  const { colorMode } = useColorMode();

  const title = React.useMemo(() => stripHtml(article?.title), [article?.title]);
  const description = React.useMemo(() => stripHtml(article?.description), [article?.description]);

  if (!article) return null;
  const { authors, year, publisher, topics, downloadUrl } = article;

  return (
    <Card as="article" data-theme={colorMode} {...props}>
      <Heading as="h3" fontSize="xl">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </Heading>
      <Info>
        {authors?.length > 0 && <span>{authors.join(", ")}</span>}
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
