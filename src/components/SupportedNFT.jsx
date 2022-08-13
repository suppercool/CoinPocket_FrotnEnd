import React, { useState, useEffect } from "react";
import eth from "../assets/img/eth.svg";
import bnb from "../assets/img/bnb.svg";
import opensea from "../assets/img/opensea.png";
import crypto from "../assets/img/crypto.png";
import binance from "../assets/img/binance.png";
import storing_nft from "../assets/img/storing_nft.png";
import { Languages } from "../helper/Lang/NFT";
export const SupportedNFT = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="SupportedNFT">
      <div className="common_width">
        <h1>{Languages[lang]["blockchain"]}</h1>
        <p>{Languages[lang]["para"]}</p>

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
            <h1>{Languages[lang]["storeheading"]}</h1>
            <p>{Languages[lang]["storePara"]}</p>
            <ul>
              <li>
                <h1>{Languages[lang]["storeList"][0]}</h1>
                <p>{Languages[lang]["storeList"][1]}</p>
              </li>

              <li>
                <h1>{Languages[lang]["storeList"][2]}</h1>
                <p>{Languages[lang]["storeList"][3]}</p>
              </li>
              <li>
                <h1>{Languages[lang]["storeList"][4]}</h1>
                <p>{Languages[lang]["storeList"][5]}</p>
              </li>
            </ul>
          </div>
          <img src={storing_nft} alt="" />
        </div>

        <div className="get_nft">
          <h1>{Languages[lang]["get"]}</h1>
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
