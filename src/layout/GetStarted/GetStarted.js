import React from "react";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  HorizontalNavContainer,
  VerticalNavContainer,
  MainContainer,
  Logo,
  ButtonsContainer,
} from "./GetStarted.css";
import { FaBeer } from "react-icons/fa";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Wrapper>
      <HorizontalNavContainer>
        <Logo></Logo>
        <ButtonsContainer>
          <button>new consultation</button>
          <button>load data</button>
          <button>settings</button>
          <button>log out</button>
          <button>language: </button>
        </ButtonsContainer>
      </HorizontalNavContainer>
      <VerticalNavContainer>
        <div>Get started</div>
        <div>Life style</div>
        <div>Prescript</div>
        <div>Frame</div>
        <div>Order</div>
      </VerticalNavContainer>
      <MainContainer>
        <p>normalny tekst</p>
        {t("dog")}
        <FaBeer />
      </MainContainer>
    </Wrapper>
  );
};

export default GetStarted;
