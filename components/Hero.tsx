import * as React from "react";
import styled from "@emotion/styled";
import GradientBG from "components/GradientBG";

const Wrapper = styled.div`
  margin-bottom: -72px;
  padding: 80px 0 120px;
  position: relative;

  & .bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    opacity: 0.8;
  }

  & + div {
    position: relative;
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;

  & h1 {
    margin-bottom: 0.666em;
  }
`;

interface HeroProps {}
const Hero: React.FC<HeroProps> = ({ children }) => (
  <Wrapper>
    <GradientBG />
    <Content data-fix-width>{children}</Content>
  </Wrapper>
);

export default Hero;
