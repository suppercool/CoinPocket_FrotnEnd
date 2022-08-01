import React from "react";
import download_wallet from "../assets/img/download_wallet.svg";
import create_wallet from "../assets/img/create_wallet.svg";
import crypto from "../assets/img/crypto.svg";
import line from "../assets/img/line.svg";
export const ModulerSteps = () => {
  return (
    <div className="ModulerSteps">
      <div className="common_width">
        <h1>Get started in 3 simple steps</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          scelerisque arcu sit duis dictum dolor eget amet, volutpat. Dignissim
          viverra donec
        </p>

        <div className="grid_steps">
          <img src={line} alt="" />
          <div className="steps_wrapper">
            <img src={download_wallet} alt="" />
            <p>Download Wallet</p>
          </div>
          <div className="steps_wrapper">
            <img src={create_wallet} alt="" />
            <p>Create a New Wallet</p>
          </div>
          <div className="steps_wrapper">
            <img src={crypto} alt="" />
            <p>Get Some Crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
};
