import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SearchInput, Stats } from "components";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

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

export const App = () => {
  const history = useHistory();

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
        <title>Аффин, универсальный поисковик по научным публикациям</title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Привет</h1>
        <SearchInput onSubmit={onSearchSubmit} />
        <Stats stats={stats} />
      </PageWrapper>
    </>
  );
};
