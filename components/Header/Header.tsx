import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { HStack, Heading } from "@chakra-ui/react";
import ToggleTheme from "./ToggleTheme";
import Language from "./Language";

const Wrapper = styled.header`
  height: 64px;
  --unit-size: 2.25rem;

  & > .chakra-stack {
    height: inherit;
    padding: 0 clamp(15px, 4%, 30px);

    & > h2 {
      margin-right: auto;
    }
    & svg {
      height: 24px;
      width: 24px;
    }
  }

  & .header-searchbar-icon {
    margin-left: auto;
  }
`;

interface HeaderProps {
  minimal?: boolean;
}
const Header: React.FC<HeaderProps> = ({ minimal = false }) => {
  const { t } = useTranslation("common");
  return (
    <Wrapper data-minimal={minimal}>
      <HStack width="100%" spacing={6}>
        <Heading size="lg" fontSize="24px">
          <Link href="/" passHref>
            <a href="/">{t("affin")}</a>
          </Link>
        </Heading>

        <ToggleTheme />
        <Language />
      </HStack>
    </Wrapper>
  );
};

export default Header;
