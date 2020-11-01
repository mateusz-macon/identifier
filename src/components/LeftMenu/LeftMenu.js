import React from "react";
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
    console.log(window.innerHeight);

    switch (digit) {
      case 0:
        console.log(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        console.log(1);
        window.scrollTo({
          top: window.innerHeight - 0.05 * window.innerHeight,
          behavior: "smooth",
        });
        break;
      case 2:
        console.log(2);
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      case 3:
        console.log(3);
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      case 4:
        console.log(4);
        window.scrollTo({
          top: digit * window.innerHeight - 0.05 * window.innerHeight * digit,
          behavior: "smooth",
        });
        break;
      default:
        console.log("error");
    }
  };

  const handleScroll = () => {
    console.log(window.pageYOffset);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <VerticalNavContainer>
      <div onClick={(digit) => handleClick(0)}>
        <p>
          <RiHomeGearLine style={{ fontSize: "32px" }} />
        </p>
        {t("Get started")}
      </div>
      <div onClick={(digit) => handleClick(1)}>
        <p>
          <FaTachometerAlt style={{ fontSize: "32px" }} />
        </p>
        {t("Life style")}
      </div>
      <div onClick={(digit) => handleClick(2)}>
        <p>
          <BsCardText style={{ fontSize: "32px" }} />
        </p>
        {t("Prescript")}
      </div>
      <div onClick={(digit) => handleClick(3)}>
        <p>
          <BiGlasses style={{ fontSize: "32px" }} />
        </p>
        {t("Frame")}
      </div>
      <div onClick={(digit) => handleClick(4)}>
        <p>
          <BiCart style={{ fontSize: "32px" }} />
        </p>
        {t("Order")}
      </div>
    </VerticalNavContainer>
  );
};

export default LeftMenu;
