import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.svg";
import dropdown from "../assets/img/dropdown.svg";
import download from "../assets/img/download_icon.svg";
import { Languages } from "../helper/Lang/Header";
import { useNavigate } from "react-router-dom";
import { JoinCommunity } from "./JoinCommunity";
export const Header = ({ active, setActive }) => {
  const [popupState, setPopupState] = useState(false);
  const [ScrollDone, setScrollDone] = useState(false);
  let navigate = useNavigate();
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  if (ScrollDone == false) {
    window.scrollTo(0, 0);
    setScrollDone(true);
  }

  return (
    <header className="common_width">
      {popupState && <JoinCommunity setPopupState={setPopupState} />}

      <img
        src={logo}
        alt=""
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          navigate("/");
        }}
      />

      <nav>
        <li>
          <a href="#product_link">{Languages[lang]["nav1"]}</a>
        </li>
        <li>
          <a href="#feature_link">{Languages[lang]["nav2"]}</a>
        </li>
        <li>
          <a href="#partner_link">{Languages[lang]["nav3"]}</a>
        </li>
        <li>
          <a href="#">
            {Languages[lang]["nav4"]} <img src={dropdown} alt="" />
          </a>
        </li>
      </nav>
      <div className="buttons_wrapper">
        <button
          onClick={(e) => {
            navigate("/Download");
          }}
        >
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
