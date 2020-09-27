import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

interface Error404Props {}

export const Error404: React.FC<Error404Props> = () => {
  return (
    <>
      <Helmet>
        <title>Аффин, универсальный поисковик по научным публикациям</title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>
          <div>404</div>Страница не найдена
        </h1>
      </PageWrapper>
    </>
  );
};
