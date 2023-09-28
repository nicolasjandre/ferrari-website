import { CardEngine } from "../../components/CardEngine";

import EngineImg from "/icons/blueengine.svg";
import EngineGreenImg from "/icons/greenengine.svg";
import VelocimeterImg from "/icons/speed.svg";

import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./styles.scss";

export const Home = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <section className="cardEngine-wrapper">
        <CardEngine
          bgColor={theme === "light" ? "#E5FBFD" : "#202020"}
          imgSrc={EngineImg}
          imgAlt="Engine"
          textOne="ENGINE"
          textTwo="V12"
        />

        <CardEngine
          bgColor={theme === "light" ? "#FDF7E7" : "#202020"}
          imgSrc={VelocimeterImg}
          imgAlt="Velocimeter"
          textOne="0-100 KM/H"
          textTwo="2,9"
          textThree="SEC"
        />

        <CardEngine
          bgColor={theme === "light" ? "#F1FFEF" : "#202020"}
          imgSrc={EngineGreenImg}
          imgAlt="Engine"
          textOne="SPECIFIC OUTPUT"
          textTwo="123"
          textThree="CV/L"
        />
      </section>
    </>
  );
};
