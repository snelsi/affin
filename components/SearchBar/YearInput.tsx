import * as React from "react";
import styled from "@emotion/styled";
import { NumberInput, NumberInputField } from "@chakra-ui/react";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 12px;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
  & input {
    background-color: var(--color-base-white);
    border: none;
    border-radius: 5px;
    color: var(--color-base-black);
    height: 42px;
    font-weight: normal;
    font-size: 16px;
    line-height: 1;
    width: 100px;
  }
`;

interface SearchBarProps {
  min: number;
  max: number;
  values: [number, number];
  onChange: (years: [number, number]) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ values, onChange, min, max }) => (
  <Wrapper>
    <NumberInput
      id="year-after"
      type="number"
      placeholder={String(min)}
      value={values[0]}
      onChange={(valueString) => onChange([Number(valueString), values[1]])}
      min={min}
      max={max}
      step={1}
    >
      <NumberInputField />
    </NumberInput>
    <NumberInput
      id="year-before"
      type="number"
      placeholder={String(max)}
      value={values[1]}
      onChange={(valueString) => onChange([values[0], Number(valueString)])}
      min={min}
      max={max}
      step={1}
    >
      <NumberInputField />
    </NumberInput>
  </Wrapper>
);

export default SearchBar;
