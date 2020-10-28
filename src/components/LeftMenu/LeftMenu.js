import React from "react";
import { useTranslation } from "react-i18next";
import { VerticalNavContainer } from "./LeftMenu.css";
import { FaTachometerAlt } from "react-icons/fa";
import { RiHomeGearLine } from "react-icons/ri";
import { BsCardText } from "react-icons/bs";
import { BiGlasses, BiCart } from "react-icons/bi";

const LeftMenu = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <VerticalNavContainer>
      <div>
        <p>
          <RiHomeGearLine style={{ fontSize: "32px" }} />
        </p>
        {t("Get started")}
      </div>
      <div>
        <p>
          <FaTachometerAlt style={{ fontSize: "32px" }} />
        </p>
        {t("Life style")}
      </div>
      <div>
        <p>
          <BsCardText style={{ fontSize: "32px" }} />
        </p>
        {t("Prescript")}
      </div>
      <div>
        <p>
          <BiGlasses style={{ fontSize: "32px" }} />
        </p>
        {t("Frame")}
      </div>
      <div>
        <p>
          <BiCart style={{ fontSize: "32px" }} />
        </p>
        {t("Order")}
      </div>
    </VerticalNavContainer>
  );
};

export default LeftMenu;
