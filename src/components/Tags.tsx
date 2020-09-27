import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 32px 0;
  & h4 {
    font-style: normal;
    font-weight: 600;
    font-variation-settings: "wght" 600;
    font-size: 22px;
    line-height: 27px;

    color: #000000;
    margin-bottom: 16px;
  }
  & ul {
    font-size: 18px;
    line-height: 1.5;
    list-style: none;
    color: #000000;
    & li {
      display: inline-block;
      margin-right: 6px;
      & .comma {
        display: inline-block;
      }
      &:last-child {
        & .comma {
          display: none;
        }
      }
    }
  }
`;

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => (
  <Wrapper>
    <h4>Ключевые слова</h4>
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          {tag}
          <span className="comma">, </span>
        </li>
      ))}
    </ul>
  </Wrapper>
);
