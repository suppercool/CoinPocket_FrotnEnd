import React, { useState, useEffect } from "react";
import { Languages } from "../helper/Lang/DigitalAssets";
export const MainDigital = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain MainFocused MainDigital">
      <div className="common_width">
        <div className="presentation">
          <h1>{Languages[lang]["title"]}</h1>
          <h2>{Languages[lang]["subhead"]}</h2>

          <p>
            {Languages[lang]["para"]}
            <b>{Languages[lang]["boldpara"]}</b> {Languages[lang]["secondpara"]}
          </p>
        </div>
      </div>
    </div>
  );
};
