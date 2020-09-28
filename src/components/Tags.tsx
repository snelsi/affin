import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
      background-color: var(--surface-1-color);
      border-radius: 6px;
      border: 1px solid #eee;
      color: #000000;
      color: rgb(41, 45, 66);
      display: block;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 6px 12px;
      transition: all 0.2s ease;

      font-weight: 600;
      font-variation-settings: "wght" 600;
      font-size: 16px;
      line-height: 24px;

      &:hover {
        box-shadow: 0 5px 40px rgba(0, 0, 0, 0.04);
      }
    }
  }
`;

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags, ...props }) => (
  <Wrapper {...props}>
    <h4>Ключевые слова</h4>
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </Wrapper>
);
