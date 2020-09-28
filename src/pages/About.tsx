import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Helmet>
        <title>
          Про проект - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Про проект</h1>
      </PageWrapper>
    </>
  );
};
