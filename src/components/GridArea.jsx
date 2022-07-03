import React, { useState, useEffect } from "react";
import { GridRow } from "./GridRow";
import img1 from "../assets/img/grid_1 (1).png";
import digi_logo from "../assets/img/digi_logo.svg";
import web_browser from "../assets/img/web_browser.svg";
import web_browser2 from "../assets/img/grid_2_crop.png";
import { Languages } from "../helper/Lang/GridArea";
export const GridArea = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="common_width GridArea">
      <GridRow>
        <div className="img_wrapper">
          <img src={img1} alt="" />
        </div>
        <div className="presentation_area">
          <img src={digi_logo} alt="" />
          <h1>{Languages[lang]["firstGrid"]["title"]}</h1>
          <p>{Languages[lang]["firstGrid"]["para"]}</p>
          <ul>
            <li>{Languages[lang]["firstGrid"]["li1"]}</li>
            <li>{Languages[lang]["firstGrid"]["li2"]}</li>
          </ul>
          <button>
            <p>{Languages[lang]["buttonContent"]}</p>
          </button>
        </div>
      </GridRow>

      <GridRow>
        <div className="presentation_area just_self">
          <img src={web_browser} alt="" />
          <h1>{Languages[lang]["secondGrid"]["title"]}</h1>
          <p>{Languages[lang]["secondGrid"]["para"]}</p>
          <ul>
            <li>{Languages[lang]["secondGrid"]["li1"]}</li>
            <li>{Languages[lang]["secondGrid"]["li2"]}</li>
          </ul>
          <button>
            <p>{Languages[lang]["buttonContent"]}</p>
          </button>
        </div>
        <div className="img_wrapper">
          <img src={web_browser2} alt="" />
        </div>
      </GridRow>
    </div>
  );
};
