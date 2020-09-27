import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useSearchParams } from "scripts/helpers";
import { SearchInput, Stats, Tags, PostCard } from "components";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

const CardsCatalog = styled.div`
  display: grid;
  gap: 24px;
  overflow-x: hidden;
  padding: 24px 0;
`;

const mockPostData = {
  link:
    "https://ru.science-encyclopedia.com/articles/usilitel_klassa_abd_dlya_hidroakkustici",
  title: "УСИЛИТЕЛЬ КЛАССА ABD ДЛЯ ГИДРОАКУСТИКИ",
  authors: "Тимошенко В. И., Тарасов С. П.",
  description:
    "частот пропускания ФНЧ. Указанное обстоятельство усугубляется при использовании усилителей с ШИМ в гидроакустике для возбуждения пьезоэлектрических излучателей, имеющих выраженную емкостную составляющую проводимости",
  year: 1982,
  publisher: "Известия Южного федерального университета. Технические науки",
};

const tags = [
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
  "Экономика и бизнес",
];

const stats = [
  {
    title: "Статей",
    value: "8482",
  },
  {
    title: "Авторов",
    value: "3421",
  },
  {
    title: "Стран",
    value: "13",
  },
  {
    title: "Годы",
    value: "1980-2016",
  },
];

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  const history = useHistory();
  const { q } = useSearchParams();

  const onSearchSubmit = (searchString: string) => {
    const searchParams = new URLSearchParams("");
    if (searchString) {
      searchParams.set("q", searchString);
    }
    const stringParams = searchParams.toString();
    history.push({
      pathname: "/search",
      search: stringParams,
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Поиск - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Поиск</h1>
        <SearchInput initialValue={q} onSubmit={onSearchSubmit} />
        <Stats stats={stats} />
        <Tags tags={tags} />
        <CardsCatalog>
          <PostCard {...mockPostData} searchWord={q} />
          <PostCard {...mockPostData} searchWord={q} />
          <PostCard {...mockPostData} searchWord={q} />
        </CardsCatalog>
      </PageWrapper>
    </>
  );
};
