import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";

const PageWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Helmet>
        <title>Аффин, универсальный поисковик по научным публикациям</title>
      </Helmet>
      <PageWrapper data-margins>
        <button onClick={() => loginWithRedirect()}>Регистрация</button>
      </PageWrapper>
    </>
  );
};
