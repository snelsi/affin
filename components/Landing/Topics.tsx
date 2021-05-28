import * as React from "react";
import styled from "@emotion/styled";
import { useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
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

interface TopicsProps {}
const Topics: React.FC<TopicsProps> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { t } = useTranslation("common");

  const topics = React.useMemo(
    () => [
      t("Physics"),
      t("Electrical Engineering"),
      t("Information technology"),
      t("Mathematics"),
      t("Computer and Information Sciences"),
      t("Earth sciences and related environmental sciences"),
      t("History and Archaeology"),
      t("Nanotechnology"),
      t("Energy and Environmental Management"),
      t("Biological Sciences"),
      t("Economics and Business"),
    ],
    [t],
  );

  return <StyledList topics={topics} maxTags={10} trimExtra={!isMobile} data-no-wrap={isMobile} />;
};

export default Topics;
