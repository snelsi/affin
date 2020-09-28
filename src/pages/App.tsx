import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SearchInput, Stats } from "components";

const PageWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  width: 100%;
  overflow-x: hidden;

  & > div {
    background-color: var(--surface-3-color);

    & h1 {
      margin-bottom: 20px;
    }
  }
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
      <PageWrapper>
        <div>
          <div data-block>
            <div data-margins>
              <h1>Привет</h1>
              <SearchInput onSubmit={onSearchSubmit} />
            </div>
          </div>
          <Stats stats={stats} />
        </div>
      </PageWrapper>
    </>
  );
};
