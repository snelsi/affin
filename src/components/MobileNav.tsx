import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: #222;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 20px 20px;
  position: sticky;
  bottom: 0;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    color: #6f6f6f;

    & svg {
      height: 24px;
      width: 24px;
    }
    &.current {
      color: #fff;
    }
  }

  @media (min-width: 719px) {
    display: none;
  }
`;

const SidebarIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 3v18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const BookIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M4 19.5A2.5 2.5 0 016.5 17H20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2v0z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const BookmarksIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
    <path
      d="M19.07 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
    <g clip-path="url(#clip0)" stroke="currentColor" stroke-width="2">
      <path
        d="M19.2 20.5V20a3.5 3.5 0 00-3.5-3.5h-7A3.5 3.5 0 005.2 20v.5M12.2 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="12.2" cy="12" r="11" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="currentColor" transform="translate(.2)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export interface MobileNavProps {}

export const MobileNav: React.FC<MobileNavProps> = () => {
  return (
    <StyledNav>
      <NavLink exact to="/" activeClassName="current">
        <SidebarIcon />
      </NavLink>
      <NavLink to="/search" activeClassName="current">
        <SearchIcon />
      </NavLink>
      <NavLink to="/catalog" activeClassName="current">
        <BookIcon />
      </NavLink>
      <NavLink to="/bookmarks" activeClassName="current">
        <BookmarksIcon />
      </NavLink>
      <NavLink to="/profile" activeClassName="current">
        <ProfileIcon />
      </NavLink>
    </StyledNav>
  );
};
