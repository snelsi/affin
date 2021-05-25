import * as React from "react";
import Link from "next/link";
import { Heading, useColorMode } from "@chakra-ui/react";
import IArticle from "interfaces/IArticle";
import { Card, Info, Divider, Description, StyledList } from "./style";
import stripHtml from "utils/stripHtml";

const trim = (text: string): string => (text ? text.trim().replace(/(^['"]+)|(['"]+$)/gm, "") : "");

const useParams = (article: IArticle): IArticle =>
  React.useMemo(
    () =>
      article
        ? {
            ...article,
            authors: article.authors?.map(trim),
            publisher: trim(article.publisher),
            topics: article.topics?.map(trim),
          }
        : article,
    [article],
  );

interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article, ...props }) => {
  const { colorMode } = useColorMode();

  const title = React.useMemo(() => stripHtml(article?.title), [article?.title]);
  const description = React.useMemo(() => stripHtml(article?.description), [article?.description]);

  const { authors, year, publisher, topics, downloadUrl } = useParams(article) || {};
  if (!article) return null;

  return (
    <Card as="article" data-theme={colorMode} {...props}>
      <Heading as="h3" fontSize="xl">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </Heading>
      <Info className="info">
        {authors?.length > 0 && <span>{authors.join(", ")}</span>}
        {year && (
          <>
            <Divider />
            <Link href={`/search?publishedAfter=${year}&publishedBefore=${year}`} passHref>
              <a>{year}</a>
            </Link>
          </>
        )}
        {publisher && (
          <>
            <Divider />
            <Link href={`/search?publishers=${encodeURIComponent(publisher)}`} passHref>
              <a>{publisher}</a>
            </Link>
          </>
        )}
      </Info>
      {description && <Description>{description}</Description>}
      <StyledList topics={topics} maxTags={5} spacing="8px" />
    </Card>
  );
};

export default ArticleCard;
