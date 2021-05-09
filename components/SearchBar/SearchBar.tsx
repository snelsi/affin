import * as React from "react";
import styled from "@emotion/styled";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Tooltip,
  Collapse,
} from "@chakra-ui/react";
import { FiSearch, FiFilter } from "react-icons/fi";
import useSearch from "utils/useSearch";
import Filters from "./Filters";

const StyledForm = styled.form`
  & > div.search-input {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 12px;
    --height: 60px;

    @media (max-width: 540px) {
      grid-template-columns: minmax(0, 1fr);
      --height: 48px;
      & button {
        width: 100%;
      }
    }
  }
`;

const StyledInputGroup = styled(InputGroup)`
  background-color: var(--color-base-white);
  border: none;
  border-radius: 5px;
  height: var(--height);
  & input.chakra-input {
    background: transparent;
    border: 0;
    border-radius: inherit;
    box-shadow: none;
    color: var(--color-gray-900);
    font-size: 18px;
    font-weight: 400;
    height: inherit;
    line-height: 1.5;
    padding: 8px 56px;
    width: 100%;
    &::placeholder {
      color: var(--color-gray-400);
      opacity: 1;
      transition: var(--transition-ease);
    }

    &:hover,
    &:focus {
      border: 0;
      box-shadow: none;
    }
  }
  & .chakra-input__left-element {
    color: var(--color-gray-400);
    height: auto;
    margin: calc((var(--height) - 24px) / 2) 0;
    font-size: 22px;
    left: 16px;
    width: 24px;
  }
  & .chakra-input__right-element {
    color: var(--color-gray-400);
    height: auto;
    font-size: 18px;
    margin: calc((var(--height) - 32px) / 2) 0;
    right: 16px;
    height: 32px;
    width: 32px;
    z-index: 2;
    & button {
      background-color: var(--color-cool-gray-200);
      color: var(--color-cool-gray-500);
      height: inherit;
      width: inherit;
      min-height: 0;
      min-width: 0;
      padding: 0;

      &[data-active="true"] {
        background-color: var(--color-green-400);
        color: var(--color-gray-50);
      }
    }
  }

  &:hover,
  &:focus-within {
    & .chakra-input__left-element {
      color: var(--color-blue-500);
    }
  }
`;

const SubmitButton = styled(Button)`
  background-color: var(--color-base-black);
  color: var(--color-base-white);
  height: var(--height);
  min-width: 120px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  &:hover,
  &:focus {
    background-color: var(--color-gray-800);
    color: var(--color-base-white);
  }
  &:active {
    background-color: var(--color-gray-700);
    color: var(--color-base-white);
  }
`;

interface SearchBarProps {}
const SearchBar: React.FC<SearchBarProps> = () => {
  const { search, setSearch, active, setActive, searchArticles } = useSearch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    searchArticles();
  };

  const toggleAdvancedOptions = (e) => {
    e?.stopPropagation();
    setActive((prev) => !prev);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="search-input">
        <StyledInputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch />
          </InputLeftElement>
          <Input
            id="search-input"
            type="search"
            placeholder="Search for articles..."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            spellCheck="false"
            aria-autocomplete="list"
            autoComplete="off"
          />
          <InputRightElement>
            <Tooltip label="Advanced options" aria-label="Advanced options" placement="top">
              <Button
                onClick={toggleAdvancedOptions}
                aria-label="Advanced options"
                type="button"
                data-active={active}
              >
                <FiFilter />
              </Button>
            </Tooltip>
          </InputRightElement>
        </StyledInputGroup>
        <SubmitButton type="submit">Search</SubmitButton>
      </div>
      <Collapse in={active} animateOpacity>
        <Filters />
      </Collapse>
    </StyledForm>
  );
};

export default SearchBar;
