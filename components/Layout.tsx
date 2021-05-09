import * as React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "./Header";

const Wrapper = styled.div`
  padding-bottom: 60px;
`;

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Wrapper>
      <Header minimal={pathname === "/"} />
      {children}
    </Wrapper>
  );
};

export default Layout;
