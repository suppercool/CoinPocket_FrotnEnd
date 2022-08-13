import React, { useState, useEffect } from "react";

import { MainFocusedCard } from "./MainFocusedCard";
import trade from "../assets/img/trade.png";
import guard from "../assets/img/guard.png";

import block from "../assets/img/block.png";
import { Languages } from "../helper/Lang/Focused";
export const MainFocused = ({ active }) => {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);
  return (
    <div className="nftMain MainFocused">
      <div className="common_width">
        <div className="presentation">
          <h2>{Languages[lang]["title"]}</h2>
          <h1>{Languages[lang]["subTitle"]}</h1>
          <p>{Languages[lang]["para"]}</p>
        </div>

        <div className="cards_wrapper">
          <MainFocusedCard
            img={trade}
            heading={Languages[lang]["cards"][0]}
            para={Languages[lang]["cards"][1]}
          />
          <MainFocusedCard
            img={guard}
            heading={Languages[lang]["cards"][2]}
            para={Languages[lang]["cards"][3]}
          />
          <MainFocusedCard
            img={block}
            heading={Languages[lang]["cards"][4]}
            para={Languages[lang]["cards"][5]}
          />
        </div>
      </div>
    </div>
  );
};
