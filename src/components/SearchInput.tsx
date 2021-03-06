import * as React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useMediaQuery } from "beautiful-react-hooks";

const StyledForm = styled.form`
  & > div {
    width: 840px;
    max-width: 100%;
    border-bottom: 1px solid #222;
    position: relative;

    & input {
      background: none;
      border: none;
      font-weight: 500;
      font-variation-settings: "wght" 500;
      font-size: clamp(18px, 6vw, 24px);
      line-height: 32px;
      padding: 12px;
      width: 100%;
      padding-left: 0;
      padding-right: 0;

      &::placeholder {
        color: #777;
      }

      /* clears the 'X' from Internet Explorer */
      &[type="search"]::-ms-clear,
      &[type="search"]::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
      }

      /* clears the 'X' from Chrome */
      &[type="search"]::-webkit-search-decoration,
      &[type="search"]::-webkit-search-cancel-button,
      &[type="search"]::-webkit-search-results-button,
      &[type="search"]::-webkit-search-results-decoration {
        display: none;
      }
    }

    & .search-icon {
      position: absolute;
      border: none;
      background: none;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

interface SearchInputProps {
  initialValue?: string;
  onSubmit?: (searchString: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  initialValue = "",
  onSubmit,
  ...props
}) => {
  const [value, setValue] = React.useState<string>(initialValue?.trim());

  React.useEffect(() => {
    setValue(initialValue.trim());
  }, [initialValue]);

  const isPhone = useMediaQuery("(max-width: 480px)");

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value.trim());
      }}
      {...props}
    >
      <div>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit(value.trim());
            }
          }}
          placeholder={`Введите свой запрос${isPhone ? "" : " сюда"}`}
        />
        <button className="search-icon">
          <FiSearch />
        </button>
      </div>
    </StyledForm>
  );
};
