import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper, MainContainer } from "./GetStarted.css";
import { FaBeer } from "react-icons/fa";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Wrapper>
      <MainContainer>
        <p>normalny tekst</p>
        {t("dog")}
        <FaBeer />
      </MainContainer>
    </Wrapper>
  );
};

export default GetStarted;
