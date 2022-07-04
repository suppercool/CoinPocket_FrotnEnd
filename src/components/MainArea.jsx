import React, { useEffect, useState } from "react";
import apple_logo from "../assets/img/apple.svg";
import play_store_logo from "../assets/img/google.svg";
import andriod from "../assets/img/andriod.jpeg";

import mbl_main from "../assets/img/mbl_main.png";
import star from "../assets/img/star.svg";
import starhalf from "../assets/img/star_half.svg";
import { Languages } from "../helper/Lang/MainArea";
export const MainArea = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="common_width main_area">
      <div className="presentation">
        <h1>
          {Languages[lang]["title"]}
          <span>{Languages[lang]["subhead"]}</span>
        </h1>
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

        <div className="stars_wrapper">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={starhalf} alt="" />
          <p className="rate">4.7</p>
          <p>
            {Languages[lang]["trusted"]}
            <span>1000+ {Languages[lang]["trusteduser"]}</span>
          </p>
        </div>
      </div>
      <div className="img_wrapper">
        <img src={mbl_main} alt="" />
      </div>
    </div>
  );
};
