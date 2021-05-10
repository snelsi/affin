import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";

import { Layout, Hero, Spinner } from "components";
import SearchBar from "components/SearchBar";
import ArticleCardsList from "components/ArticleCardsList";
import { parseQuery } from "utils/useSearchParams";
import useArticles from "utils/useArticles";
import useSearch from "utils/useSearch";

const round = (num: number) => {
  if (num < 10000) return num;
  return Math.round(num / 1000) * 1000;
};

const getTitle = (title: string | string[]): string => {
  const t = Array.isArray(title) ? title[0] : title;
  return `${t ? `${t} | ` : ""} Affin Search engine`;
};

interface SearchPageProps {}
const SearchPage: NextPage<SearchPageProps> = () => {
  const { query } = useRouter();
  const { setSearch, setActive, setFilters } = useSearch();

  React.useEffect(() => {
    const { search, ...filters } = parseQuery(query);
    const active = Object.values(filters).some((f) =>
      Array.isArray(f) ? f.length > 0 : Boolean(f),
    );

    filters.publishedAfter = filters.publishedAfter || new Date().getFullYear() - 40;
    filters.publishedBefore = filters.publishedBefore || new Date().getFullYear();

    setSearch(search);
    setActive(active);
    setFilters(filters);
  }, [query]);

  const { isLoading, error, articles, total } = useArticles();

  return (
    <Layout>
      <Head>
        <title>{getTitle(query.q)}</title>
      </Head>

      <Hero>
        <Heading as="h1" size="2xl">
          {isLoading ? (
            <>
              Loading <Spinner />
            </>
          ) : (
            <>{round(total)} Found</>
          )}
        </Heading>
        <SearchBar />
      </Hero>
      <div data-fix-width>
        <ArticleCardsList loading={isLoading} articles={articles} />
      </div>
    </Layout>
  );
};

export default SearchPage;
