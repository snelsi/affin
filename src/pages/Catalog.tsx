import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  & h4 {
    margin: 12px 0 24px;
  }
`;

interface CatalogProps {}

export const Catalog: React.FC<CatalogProps> = () => {
  return (
    <>
      <Helmet>
        <title>
          Каталог - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Тут пока ничего нет</h1>
        <h4>Но в будущем скорее всего будет каталог</h4>
        <img src="funnyCats.gif" alt="Funny cats" />
      </PageWrapper>
    </>
  );
};
