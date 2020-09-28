import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    & > .links {
      margin-bottom: 20px;
    }
  }

  & > .copyright {
    & > span {
      white-space: nowrap;
    }
  }
  & > .links {
    display: flex;
    flex-wrap: wrap;
    & a {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-variation-settings: "wght" 400;
      font-size: 16px;
      line-height: 20px;

      color: #444444;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = React.memo(() => (
  <StyledFooter data-margins>
    <div className="copyright">
      Проект “Аффин” 2020 © <span>Все права защищены</span>
    </div>
    <div className="links">
      <Link to="/about">Про проект</Link>
      <a
        href="https://github.com/snelsi/affin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Исходный код
      </a>
      <Link to="/to-right-holders">Правообладателям</Link>
    </div>
  </StyledFooter>
));
