import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Wrapper } from "./Order.css";
import { FaBeer } from "react-icons/fa";

const Order = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Order;
