import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Wrapper, NextButton } from "./GetStarted.css";

const GetStarted = () => {
  const { t } = useTranslation(["translation"]);
  const [selectedLenses, setSelectedLenses] = useState(0);

  const handleClickLenses = (digit) => {
    setSelectedLenses(digit);
  };

  const handleClickButton = () => {
    window.scrollTo({
      top: window.innerHeight - 0.05 * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Wrapper>
        <h1>{t("Welcome to Hoya Identifier!")}</h1>
        <p>Welcome to the lens design selector!</p>
        <p>
          To get a good impression of your viewing behaviour, a number of
          questions will now follow.
        </p>
        <p>Firstly put some id of consultation:</p>

        <input type="text" placeholder="Consultation ID" />
        <p>Chose lenses you want to personalize:</p>
        <div className="flexcontainer">
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
      <NextButton onClick={handleClickButton}>next</NextButton>
    </Container>
  );
};

export default GetStarted;
