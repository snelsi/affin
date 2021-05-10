import * as React from "react";
import styled from "@emotion/styled";
import GradientBG from "components/GradientBG";

const Wrapper = styled.div`
  margin-bottom: clamp(-72px, -5vw, -36px);
  padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 10vw, 120px);
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
    align-items: center;
    color: var(--chakra-colors-gray-800);
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 0.666em;
    & svg {
      margin-left: 0.5em;
      height: 0.8em;
      width: 0.8em;
    }
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
