import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout, Hero, ErrorCard, SearchBar } from "components";
import ArticleCardsList from "components/ArticleCardsList";
import Topics from "components/Landing/Topics";
import useHot from "utils/useHot";

const IndexPage: NextPage = () => {
  const { t } = useTranslation("common");

  const { isLoading, error, articles, total, fetchNextPage, isFetchingNextPage } = useHot();

  return (
    <Layout>
      <Head>
        <title>{t("affin search engine")}</title>
      </Head>

      <Hero>
        <Heading as="h1" size="2xl">
          {t("hello")}
        </Heading>
        <SearchBar />
        <Topics />
      </Hero>
      <div data-fix-width>
        {error && <ErrorCard error={error} />}
        <ArticleCardsList
          loading={isLoading}
          articles={articles}
          total={total}
          fetchMore={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default IndexPage;
