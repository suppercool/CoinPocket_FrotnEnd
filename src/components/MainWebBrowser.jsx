import React from "react";
import browser_main from "../assets/img/browser_main.png";
import download from "../assets/img/download_icon.svg";
import tick from "../assets/img/tick.svg";
import { useNavigate } from "react-router-dom";
export const MainWebBrowser = () => {
  let navigate = useNavigate();
  return (
    <div className="nftMain MainWebBrowser">
      <div className="common_width">
        <div className="presentation">
          <h1>Trust Coinpocket Browser</h1>

          <p>
            Completely working Web3 program that can be utilized to connect with
            any decentralized (Coinpocket).
          </p>
          <ul>
            <li>
              <img src={tick} alt="" />
              Fastidiously created instrument
            </li>
            <li>
              <img src={tick} alt="" />
              Integrated interface that is fully optimized
            </li>
            <li>
              <img src={tick} alt="" />
              Meticulously crafted tool that provides{" "}
            </li>
          </ul>
          <button
            onClick={(e) => {
              navigate("/Download");
            }}
          >
            <img src={download} alt="" />
            <p>Download Now</p>
          </button>
        </div>
        <img src={browser_main} alt="" />
      </div>
    </div>
  );
};
