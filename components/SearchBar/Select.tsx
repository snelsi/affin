import React from "react";
import styled from "@emotion/styled";

import AsyncCreatableSelect from "react-select/async-creatable";

const StyledLabel = styled.label`
  display: block;
  & .react-select__control {
    background-color: var(--color-base-white);
    border: none;
    border-radius: 5px;
    color: var(--color-base-black);
    height: 42px;
    font-weight: normal;
    font-size: 16px;
    line-height: 1;
  }
`;
const LabelTitle = styled.div`
  color: var(--color-gray-600);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  margin-bottom: 12px;
`;

const colourOptions = [];

const filterColors = (inputValue: string) =>
  colourOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const promiseOptions = (inputValue: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

interface SelectProps {
  label: React.ReactNode;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string) => void;
}
const Select: React.FC<SelectProps> = ({ label, isMulti = false, value, onChange }) => {
  return (
    <StyledLabel>
      <LabelTitle>{label}</LabelTitle>
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        classNamePrefix="react-select"
        allowCreateWhileLoading
        formatCreateLabel={(inputValue: any) => inputValue}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
  );
};

export default Select;
