import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

interface BookmarksProps {}

export const Bookmarks: React.FC<BookmarksProps> = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Helmet>
        <title>
          Закладки - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Закладки</h1>
        <div>
          {isAuthenticated ? (
            <div>У вас пока нет закладок</div>
          ) : (
            <div>Вы не авторизованы</div>
          )}
        </div>
      </PageWrapper>
    </>
  );
};
