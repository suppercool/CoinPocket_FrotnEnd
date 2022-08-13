import React, { useEffect, useState } from "react";
import download from "../assets/img/download_icon.svg";
import plus from "../assets/img/plus.svg";
import btc from "../assets/img/btc.svg";
import rip from "../assets/img/rip.svg";
import bnbc from "../assets/img/bnbc.svg";
import litcoin from "../assets/img/litcoin.svg";
import ethc from "../assets/img/ethc.svg";
import dogec from "../assets/img/dogec.svg";
import solano from "../assets/img/solano.svg";
import zec from "../assets/img/zec.svg";
import ht from "../assets/img/ht.svg";
import rune from "../assets/img/rune.svg";
import bnbs from "../assets/img/bnb_simple.svg";
import dot from "../assets/img/dot.svg";
import { useNavigate } from "react-router-dom";
import { Languages } from "../helper/Lang/DigitalAssets";
export const DigitalBlockChain = ({ active }) => {
  let navigate = useNavigate();
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);

  return (
    <div className="DigitalBlockChainwrapper ">
      <div className="DigitalBlockChain common_width">
        <h2>{Languages[lang]["upheld"]["smallheading"]}</h2>

        <h1>{Languages[lang]["upheld"]["heading"]}</h1>
        <p>{Languages[lang]["upheld"]["p"]}</p>

        <div className="buttons_wrapper">
          <button
            onClick={(e) => {
              navigate("/Download");
            }}
          >
            <img src={download} alt="" />
            <p>{Languages[lang]["upheld"]["button_dowload"]}</p>
          </button>
          <button>
            <img src={plus} alt="" />
            <p>{Languages[lang]["upheld"]["button_token"]}</p>
          </button>
        </div>

        <div className="currency_wrapper">
          <img src={btc} alt="" />
          <img src={rip} alt="" />
          <img src={bnbc} alt="" />
          <img src={litcoin} alt="" />
          <img src={ethc} alt="" />
          <img src={dogec} alt="" />
          <img src={solano} alt="" />
          <img src={zec} alt="" />
          <img src={ht} alt="" />
          <img src={dot} alt="" />
          <img src={rune} alt="" />
          <img src={bnbs} alt="" />
        </div>
      </div>
    </div>
  );
};
