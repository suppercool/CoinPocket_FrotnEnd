import React, { useState, useEffect } from "react";
import download_wallet from "../assets/img/download_wallet.svg";
import create_wallet from "../assets/img/create_wallet.svg";
import crypto from "../assets/img/crypto.svg";
import line from "../assets/img/line.svg";
import { Languages } from "../helper/Lang/Moduler";
export const ModulerSteps = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="ModulerSteps">
      <div className="common_width">
        <h1>{Languages[lang]["stepsheading"]}</h1>
        <p>{Languages[lang]["stepspara"]}</p>

        <div className="grid_steps">
          <img src={line} alt="" />
          <div className="steps_wrapper">
            <img src={download_wallet} alt="" />
            <p>{Languages[lang]["stepsName"][0]}</p>
          </div>
          <div className="steps_wrapper">
            <img src={create_wallet} alt="" />
            <p>{Languages[lang]["stepsName"][1]}</p>
          </div>
          <div className="steps_wrapper">
            <img src={crypto} alt="" />
            <p>{Languages[lang]["stepsName"][2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
