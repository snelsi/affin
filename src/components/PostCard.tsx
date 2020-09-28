import * as React from "react";
import styled from "styled-components";

import { Highlighted } from "components";

const Card = styled.div`
  background-color: var(--surface-1-color);
  border-radius: 8px;
  border: 1px solid #eee;
  padding: min(6.25vw, 24px);
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.04);
  }

  & > .post-link {
    font-family: var(--sans-family);
    font-style: normal;
    font-weight: 400;
    font-variation-settings: "wght" 400;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 24px;

    color: #3c7bd8;

    & a {
      color: inherit;
      word-break: break-all;
      text-decoration: none;
    }
  }

  & > .post-title {
    font-size: 20px;
    line-height: 24px;
    color: #333333;

    margin-top: 24px;
    margin-bottom: 8px;
  }

  & > .post-description {
    font-size: 16px;
    line-height: 24px;
    color: #444444;
    margin-top: 8px;
    margin-bottom: 20px;
  }
  & > .post-footer {
    margin-top: 24px;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }

  & b {
    color: #000;
    font-weight: 600;
    font-variation-settings: "wght" 600;
  }
`;

interface PostCardProps {
  link: string;
  title: string;
  authors: string;
  description: string;
  year: number;
  publisher?: string;

  searchWord?: string;
  isBookmarked?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({
  link,
  title,
  authors,
  description,
  year,
  publisher,

  searchWord,
}) => {
  return (
    <Card>
      <div className="post-link">
        <a href={link} target="_blank" rel="noreferrer noopener">
          {link?.replace(/(^\w+:|^)\/\//, "")}
        </a>
      </div>
      <div className="post-title">
        {searchWord ? (
          <Highlighted text={title} highlight={searchWord} />
        ) : (
          <b>{title}</b>
        )}
      </div>
      <div className="post-authors">{authors}</div>
      <div className="post-description">
        {searchWord ? (
          <Highlighted text={description} highlight={searchWord} />
        ) : (
          description
        )}
      </div>
      <div className="post-footer">
        <span>{year}</span>
        {publisher && (
          <>
            <i />
            <span>{publisher}</span>
          </>
        )}
      </div>
    </Card>
  );
};
