import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./GetStarted.css";
import { FaBeer } from "react-icons/fa";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Container>
      <p>normalny tekst</p>
      {t("dog")}
      <FaBeer />
    </Container>
  );
};

export default GetStarted;