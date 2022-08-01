import React from "react";
import eth from "../assets/img/eth.svg";
import bnb from "../assets/img/bnb.svg";
import opensea from "../assets/img/opensea.png";
import crypto from "../assets/img/crypto.png";
import binance from "../assets/img/binance.png";
import storing_nft from "../assets/img/storing_nft.png";

export const SupportedNFT = () => {
  return (
    <div className="SupportedNFT">
      <div className="common_width">
        <h1>Supported NFTs on these Blockchains</h1>
        <p>
          Many NFTs are created and stored on the Ethereum network, although
          other blockchains (such as Flow and Tezos) also support
        </p>

        <div className="currency">
          <div className="img_wrapper">
            <img src={eth} alt="" />
            <p>Ethereum (ETH)</p>
          </div>
          <div className="img_wrapper">
            <img src={bnb} alt="" />
            <p>Smartchain (BNB)</p>
          </div>
        </div>

        <div className="storing_area">
          <div className="left_side">
            <h1>Where do I store NFTs?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              dapibus proin aliquam massa neque in in sodales. Amet integer
              libero .
            </p>
            <ul>
              <li>
                <h1>Mind and Security</h1>
                <p>
                  Secure crypto resources and blockchain with certainty just
                  empowered by CORE. Made for institutional financial backers
                  and worldwide undertakings, CORE dispenses with the weak link
                  in any chain
                </p>
              </li>

              <li>
                <h1>Public Address</h1>
                <p>
                  Secure crypto <b>Resources and blockchain</b> with certainty
                  just empowered by CORE. Made for institutional financial
                  backers and worldwide
                </p>
              </li>
              <li>
                <h1>Mind and Security</h1>
                <p>
                  Secure crypto resources and blockchain with certainty just
                  empowered by CORE. Made for institutional financial{" "}
                  <b>Backers and Worldwide</b> undertakings, CORE dispenses with
                  the weak link in any chain
                </p>
              </li>
            </ul>
          </div>
          <img src={storing_nft} alt="" />
        </div>

        <div className="get_nft">
          <h1>Where get our NFTs</h1>
          <div className="nft_pics">
            <img src={opensea} alt="" />
            <img src={crypto} alt="" />
            <img src={binance} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
