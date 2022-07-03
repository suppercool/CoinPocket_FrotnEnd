import React, { useState, useEffect } from "react";
import social_logo from "../assets/img/social_logo.svg";
import apple_logo from "../assets/img/apple.svg";
import play_store_logo from "../assets/img/google.svg";
import { Languages } from "../helper/Lang/Footer";
export const Footer = ({ setPopup, active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="Footer">
      <div className="top_area common_width">
        <div className="first_col">
          <img src={social_logo} alt="" />
          <p>{Languages[lang]["firstPAra"]}</p>
          <h1>{Languages[lang]["app"]}</h1>
          <div className="logo_download_wrapper">
            <a href="#">
              <img src={apple_logo} alt="" />
            </a>{" "}
            <a href="#">
              <img src={play_store_logo} alt="" />
            </a>
          </div>
        </div>
        <ul>
          <li className="head">{Languages[lang]["firstul"]["0"]}</li>
          <li>
            <a href="#">{Languages[lang]["firstul"]["1"]}</a>
          </li>
          <li>
            <a href="#">{Languages[lang]["firstul"]["2"]}</a>
          </li>
          <li>
            <a href="#">{Languages[lang]["firstul"]["3"]}</a>
          </li>

          <li>
            <a href="#">{Languages[lang]["firstul"]["4"]}</a>
          </li>
        </ul>

        <ul>
          <li className="head">{Languages[lang]["secondul"]["0"]}</li>
          <li>
            <a href="#">{Languages[lang]["secondul"]["1"]}</a>
          </li>
          <li>
            <a href="#">{Languages[lang]["secondul"]["2"]}</a>
          </li>
          <li>
            <a href="#">{Languages[lang]["secondul"]["3"]}</a>
          </li>

          <li>
            <a href="#">{Languages[lang]["secondul"]["4"]}</a>
          </li>
        </ul>

        <ul>
          <li className="head">{Languages[lang]["subscribe"]}</li>
          <li>{Languages[lang]["firstPAra"]}</li>

          <li className="input_wrapper">
            <input
              type="text"
              placeholder={Languages[lang]["emailPlaceholder"]}
            />
            <button>{Languages[lang]["sendButton"]}</button>
          </li>
        </ul>
      </div>
      <div className="bottom_area ">
        <div className="inner common_width">
          <p>{Languages[lang]["copyRight"]}</p>
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPopup("privacy");
                }}
              >
                {Languages[lang]["footerRightLast"][0]}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPopup("agreement");
                }}
              >
                {Languages[lang]["footerRightLast"][1]}
              </a>
            </li>
            <li>
              <a href="#"> {Languages[lang]["footerRightLast"][2]}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
