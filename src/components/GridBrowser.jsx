import React, { useState, useEffect } from "react";
import search from "../assets/img/search.png";
import mbl_cases from "../assets/img/mbl_cases.png";
import { Languages } from "../helper/Lang/WebBrowser";
export const GridBrowser = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="GridBrowser">
      <div className="common_width">
        <div className="presentation">
          <h1>{Languages[lang]["gridarea"][0]}</h1>
          <p>{Languages[lang]["gridarea"][1]}</p>
        </div>
        <img src={search} alt="" />
        <img src={mbl_cases} alt="" />
        <div className="presentation">
          <h1>{Languages[lang]["gridarea"][2]}</h1>
          <p>{Languages[lang]["gridarea"][3]}</p>
        </div>
      </div>
    </div>
  );
};
