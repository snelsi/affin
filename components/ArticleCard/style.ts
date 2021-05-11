import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";
import TopicsList from "components/TopicsList";

export const Card = styled(Box)`
  background-color: var(--color-base-white);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  color: var(--color-base-black);
  transition: var(--transition-ease);
  padding: 24px;
  &:hover,
  &:focus-within {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  }

  &[data-theme="dark"] {
    background-color: var(--color-true-gray-800);
    color: var(--color-gray-50);

    box-shadow: 0px 8px 24px rgba(60, 60, 60, 0.12);
    &:hover,
    &:focus-within {
      box-shadow: 0px 8px 32px rgba(60, 60, 60, 0.15);
    }

    & .chakra-tag {
      background: var(--color-gray-700);
      border: 1px solid var(--color-gray-700);
      color: var(--color-gray-100);

      &:hover,
      &:focus {
        background-color: var(--color-gray-600);
        border-color: var(--color-gray-600);
        color: var(--color-gray-100);
      }
      &:active {
        background-color: var(--color-true-gray-700);
        border-color: var(--color-true-gray-700);
        color: var(--color-gray-100);
      }
    }
  }
`;

export const Info = styled.div`
  display: block;
  color: var(--color-gray-500);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  margin: 20px 0 0;
  & span {
    display: inline;
  }
  & svg {
    display: inline-block;
    font-size: 16px;
    margin-right: 6px;
    margin-bottom: 2px;
  }
`;

export const Divider = styled.span`
  background-color: var(--color-gray-300);
  height: 8px;
  margin: 0 12px 1.5px;
  width: 1px;
  && {
    display: inline-block;
  }

  &:first-child {
    display: none;
  }
`;

export const Description = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0 0;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledList = styled(TopicsList)`
  margin-top: 20px;

  & .chakra-tag {
    background: var(--color-gray-100);
    border: 1px solid var(--color-gray-100);
    color: var(--color-gray-800);

    &:hover,
    &:focus {
      background-color: var(--color-gray-200);
      border-color: var(--color-gray-200);
      color: var(--color-gray-800);
    }
    &:active {
      background-color: var(--color-gray-300);
      border-color: var(--color-gray-300);
      color: var(--color-gray-800);
    }
  }
`;
