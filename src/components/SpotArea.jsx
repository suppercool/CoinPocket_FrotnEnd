import React, { useEffect, useState } from "react";
import tick from "../assets/img/tick_list.svg";
import { Languages } from "../helper/Lang/DigitalAssets";
export const SpotArea = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="spot_wrapper">
      <div className="common_width">
        <h1>{Languages[lang]["spotHeading"]}</h1>
        <ul>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][0]}</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][1]}</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][2]}</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][3]}</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][4]}</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>{Languages[lang]["spotList"][5]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
