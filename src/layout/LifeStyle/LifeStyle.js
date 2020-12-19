import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Wrapper,
  CircleButton,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  FifthContainer,
  SixthContainer,
} from "./LifeStyle.css";
import { NextButton } from "../../constants/NextButton.css";
import { AiOutlineHome } from "react-icons/ai";
import { GiTreeGrowth } from "react-icons/gi";

const LifeStyle = () => {
  const handleClickButton = () => {
    if (selectedAge === 0) {
      setSelectedAge(-1);
    }
    if (selectedTimeSpend === 0) {
      setSelectedTimeSpend(-1);
    }
    if (selectedDistance === 0) {
      setSelectedDistance(-1);
    }
    if (selectedDeviceRead === 0) {
      setSelectedDeviceRead(-1);
    }
    if (selectedDevice === 0) {
      setSelectedDevice(-1);
    }
    if (selectedDrive === 0) {
      setSelectedDrive(-1);
    }
    if (selectedActivity === 0) {
      setSelectedActivity(-1);
    }

    if (
      selectedAge > 0 &&
      selectedTimeSpend > 0 &&
      selectedDistance > 0 &&
      selectedDeviceRead > 0 &&
      selectedDevice > 0 &&
      selectedDrive > 0 &&
      selectedActivity > 0
    ) {
      window.scrollTo({
        top: 2 * window.innerHeight - 0.05 * window.innerHeight * 2,
        behavior: "smooth",
      });
    }
  };
  const { t } = useTranslation(["translation"]);

  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedTimeSpend, setSelectedTimeSpend] = useState(0);
  const [selectedDistance, setSelectedDistance] = useState(0);
  const [selectedDeviceRead, setSelectedDeviceRead] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState(0);
  const [selectedDrive, setSelectedDrive] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);

  const handleClickAge = (digit) => {
    setSelectedAge(digit);
  };
  const handleClickTimeSpend = (digit) => {
    setSelectedTimeSpend(digit);
  };
  const handleClickDistance = (digit) => {
    setSelectedDistance(digit);
  };
  const handleClickDeviceRead = (digit) => {
    setSelectedDeviceRead(digit);
  };
  const handleClickDevice = (digit) => {
    setSelectedDevice(digit);
  };
  const handleClickDrive = (digit) => {
    setSelectedDrive(digit);
  };
  const handleClickActivity = (digit) => {
    setSelectedActivity(digit);
  };

  const pushedButton = {
    backgroundColor: "#6f6259",
    color: "white",
  };
  return (
    <Container>
      <h1>Answer a questions about your lifestyle!</h1>
      <Wrapper>
        <FirstContainer>
          <div
            style={
              selectedAge === -1
                ? { animation: "border-pulsate 2s infinite" }
                : {}
            }
          >
            <p>Age: </p>
            <CircleButton
              onClick={(digit) => handleClickAge(1)}
              style={selectedAge === 1 ? pushedButton : {}}
            >
              0-18
            </CircleButton>
            <CircleButton
              onClick={(digit) => handleClickAge(2)}
              style={selectedAge === 2 ? pushedButton : {}}
            >
              19-25
            </CircleButton>
            <CircleButton
              onClick={(digit) => handleClickAge(3)}
              style={selectedAge === 3 ? pushedButton : {}}
            >
              26-43
            </CircleButton>
            <CircleButton
              onClick={(digit) => handleClickAge(4)}
              style={selectedAge === 4 ? pushedButton : {}}
            >
              44-50
            </CircleButton>
            <CircleButton
              onClick={(digit) => handleClickAge(5)}
              style={selectedAge === 5 ? pushedButton : {}}
            >
              51+
            </CircleButton>
          </div>
          <div
            style={
              selectedTimeSpend === -1
                ? { animation: "border-pulsate 2s infinite" }
                : {}
            }
          >
            <p>Mostly spend time: </p>
            <div
              onClick={(digit) => handleClickTimeSpend(1)}
              style={selectedTimeSpend === 1 ? pushedButton : {}}
            >
              <p>
                <AiOutlineHome />
              </p>
              <p>Indoor</p>
            </div>
            <div
              onClick={(digit) => handleClickTimeSpend(2)}
              style={selectedTimeSpend === 2 ? pushedButton : {}}
            >
              <p>
                <GiTreeGrowth />
              </p>
              <p>Outdoor</p>
            </div>
            <div
              onClick={(digit) => handleClickTimeSpend(3)}
              style={selectedTimeSpend === 3 ? pushedButton : {}}
            >
              <p>1/1</p>
              <p>Both</p>
            </div>
          </div>
        </FirstContainer>

        <SecondContainer
          style={
            selectedDistance === -1
              ? { animation: "border-pulsate 2s infinite" }
              : {}
          }
        >
          <div>
            <p>Distance you most focus during day:</p>
          </div>
          <div
            onClick={(digit) => handleClickDistance(1)}
            style={selectedDistance === 1 ? pushedButton : {}}
          >
            Near
          </div>
          <div
            onClick={(digit) => handleClickDistance(2)}
            style={selectedDistance === 2 ? pushedButton : {}}
          >
            Near-Intermediate
          </div>
          <div
            onClick={(digit) => handleClickDistance(3)}
            style={selectedDistance === 3 ? pushedButton : {}}
          >
            Intermediate
          </div>
          <div
            onClick={(digit) => handleClickDistance(4)}
            style={selectedDistance === 4 ? pushedButton : {}}
          >
            Intermidiate-far
          </div>
          <div
            onClick={(digit) => handleClickDistance(5)}
            style={selectedDistance === 5 ? pushedButton : {}}
          >
            Far
          </div>
        </SecondContainer>
        <ThirdContainer
          style={
            selectedDeviceRead === -1
              ? { animation: "border-pulsate 2s infinite" }
              : {}
          }
        >
          <div>
            <p>device you read most:</p>
          </div>
          <div
            onClick={(digit) => handleClickDeviceRead(1)}
            style={selectedDeviceRead === 1 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickDeviceRead(2)}
            style={selectedDeviceRead === 2 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickDeviceRead(3)}
            style={selectedDeviceRead === 3 ? pushedButton : {}}
          ></div>
        </ThirdContainer>
        <FourthContainer
          style={
            selectedDevice === -1
              ? { animation: "border-pulsate 2s infinite" }
              : {}
          }
        >
          <div>
            <p>device you spend most of your time:</p>
          </div>
          <div
            onClick={(digit) => handleClickDevice(1)}
            style={selectedDevice === 1 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickDevice(2)}
            style={selectedDevice === 2 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickDevice(3)}
            style={selectedDevice === 3 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickDevice(4)}
            style={selectedDevice === 4 ? pushedButton : {}}
          ></div>
        </FourthContainer>
        <FifthContainer
          style={
            selectedDrive === -1
              ? { animation: "border-pulsate 2s infinite" }
              : {}
          }
        >
          <div>
            <p>How often do you drive:</p>
          </div>
          <div
            onClick={(digit) => handleClickDrive(1)}
            style={selectedDrive === 1 ? pushedButton : {}}
          >
            Rarely
          </div>
          <div
            onClick={(digit) => handleClickDrive(2)}
            style={selectedDrive === 2 ? pushedButton : {}}
          >
            Once a week
          </div>
          <div
            onClick={(digit) => handleClickDrive(3)}
            style={selectedDrive === 3 ? pushedButton : {}}
          >
            Several times a week
          </div>
          <div
            onClick={(digit) => handleClickDrive(4)}
            style={selectedDrive === 4 ? pushedButton : {}}
          >
            Daily
          </div>
        </FifthContainer>
        <SixthContainer
          style={
            selectedActivity === -1
              ? { animation: "border-pulsate 2s infinite" }
              : {}
          }
        >
          <div>
            <p>regular activity :</p>
          </div>
          <div
            onClick={(digit) => handleClickActivity(1)}
            style={selectedActivity === 1 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(2)}
            style={selectedActivity === 2 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(3)}
            style={selectedActivity === 3 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(4)}
            style={selectedActivity === 4 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(5)}
            style={selectedActivity === 5 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(6)}
            style={selectedActivity === 6 ? pushedButton : {}}
          ></div>
          <div
            onClick={(digit) => handleClickActivity(7)}
            style={selectedActivity === 7 ? pushedButton : {}}
          ></div>
        </SixthContainer>
      </Wrapper>
      <NextButton onClick={handleClickButton}>{t("next")}</NextButton>
    </Container>
  );
};

export default LifeStyle;
