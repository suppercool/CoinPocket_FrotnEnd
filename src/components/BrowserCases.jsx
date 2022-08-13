import React, { useEffect, useState } from "react";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import { Languages } from "../helper/Lang/WebBrowser";
export const BrowserCases = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="wrapperBrowser">
      <div className="BrowserCases common_width">
        <h1>{Languages[lang]["cases"][0]}</h1>
        <p>{Languages[lang]["cases"][1]}</p>

        <div className="cards_wrapper">
          <div className="card">
            <img src={card1} alt="" />
            <div className="presetation">
              <h1>{Languages[lang]["casesCards"][0][0]}</h1>
              <p>{Languages[lang]["casesCards"][0][1]}</p>
            </div>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <div className="presetation">
              <h1>{Languages[lang]["casesCards"][1][0]}</h1>
              <p>{Languages[lang]["casesCards"][1][1]}</p>
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <div className="presetation">
              <h1>{Languages[lang]["casesCards"][2][0]}</h1>
              <p>{Languages[lang]["casesCards"][2][1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
