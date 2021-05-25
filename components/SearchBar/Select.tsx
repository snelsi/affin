import React from "react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
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

interface Value {
  label: string;
  value: string;
}
interface SelectProps {
  label: React.ReactNode;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  promiseOptions?: (inputValue: string) => Promise<{ value: string; label: string }[]>;
  instanceId?: string;
  placeholder?: string;
}
const Select: React.FC<SelectProps> = ({
  label,
  isMulti = false,
  value,
  onChange,
  instanceId,
  placeholder,
  promiseOptions,
}) => {
  const { t } = useTranslation("common");

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
        placeholder={placeholder || t("select...")}
      />
    </StyledLabel>
  );
};

export default Select;
