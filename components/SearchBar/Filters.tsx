import * as React from "react";
import styled from "@emotion/styled";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import useSearch from "utils/useSearch";
import Select from "./Select";
import Year from "./Year";

const Card = styled(Box)`
  background-color: var(--color-violet-50);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  transition: var(--transition-ease);
  margin-top: 48px;
  padding: 24px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:focus-within {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  }

  &[data-theme="dark"] {
    background-color: var(--color-violet-50);

    box-shadow: 0px 8px 24px rgba(60, 60, 60, 0.12);
    &:hover,
    &:focus-within {
      box-shadow: 0px 8px 32px rgba(60, 60, 60, 0.15);
    }
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
  & button {
    border: none;
    border-radius: 5px;
    height: 42px;
    min-width: 140px;
    &.secondary {
      background-color: var(--color-violet-100);
      color: var(--color-gray-800);
      &:hover,
      &:focus {
        background-color: var(--color-violet-200);
      }
      &:active {
        background-color: var(--color-violet-300);
      }
    }
    &.primary {
      background-color: var(--color-green-400);
      color: var(--color-base-white);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      &:hover,
      &:focus {
        background-color: var(--color-green-500);
      }
      &:active {
        background-color: var(--color-green-600);
      }
    }
  }
`;

interface FiltersProps {}
const Filters: React.FC<FiltersProps> = () => {
  const { filters, setFilters, searchArticles } = useSearch();
  const { colorMode } = useColorMode();

  const handleChange = (name: string, value: string | number) =>
    setFilters((prev) => ({ ...prev, [name]: value }));

  const resetChanges = () =>
    setFilters({
      authors: null,
      publishers: null,
      publishedAfter: null,
      publishedBefore: null,
    });
  const applyChanges = () => searchArticles();

  return (
    <Card data-theme={colorMode}>
      <Select
        label="Authors"
        isMulti
        value={filters.authors || []}
        onChange={(value) => handleChange("authors", value)}
      />
      <Select
        label="Publisher"
        value={filters.publishers}
        onChange={(value) => handleChange("publishers", value)}
      />
      <Year
        value={[
          filters.publishedAfter || new Date().getFullYear() - 40,
          filters.publishedBefore || new Date().getFullYear(),
        ]}
        onChange={(years) => {
          handleChange("publishedAfter", years[0]);
          handleChange("publishedBefore", years[1]);
        }}
        label="Year"
      />

      <Actions>
        <Button type="button" className="secondary" onClick={resetChanges}>
          Reset
        </Button>
        <Button type="button" className="primary" onClick={applyChanges}>
          Apply
        </Button>
      </Actions>
    </Card>
  );
};

export default Filters;