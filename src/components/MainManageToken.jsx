import React, { useState, useEffect } from "react";
import { Languages } from "../helper/Lang/DigitalAssets";
export const MainManageToken = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain MainFocused MainDigital MainManageToken">
      <div className="common_width">
        <div className="presentation">
          <h1>{Languages[lang]["headingToken"]}</h1>

          <p>{Languages[lang]["paraToken"]}</p>
        </div>
      </div>
    </div>
  );
};
