import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { Layout, Hero } from "components";
import SearchBar from "components/SearchBar";
import Topics from "components/Landing/Topics";
import ArticleCardsList from "components/ArticleCardsList";
import IArticle from "interfaces/IArticle";

const topics = [
  "Физика",
  "Электротехника",
  "электронная техника",
  "информационные технологии",
  "Математика",
  "Компьютерные и информационные науки",
  "Науки о Земле и смежные экологические науки",
  "История и археология",
  "Нанотехнологии",
  "Энергетика и рациональное природопользование",
  "Биологические науки",
  "Экономика и бизне",
];

const mockArticle: IArticle = {
  id: "1",
  title: "УСИЛИТЕЛЬ КЛАССА ABD ДЛЯ ГИДРОАКУСТИКИ",
  authors: ["Тимошенко В. И.", "Тарасов С. П."],
  year: 1982,
  publisher: "Известия Южного федерального университета",
  description:
    "Частот пропускания ФНЧ. Указанное обстоятельство усугубляется при использовании усилителей с ШИМ в гидроакустике для возбуждения пьезоэлектрических излучателей, имеющих выраженную емкостную составляющую проводимости",
  topics,
  downloadUrl:
    "https://cyberleninka.ru/article/n/efektivnist-zastosuvannya-gipolishdemnnih-zasobiv-pri-sertsevo-sudinniy-patologiyi/pdf",
};
const articles: IArticle[] = [
  {
    ...mockArticle,
    id: "1",
  },
  {
    ...mockArticle,
    id: "2",
  },
  {
    ...mockArticle,
    id: "3",
  },
];
const IndexPage: NextPage = () => (
  <Layout>
    <Head>
      <title>Affin | Search Engine</title>
    </Head>

    <Hero>
      <Heading as="h1" size="2xl">
        Hello
      </Heading>
      <SearchBar />
      <Topics />
    </Hero>
    <div data-fix-width>
      <ArticleCardsList loading={false} articles={articles} />
    </div>
  </Layout>
);

export default IndexPage;
