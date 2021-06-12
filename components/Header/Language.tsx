import * as React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Menu, IconButton, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";

const prettyLocale = (locale: string) => {
  if (locale === "en") return "🇬🇧 eng";
  if (locale === "ru") return "🇷🇺 rus";
  if (locale === "uk") return "🇺🇦 ukr";
  return locale;
};

interface LanguageProps {}
const Language: React.FC<LanguageProps> = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const { locale, locales } = router;

  const handleLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(router.asPath, router.asPath, { locale: newLocale });
    }
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FiGlobe />}
        aria-label={t("change locale")}
        variant="ghost"
      />
      <MenuList minW="92px" zIndex={100}>
        {locales.map((locale) => (
          <MenuItem key={locale} onClick={() => handleLocale(locale)} textTransform="capitalize">
            {prettyLocale(locale)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Language;
