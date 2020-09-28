import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  & h1 {
    margin-bottom: 20px;
  }
`;

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Helmet>
        <title>
          Ваш профиль - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper data-margins>
        <h1>Ваш Профиль</h1>
        <button onClick={() => loginWithRedirect()}>Регистрация</button>
      </PageWrapper>
    </>
  );
};
