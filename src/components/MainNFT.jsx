import React, { useState, useEffect } from "react";
import nftImg from "../assets/img/nft.png";
import { Languages } from "../helper/Lang/NFT";
export const MainNFT = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain">
      <div className="common_width">
        <div className="presentation">
          <h1>{Languages[lang]["title"]}</h1>

          <h2>{Languages[lang]["subtitle"]}</h2>
          <p>{Languages[lang]["para1"]}</p>
          <p>{Languages[lang]["para2"]}</p>
        </div>
        <img src={nftImg} alt="" />
      </div>
    </div>
  );
};
