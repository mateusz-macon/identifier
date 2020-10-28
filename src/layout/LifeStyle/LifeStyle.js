import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./LifeStyle.css";
import { FaBeer } from "react-icons/fa";

const LifeStyle = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Container>
      <p>normalny tekst</p>
      {t("dog")}
      <FaBeer />
    </Container>
  );
};

export default LifeStyle;
