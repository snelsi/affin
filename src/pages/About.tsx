import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const PageWrapper = styled.div`
  padding-bottom: 64px;
`;

const Banner = styled.div`
  background-color: var(--surface-3-color);
  height: min(25vh, 240px);
  picture {
    height: 100%;
    width: 100%;
  }
  & img {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Helmet>
        <title>
          О проекте - Аффин, универсальный поисковик по научным публикациям
        </title>
      </Helmet>
      <PageWrapper>
        <Banner>
          <picture>
            <source srcSet="Athena-wide.jpg" media="(min-width: 600px)" />
            <img
              src="Athena.jpg"
              alt="Аффина Паллада - богиня наук, мудрости, военной стратегии и тактики в древней Греции"
            />
          </picture>
        </Banner>
        <div data-block>
          <div data-margins>
            <h1>О проекте</h1>
            <p>
              Аффин - это lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Faucibus enim at nulla orci, mollis lacinia. Ac elit
              pellentesque velit donec nibh posuere.
            </p>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
