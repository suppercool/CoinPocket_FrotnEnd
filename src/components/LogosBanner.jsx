import React, { useState, useEffect } from "react";
import apple_logo from "../assets/img/apple.svg";
import play_store_logo from "../assets/img/google.svg";
import { Languages } from "../helper/Lang/LogosBanner";
export const LogosBanner = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);

  return (
    <div className="LogosBanner">
      <div className="presentation common_width">
        <h1> {Languages[lang]["title"]}</h1>

        <p> {Languages[lang]["para"]}</p>

        <div className="logo_download_wrapper">
          <a href="#">
            <img src={apple_logo} alt="" />
          </a>{" "}
          <a href="#">
            <img src={play_store_logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
