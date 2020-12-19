import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { VerticalNavContainer } from "./LeftMenu.css";
import { FaTachometerAlt } from "react-icons/fa";
import { RiHomeGearLine } from "react-icons/ri";
import { BsCardText } from "react-icons/bs";
import { BiGlasses, BiCart } from "react-icons/bi";

const LeftMenu = () => {
  const { t } = useTranslation(["translation"]);

  const handleClick = (digit) => {
    window.scrollTo({ top: digit, behavior: "smooth" });
    // console.log(window.innerHeight);

    switch (digit) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        window.scrollTo({
          top: window.innerHeight - 0.05 * window.innerHeight,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      default:
        console.log("error");
    }
  };
  //create state value
  const [scrollHeight, setScrollHeight] = useState(1);

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
    console.log("zmieniono na " + scrollHeight);
  });

  const handleScroll = () => {
    let scroll = window.pageYOffset;
    let windowHeight = window.innerHeight;
    // console.log(scroll, windowHeight);

    if (scroll < windowHeight * 0.5) {
      if (scrollHeight !== 1) {
        setScrollHeight(1);
      }
    } else if (
      scroll >= windowHeight * 0.5 &&
      scroll < windowHeight * 1.5 - windowHeight * 0.05
    ) {
      if (scrollHeight !== 2) {
        setScrollHeight(2);
      }
    } else if (
      scroll >= windowHeight * 1.5 - windowHeight * 0.05 &&
      scroll < windowHeight * 2.5 - windowHeight * 0.05
    ) {
      if (scrollHeight !== 3) {
        setScrollHeight(3);
      }
    } else if (
      scroll >= windowHeight * 2.5 - windowHeight * 0.05 &&
      scroll < windowHeight * 3.5 - windowHeight * 0.05
    ) {
      if (scrollHeight !== 4) {
        setScrollHeight(4);
      }
    } else if (
      scroll >= windowHeight * 3.5 - windowHeight * 0.05 &&
      scroll < windowHeight * 4.5 - windowHeight * 0.05
    ) {
      if (scrollHeight !== 5) {
        setScrollHeight(5);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <VerticalNavContainer>
      <div
        onClick={(digit) => handleClick(0)}
        className={scrollHeight === 1 ? "here" : ""}
      >
        <p>
          <RiHomeGearLine style={{ fontSize: "32px" }} />
        </p>
        {t("Get started")}
      </div>
      <div
        onClick={(digit) => handleClick(1)}
        className={scrollHeight === 2 ? "here" : ""}
      >
        <p>
          <FaTachometerAlt style={{ fontSize: "32px" }} />
        </p>
        {t("Life style")}
      </div>
      <div
        onClick={(digit) => handleClick(2)}
        className={scrollHeight === 3 ? "here" : ""}
      >
        <p>
          <BsCardText style={{ fontSize: "32px" }} />
        </p>
        {t("Prescript")}
      </div>
      <div
        onClick={(digit) => handleClick(3)}
        className={scrollHeight === 4 ? "here" : ""}
      >
        <p>
          <BiGlasses style={{ fontSize: "32px" }} />
        </p>
        {t("Frame")}
      </div>
      <div
        onClick={(digit) => handleClick(4)}
        className={scrollHeight === 5 ? "here" : ""}
      >
        <p>
          <BiCart style={{ fontSize: "32px" }} />
        </p>
        {t("Order")}
      </div>
    </VerticalNavContainer>
  );
};

export default LeftMenu;
