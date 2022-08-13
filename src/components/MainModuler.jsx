import React, { useEffect, useState } from "react";
import moduler_main from "../assets/img/moduler_main.png";
import { Languages } from "../helper/Lang/Moduler";
export const MainModuler = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain">
      <div className="common_width">
        <div className="presentation">
          <h2>{Languages[lang]["title"]}</h2>

          <h1>{Languages[lang]["subtitle"]}</h1>

          <p>{Languages[lang]["para1"]}</p>
          <p>{Languages[lang]["para2"]}</p>
        </div>
        <img src={moduler_main} alt="" />
      </div>
    </div>
  );
};
