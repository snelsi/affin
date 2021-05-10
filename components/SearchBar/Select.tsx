import React from "react";
import styled from "@emotion/styled";

import AsyncCreatableSelect from "react-select/async-creatable";

/* background-color: var(--color-input-bg); */
/* color: var(--color-input-color); */
/* color: var(--color-label); */

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

interface Value {
  label: string;
  value: string;
}
interface SelectProps {
  label: React.ReactNode;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  instanceId?: string;
}
const Select: React.FC<SelectProps> = ({ label, isMulti = false, value, onChange, instanceId }) => {
  let v: Value | Value[] = null;
  if (isMulti && Array.isArray(value)) {
    v = value.map((v) => ({ label: v, value: v }));
  } else {
    if (Array.isArray(value)) {
      v = { label: value[0], value: value[0] };
    } else if (value) {
      v = { label: value, value: value };
    }
  }

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
        value={v}
        onChange={(v: Value | Value[] | null) => {
          const selected = Array.isArray(v) ? v.map((v) => v.value) : v?.value;
          onChange(selected);
        }}
        instanceId={instanceId}
      />
    </StyledLabel>
  );
};

export default Select;
