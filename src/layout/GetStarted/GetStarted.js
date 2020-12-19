import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Wrapper } from "./GetStarted.css";
import { NextButton } from "../../constants/NextButton.css";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  const [selectedLenses, setSelectedLenses] = useState(0);

  const handleClickLenses = (digit) => {
    setSelectedLenses(digit);
  };

  const handleClickButton = () => {
    if (selectedLenses <= 0) {
      setSelectedLenses(-1);
    } else {
      window.scrollTo({
        top: window.innerHeight - 0.05 * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <h1>{t("Welcome to Hoya Identifier!")}</h1>
        <p>{t("Welcome to the lens design selector!")}</p>
        <p>
          {t(
            "To get a good impression of your viewing behaviour, a number of questions will now follow."
          )}
        </p>
        <p>{t("Firstly put some id of consultation")}:</p>

        <input type="text" placeholder={t("placeholder")} />
        <p>{t("Chose lenses you want to personalize")}:</p>
        <div
          className="flexContainer"
          style={
            selectedLenses === -1
              ? {
                  animation: "border-pulsate 2s infinite",
                }
              : {}
          }
        >
          <div
            onClick={(digit) => handleClickLenses(1)}
            style={selectedLenses === 1 ? { opacity: "1 " } : {}}
          ></div>
          <div
            onClick={(digit) => handleClickLenses(2)}
            style={selectedLenses === 2 ? { opacity: "1 " } : {}}
          ></div>
          <div
            onClick={(digit) => handleClickLenses(3)}
            style={selectedLenses === 3 ? { opacity: "1 " } : {}}
          ></div>
        </div>
      </Wrapper>
      <NextButton onClick={handleClickButton}>{t("next")}</NextButton>
    </Container>
  );
};

export default GetStarted;
