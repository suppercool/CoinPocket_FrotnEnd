import React, { useEffect, useState } from "react";

import key_features from "../assets/img/key_features.png";
import { Languages } from "../helper/Lang/Focused";
export const KeyFeatures = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="SupportedNFT">
      <div className="common_width">
        <h1>{Languages[lang]["key"]}</h1>
        <p>{Languages[lang]["keypara"]}</p>

        <div className="storing_area" style={{ marginTop: 100 }}>
          <img src={key_features} alt="" />
          <div className="left_side">
            <ul>
              <li>
                <h1>{Languages[lang]["keyList"][0]}</h1>
                <p>{Languages[lang]["keyList"][1]}</p>
              </li>

              <li>
                <h1>{Languages[lang]["keyList"][2]}</h1>
                <p>{Languages[lang]["keyList"][3]}</p>
              </li>
              <li>
                <h1>{Languages[lang]["keyList"][4]}</h1>
                <p>{Languages[lang]["keyList"][5]}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
