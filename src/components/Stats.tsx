import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 0;

  & > div {
    max-width: 100%;
    overflow-x: auto;
    & > ul {
      list-style: none;
      display: flex;
      width: fit-content;
      padding-bottom: 24px;

      & .column {
        & .column-title {
          font-weight: 400;
          font-variation-settings: "wght" 400;
          font-size: 15px;
          line-height: 20px;
          color: #21272a;
        }
        & .column-value {
          font-weight: 600;
          font-variation-settings: "wght" 600;
          font-size: 24px;
          line-height: 32px;
          color: #000000;
          white-space: nowrap;
        }

        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
`;

export interface ColumnProps {
  title: string;
  value: string | number;
}
export const Column: React.FC<ColumnProps> = ({ title, value }) => (
  <div className="column">
    <div className="column-title">{title}</div>
    <div className="column-value">{value}</div>
  </div>
);

export interface StatsProps {
  stats: ColumnProps[];
}

export const Stats: React.FC<StatsProps> = ({ stats, ...props }) => (
  <Wrapper data-block {...props}>
    <div>
      <ul data-horizontal-scroll>
        {stats?.map(({ title, value }) => (
          <Column key={title} title={title} value={value} />
        ))}
      </ul>
    </div>
  </Wrapper>
);
