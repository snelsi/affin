import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import {
  Box,
  Heading,
  Text,
  useColorMode,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import useSearch from "utils/useSearch";
import { FiHome, FiRefreshCcw } from "react-icons/fi";

const Card = styled(Box)`
  background-color: var(--color-blue-gray-200);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  color: var(--color-base-black);
  transition: var(--transition-ease);
  margin-bottom: clamp(16px, 5vw, 32px);
  padding: 24px;
  &:hover,
  &:focus-within {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  }

  & .actions {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 100%;

    & > * {
      min-width: 120px;
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
    @media (max-width: 600px) {
      & > * {
        flex: 1;
      }
    }
    @media (max-width: 320px) {
      flex-direction: column;
      & > *:not(:last-child) {
        margin-right: 0;
        margin-top: 16px;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &[data-theme="dark"] {
    background-color: var(--color-true-gray-800);
    color: var(--color-gray-50);

    box-shadow: 0px 8px 24px rgba(60, 60, 60, 0.12);
    &:hover,
    &:focus-within {
      box-shadow: 0px 8px 32px rgba(60, 60, 60, 0.15);
    }
  }
`;

interface NotFoundProps {}
const NotFound: React.FC<NotFoundProps> = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation("common");
  const { resetFilters } = useSearch();

  return (
    <Card data-theme={colorMode} {...props}>
      <Heading size="lg" mb="16px">
        {t("nothing found")}
      </Heading>
      <Text mb="16px">{t("no results containing your search")}</Text>

      <UnorderedList mb="24px">
        <ListItem>{t("make sure that all words are spelled correctly")}</ListItem>
        <ListItem>{t("try different keywords")}</ListItem>
        <ListItem>{t("try more general keywords")}</ListItem>
        <ListItem>{t("try fewer keywords")}</ListItem>
      </UnorderedList>

      <div className="actions">
        <Link href="/" passHref>
          <Button as="a" leftIcon={<FiHome />}>
            {t("home")}
          </Button>
        </Link>
        <Button onClick={resetFilters} leftIcon={<FiRefreshCcw />}>
          {t("reset")}
        </Button>
      </div>
    </Card>
  );
};

export default NotFound;
