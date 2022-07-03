import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import dropdown from "../assets/img/dropdown.svg";
import download from "../assets/img/download_icon.svg";
import { Languages } from "../helper/Lang/Header";
export const Header = ({ active, setActive }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <header className="common_width">
      <img src={logo} alt="" />
      <nav>
        <li>
          <a href="#">{Languages[lang]["nav1"]}</a>
        </li>
        <li>
          <a href="#">{Languages[lang]["nav2"]}</a>
        </li>
        <li>
          <a href="#">{Languages[lang]["nav3"]}</a>
        </li>
        <li>
          <a href="#">
            {Languages[lang]["nav4"]} <img src={dropdown} alt="" />
          </a>
        </li>
      </nav>
      <div className="buttons_wrapper">
        <button>
          <img src={download} alt="" />
          <p> {Languages[lang]["nav5"]}</p>
        </button>
        <button
          className="chinese"
          onClick={(e) => {
            if (active == "Chinese") {
              setActive("English");
            } else {
              setActive("Chinese");
            }
          }}
        >
          <p>{active}</p>
        </button>
      </div>
    </header>
  );
};