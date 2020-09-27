import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FiSearch, FiBookmark, FiUser } from "react-icons/fi";

const StyledHeader = styled.header`
  background-color: #222222;
  color: #f2f2f2;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;

    & .title {
      font-style: normal;
      font-weight: 500;
      font-variation-settings: "wght" 500;
      font-size: 18px;
      line-height: 22px;

      color: #ffffff;

      & a {
        color: inherit;
        text-decoration: none;
      }
    }

    & nav {
      display: flex;
      align-items: center;

      & .header-link {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        color: #f2f2f2;

        text-decoration: none;
        transition: all 0.2s ease-out;
        height: 40px;
        width: 40px;
        outline: none;

        margin: 0 2px;

        &:hover,
        &:focus {
          background-color: #444;
        }
        &:active {
          background-color: #333;
        }
        & svg {
          height: 24px;
          width: 24px;
        }
      }
      & .login-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        margin-left: clamp(8px, 2.5vw, 30px);

        text-decoration: none;
        transition: all 0.2s ease-out;
        background: #444444;
        border-radius: 4px;
        color: #f2f2f2;
        & svg {
          margin-right: 8px;
          height: 20px;
          width: 20px;
        }

        &:hover,
        &:focus {
          background-color: #555;
        }
        &:active {
          background-color: #444;
        }
      }
    }
  }
`;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <div data-margins>
        <div className="title">
          <Link to="/">Аффин</Link>
        </div>
        <nav>
          <Link to="search" className="header-link">
            <FiSearch />
          </Link>
          <Link to="bookmarks" className="header-link">
            <FiBookmark />
          </Link>
          <Link to="login" className="login-button">
            <FiUser />
            Войти
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
};
