import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

interface RightsHoldersProps {}

export const RightsHolders: React.FC<RightsHoldersProps> = () => {
  return (
    <>
      <Helmet>
        <title>Аффин, универсальный поисковик по научным публикациям</title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Правообладателям</h1>
      </PageWrapper>
    </>
  );
};
