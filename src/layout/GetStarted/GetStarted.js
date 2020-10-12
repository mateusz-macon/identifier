import React from "react";
import { useTranslation } from "react-i18next";
import { TestContainer } from "./GetStarted.css";
import { FaBeer } from "react-icons/fa";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <TestContainer>
      Get Started
      {t("dog")}
      <FaBeer />
    </TestContainer>
  );
};

export default GetStarted;
