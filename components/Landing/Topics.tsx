import * as React from "react";
import styled from "@emotion/styled";
import { useBreakpointValue } from "@chakra-ui/react";
import TopicsList from "../TopicsList";

const StyledList = styled(TopicsList)`
  margin-top: 48px;

  & .chakra-tag {
    background: var(--color-purple-50);
    border: 1px solid var(--color-purple-100);
    color: var(--color-gray-800);

    &:hover,
    &:focus {
      background-color: var(--color-purple-200);
      border-color: var(--color-purple-200);
      color: var(--color-gray-800);
    }
    &:active {
      background-color: var(--color-purple-300);
      border-color: var(--color-purple-300);
      color: var(--color-gray-800);
    }
  }
`;

const topics = [
  "Физика",
  "Электротехника",
  "электронная техника",
  "информационные технологии",
  "Математика",
  "Компьютерные и информационные науки",
  "Науки о Земле и смежные экологические науки",
  "История и археология",
  "Нанотехнологии",
  "Энергетика и рациональное природопользование",
  "Биологические науки",
  "Экономика и бизнеc",
];

interface TopicsProps {}
const Topics: React.FC<TopicsProps> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return <StyledList topics={topics} maxTags={10} trimExtra={!isMobile} data-no-wrap={isMobile} />;
};

export default Topics;
