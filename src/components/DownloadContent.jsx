import React from "react";
import apple_logo from "../assets/img/apple.svg";
import play_store_logo from "../assets/img/google.svg";
import andriod from "../assets/img/andriod.jpeg";
import download from "../assets/img/download.svg";
import "../assets/styles/download.css";
export const DownloadContent = () => {
  return (
    <div className="common_width DownloadContent">
      <h2>
        <img src={download} alt="" />
        Download application
      </h2>
      <h1>Get the CoinPocket application now!</h1>
      <p>
        Purchase, store, gather NFTs, trade and procure crypto. Join 25 million+
        individuals utilizing Trust Wallet.
      </p>
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
