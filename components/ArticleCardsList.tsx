import * as React from "react";
import { Stack, Fade } from "@chakra-ui/react";
import IArticle from "interfaces/IArticle";
import NotFound from "components/NotFound";
import ArticleCard, { ArticleCardPlaceholder } from "./ArticleCard";

interface ArticleCardsListProps {
  articles: IArticle[];
  loading?: boolean;
}
const ArticleCardsList: React.FC<ArticleCardsListProps> = ({
  articles: cards,
  loading = false,
  ...props
}) => {
  if (!cards || cards.length === 0) {
    if (loading) {
      return (
        <Stack spacing="clamp(16px, 5vw, 32px)" {...props}>
          <ArticleCardPlaceholder />
          <ArticleCardPlaceholder />
          <ArticleCardPlaceholder />
        </Stack>
      );
    }
    return <NotFound />;
  }

  return (
    <Stack spacing="clamp(16px, 5vw, 32px)" as="ul" {...props}>
      {cards.map((article) => (
        <li key={article.id || `${article.title}-${article.publisher}`}>
          <Fade in>
            <ArticleCard article={article} />
          </Fade>
        </li>
      ))}
    </Stack>
  );
};

export default ArticleCardsList;
