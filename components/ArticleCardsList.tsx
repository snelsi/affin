import * as React from "react";
import { Stack, Fade, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import IArticle from "interfaces/IArticle";
import NotFound from "components/NotFound";
import ArticleCard, { ArticleCardPlaceholder } from "./ArticleCard";

interface ArticleCardsListProps {
  articles: IArticle[];
  loading?: boolean;
  total: number;
  fetchMore?: () => void;
  isFetchingNextPage?: boolean;
}
const ArticleCardsList: React.FC<ArticleCardsListProps> = ({
  articles,
  loading = false,
  total,
  fetchMore,
  isFetchingNextPage = false,
  ...props
}) => {
  const { t } = useTranslation("common");

  if (!articles || articles.length === 0) {
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
      {articles.map((article) => (
        <li key={article.id || `${article.title}-${article.publisher}`}>
          <Fade in>
            <ArticleCard article={article} />
          </Fade>
        </li>
      ))}
      {articles.length < total && fetchMore && (
        <Button onClick={fetchMore} isLoading={isFetchingNextPage}>
          {t("fetch more")}
        </Button>
      )}
    </Stack>
  );
};

export default ArticleCardsList;
