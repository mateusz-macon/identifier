import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Wrapper, LeftColumn, RightColumn } from "./Frame.css";
import { NextButton } from "../../constants/NextButton.css";

const handleClickButton = () => {
  window.scrollTo({
    top: 4 * window.innerHeight - 0.05 * window.innerHeight * 4,
    behavior: "smooth",
  });
};

const Frame = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <p>Measurement</p>
          <div>
            <div>
              <div></div>
              <div className="Description">R</div>
              <div className="Description">L</div>
            </div>
            <div>
              <div>PD</div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <div>EP</div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <div>B size</div>
              <input type="text" />
            </div>
          </div>
        </LeftColumn>
        <RightColumn>
          <p>Measurement</p>
          <div>
            <div>
              <div></div>
              <div className="Description">R</div>
              <div className="Description">L</div>
            </div>
            <div>
              <div>PD</div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <div>EP</div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <div>B size</div>
              <input type="text" />
            </div>
          </div>
        </RightColumn>
      </Wrapper>
      <NextButton onClick={handleClickButton}>{t("next")}</NextButton>
    </Container>
  );
};

export default Frame;
