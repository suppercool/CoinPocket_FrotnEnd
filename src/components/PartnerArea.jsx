import React, { useEffect, useState } from "react";
import logos_wrapper from "../assets/img/logos_wrapper.svg";
import social_logo from "../assets/img/social_logo.svg";

import twitter from "../assets/img/twit.svg";
import insta from "../assets/img/insta.svg";

import reddit from "../assets/img/reddit.svg";
import discord from "../assets/img/discord.svg";
import { Languages } from "../helper/Lang/Partners";
export const PartnerArea = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="PartnerArea" id="partner_link">
      <div className="common_width">
        <h1>{Languages[lang]["title"]}</h1>
        <p>{Languages[lang]["para"]}</p>

        <img src={logos_wrapper} alt="" />

        <div className="social_wrapper">
          <div className="presentation">
            <img src={social_logo} alt="" />
            <h1>{Languages[lang]["join"]}</h1>
          </div>
          <nav>
            <li>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={reddit} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={discord} alt="" />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};
