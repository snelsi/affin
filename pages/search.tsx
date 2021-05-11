import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout, Hero, Spinner, ErrorCard, SearchBar } from "components";
import ArticleCardsList from "components/ArticleCardsList";
import { parseQuery } from "utils/useSearchParams";
import useArticles from "utils/useArticles";
import useSearch from "utils/useSearch";

const round = (num: number) => {
  if (num < 10000) return num;
  return Math.round(num / 1000) * 1000;
};

interface SearchPageProps {}
const SearchPage: NextPage<SearchPageProps> = () => {
  const { query } = useRouter();
  const { setSearch, setActive, setFilters } = useSearch();
  const { t } = useTranslation("common");

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

  const title = Array.isArray(query.q) ? query.q[0] : query.q;

  return (
    <Layout>
      <Head>
        <title>{t("affin search engine title", { title: title ? `${title} | ` : "" })}</title>
      </Head>

      <Hero>
        <Heading as="h1" size="2xl">
          {isLoading ? (
            <>
              {t("loading")} <Spinner />
            </>
          ) : (
            <>{t("found", { amount: round(total) })}</>
          )}
        </Heading>
        <SearchBar />
      </Hero>
      <div data-fix-width>
        {error && <ErrorCard error={error} />}
        <ArticleCardsList loading={isLoading} articles={articles} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default SearchPage;
