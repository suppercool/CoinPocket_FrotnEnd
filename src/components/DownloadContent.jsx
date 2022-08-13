import React, { useState, useEffect } from "react";
import apple_logo from "../assets/img/apple.svg";
import play_store_logo from "../assets/img/google.svg";
import andriod from "../assets/img/andriod.jpeg";
import download from "../assets/img/download.svg";
import "../assets/styles/download.css";
import { Languages } from "../helper/Lang/download";
export const DownloadContent = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="common_width DownloadContent">
      <h2>
        <img src={download} alt="" />
        {Languages[lang]["title"]}
      </h2>
      <h1>{Languages[lang]["subtitle"]}</h1>
      <p>{Languages[lang]["para"]}</p>
      <div className="logo_download_wrapper">
        <a href="#">
          <img src={apple_logo} alt="" />
        </a>{" "}
        <a href="#">
          <img src={play_store_logo} alt="" />
        </a>{" "}
        <a href="#">
          <img src={andriod} alt="" />
        </a>
      </div>
    </div>
  );
};
