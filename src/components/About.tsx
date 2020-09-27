import * as React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <p>Проект Аффин - онлайн поисковик по </p>
    </div>
  );
};
