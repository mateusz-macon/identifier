import React from "react";
import { useTranslation } from "react-i18next";
import { TestContainer } from "./GetStarted.css";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <TestContainer>
      Get Started
      {t("dog")}
    </TestContainer>
  );
};

export default GetStarted;
