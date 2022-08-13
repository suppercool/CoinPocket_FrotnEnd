import React, { useEffect, useState } from "react";
import browser_main from "../assets/img/browser_main.png";
import download from "../assets/img/download_icon.svg";
import tick from "../assets/img/tick.svg";
import { useNavigate } from "react-router-dom";
import { Languages } from "../helper/Lang/WebBrowser";
export const MainWebBrowser = ({ active }) => {
  let navigate = useNavigate();
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain MainWebBrowser">
      <div className="common_width">
        <div className="presentation">
          <h1>{Languages[lang]["title"]}</h1>

          <p>{Languages[lang]["para"]}</p>
          <ul>
            <li>
              <img src={tick} alt="" />
              {Languages[lang]["list"][0]}
            </li>
            <li>
              <img src={tick} alt="" />
              {Languages[lang]["list"][1]}
            </li>
            <li>
              <img src={tick} alt="" />
              {Languages[lang]["list"][2]}
            </li>
          </ul>
          <button
            onClick={(e) => {
              navigate("/Download");
            }}
          >
            <img src={download} alt="" />
            <p> {Languages[lang]["button_dowload"]}</p>
          </button>
        </div>
        <img src={browser_main} alt="" />
      </div>
    </div>
  );
};
