import React from "react";
import eth from "../assets/img/eth.svg";
import bnb from "../assets/img/bnb.svg";
import opensea from "../assets/img/opensea.png";
import crypto from "../assets/img/crypto.png";
import binance from "../assets/img/binance.png";
import key_features from "../assets/img/key_features.png";

export const KeyFeatures = () => {
  return (
    <div className="SupportedNFT">
      <div className="common_width">
        <h1>Key Features</h1>
        <p>
          Secure crypto resources and blockchain with certainty just empowered
          by CORE. Made for institutional financial backers and worldwide
          undertakings, CORE dispenses with the weak link in any chain
        </p>

        <div className="storing_area" style={{ marginTop: 100 }}>
          <img src={key_features} alt="" />
          <div className="left_side">
            <ul>
              <li>
                <h1>Focused on Security</h1>
                <p>
                  Secure crypto resources and blockchain with certainty just
                  empowered by CORE. Made for <b>institutional financial</b>
                  backers and worldwide undertakings, CORE dispenses with the
                  weak link in any chain
                </p>
              </li>

              <li>
                <h1>Modular Approach</h1>
                <p>
                  Secure crypto <b>Resources and blockchain</b> with certainty
                  just empowered by CORE. Made for institutional financial
                  backers and worldwide undertakings, CORE dispenses with the
                  weak link in any chain
                </p>
              </li>
              <li>
                <h1>Open Source</h1>
                <p>
                  Secure crypto resources and blockchain with certainty just
                  empowered by CORE. Made for institutional financial
                  <b>Backers and Worldwide</b> undertakings, CORE dispenses with
                  the weak link in any chain
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
