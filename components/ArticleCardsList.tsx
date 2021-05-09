import * as React from "react";
import { Stack } from "@chakra-ui/react";
import IArticle from "interfaces/IArticle";
import NotFound from "components/NotFound";
import ArticleCard from "./ArticleCard";

interface ArticleCardsListProps {
  articles: IArticle[];
  loading?: boolean;
}
const ArticleCardsList: React.FC<ArticleCardsListProps> = ({
  articles: cards,
  loading = false,
  ...props
}) => {
  if (!cards || cards.length === 0) return loading ? null : <NotFound />;
  return (
    <Stack spacing={8} as="ul" {...props}>
      {cards.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </Stack>
  );
};

export default ArticleCardsList;
