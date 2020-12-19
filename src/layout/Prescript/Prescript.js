import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Wrapper } from "./Prescript.css";
import { LeftColumn } from "./LeftColumn.css";
import { RightColumn } from "./RightColumn.css";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { NextButton } from "../../constants/NextButton.css";
import Switch from "react-switch";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const Prescript = () => {
  const { t } = useTranslation(["translation"]);
  const handleClickButton = () => {
    if (lensType === "Progressive" && satisfaction <= 0) {
      setSatisfaction(-1);
    } else {
      window.scrollTo({
        top: 3 * window.innerHeight - 0.05 * window.innerHeight * 3,
        behavior: "smooth",
      });
    }
  };
  const [lensType, setLensType] = useState("Progressive");
  const [nearDistance, setnearDistance] = useState(40);
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfactionWord, setSatisfactionWord] = useState("Not selected");
  const [addition, setAddition] = useState(false);
  const handleSlider = (event) => {
    setnearDistance(event.target.value);
  };

  const handleLensTypeChange = (event) => {
    setLensType(event.target.value);
    if (lensType !== "Progressive") {
      setSatisfaction(0);
    }
  };

  const handleStarClick = (digit) => {
    if (digit === 1) {
      setSatisfaction(1);
      setSatisfactionWord("Very unsatisfied");
    } else if (digit === 2) {
      setSatisfaction(2);
      setSatisfactionWord("Not satisfied");
    } else if (digit === 3) {
      setSatisfaction(3);
      setSatisfactionWord("Neutral");
    } else if (digit === 4) {
      setSatisfaction(4);
      setSatisfactionWord("Satisfied");
    } else if (digit === 5) {
      setSatisfaction(5);
      setSatisfactionWord("Very satisfied");
    }
  };

  const handleSwitchChange = () => {
    setAddition(!addition);
  };

  const pushedStar = {
    color: "gold",
  };
  const hideStar = {
    display: "none",
  };
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <p>Prescription</p>
          <div className="Prescription">
            <div className="R">
              <div>Right eye</div>
              <div className="REye">
                <div>
                  <div>sph:</div> <input type="text" />
                </div>
                <div>
                  <div>cyl:</div> <input type="text" />
                </div>
                <div>
                  <div>axis:</div> <input type="text" />
                </div>
                <div>
                  <div>add:</div> <input type="text" />
                </div>
              </div>
            </div>
            <div className="equals">
              <div>=</div>
            </div>
            <div className="L">
              <div>Left eye</div>
              <div className="LEye">
                <div>
                  <div>sph:</div> <input type="text" />
                </div>
                <div>
                  <div>cyl:</div> <input type="text" />
                </div>
                <div>
                  <div>axis:</div> <input type="text" />
                </div>
                <div>
                  <div>add:</div> <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <p className="add">Addition measurement</p>
          <div className="AdditionMeasurement">
            <FormControl component="fieldset">
              <RadioGroup
                defaultValue=" Not specified"
                name="customized-radios"
              >
                <FormControlLabel
                  value=" Not specified"
                  control={<Radio color="primary" />}
                  label=" Not specified"
                />
                <FormControlLabel
                  value="Addition lens in front"
                  control={<Radio color="primary" />}
                  label="Addition lens in front"
                />
                <FormControlLabel
                  value="Addition lens in back"
                  control={<Radio color="primary" />}
                  label="Addition lens in back"
                />
                <FormControlLabel
                  value="As worn"
                  control={<Radio color="primary" />}
                  label="As worn"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <p className="add">Measured near distance</p>
          <div className="Distance">
            <input
              type="range"
              min="25"
              max="55"
              step="1"
              defaultValue={nearDistance}
              onChange={handleSlider}
            />
            <br></br>
            <p>value: {nearDistance} cm</p>
          </div>
        </LeftColumn>
        <RightColumn>
          <p>Previous lenses</p>
          <div className="PreviousLenses">
            <div>
              <div>Lens type</div>
              <select
                name="cars"
                id="cars"
                onChange={handleLensTypeChange}
                value={lensType}
              >
                <option value="Progressive">Progressive</option>
                <option value="Bifocal">Bifocal</option>
                <option value="Single Vision">Single Vision</option>
                <option value="None">None</option>
              </select>
            </div>
            <div
              style={lensType === "Progressive" ? {} : { visibility: "hidden" }}
            >
              <div>Supplier</div>
              <select name="cars" id="cars">
                <option value="volvo">Hoya</option>
                <option value="saab">Seiko</option>
                <option value="opel">Essilor</option>
                <option value="audi">Rodenstock</option>
              </select>
            </div>
            <div
              style={lensType === "Progressive" ? {} : { visibility: "hidden" }}
            >
              <div>Design</div>
              <select name="cars" id="cars">
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="opel">3</option>
                <option value="audi">4</option>
              </select>
            </div>
            <div
              style={lensType === "Progressive" ? {} : { visibility: "hidden" }}
            >
              <div>Corridor length</div>
              <select name="cars" id="cars">
                <option value="volvo">11</option>
                <option value="saab">12</option>
                <option value="opel">13</option>
                <option value="audi">14</option>
              </select>
            </div>
          </div>
          <p>Level of satisfaction</p>
          <div
            className="Satisfaction"
            style={
              satisfaction === -1 && lensType === "Progressive"
                ? {
                    animation: "border-pulsate 2s infinite",
                  }
                : {}
            }
          >
            <IoMdStarOutline
              className="Star"
              onClick={(digit) => handleStarClick(1)}
              style={satisfaction >= 1 ? hideStar : {}}
            />
            <IoMdStar
              className="Star"
              onClick={(digit) => handleStarClick(1)}
              style={satisfaction >= 1 ? pushedStar : { display: "none" }}
            />

            <IoMdStarOutline
              className="Star"
              onClick={(digit) => handleStarClick(2)}
              style={satisfaction >= 2 ? hideStar : {}}
            />
            <IoMdStar
              className="Star"
              onClick={(digit) => handleStarClick(2)}
              style={satisfaction >= 2 ? pushedStar : { display: "none" }}
            />

            <IoMdStarOutline
              className="Star"
              onClick={(digit) => handleStarClick(3)}
              style={satisfaction >= 3 ? hideStar : {}}
            />
            <IoMdStar
              className="Star"
              onClick={(digit) => handleStarClick(3)}
              style={satisfaction >= 3 ? pushedStar : { display: "none" }}
            />
            <IoMdStarOutline
              className="Star"
              onClick={(digit) => handleStarClick(4)}
              style={satisfaction >= 4 ? hideStar : {}}
            />
            <IoMdStar
              className="Star"
              onClick={(digit) => handleStarClick(4)}
              style={satisfaction >= 4 ? pushedStar : { display: "none" }}
            />
            <IoMdStarOutline
              className="Star"
              onClick={(digit) => handleStarClick(5)}
              style={satisfaction >= 5 ? hideStar : {}}
            />
            <IoMdStar
              className="Star"
              onClick={(digit) => handleStarClick(5)}
              style={satisfaction >= 5 ? pushedStar : { display: "none" }}
            />

            <div className="satisfactionText">{satisfactionWord}</div>
          </div>
          <div className="Addition">
            <div className="PrevAddition">
              <p>Previous addition</p>
              <Switch
                onChange={handleSwitchChange}
                checked={addition}
                uncheckedIcon={false}
                checkedIcon={false}
                height={36}
                width={70}
                offColor={"#988b8d"}
                onColor={"#6f6259"}
              />
            </div>
            <div
              className="Inputs"
              style={addition ? {} : { visibility: "hidden" }}
            >
              <div className="InputsLabels">
                <div className="Invisible">addition</div>
                <div>R</div>
                <div>L</div>
              </div>
              <div className="InputsFields">
                <div>addition</div>
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
        </RightColumn>
      </Wrapper>
      <NextButton onClick={handleClickButton}>{t("next")}</NextButton>
    </Container>
  );
};

export default Prescript;
