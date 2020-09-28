import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

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
    display: flex;
    flex-wrap: wrap;
    & li {
      background-color: #fff;
      border-radius: 6px;
      color: #000000;
      display: block;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 6px 12px;

      font-weight: 500;
      font-variation-settings: "wght" 500;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags, ...props }) => (
  <Wrapper data-margins {...props}>
    <h4>Ключевые слова</h4>
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </Wrapper>
);
