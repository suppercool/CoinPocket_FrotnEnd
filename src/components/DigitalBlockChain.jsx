import React from "react";
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
export const DigitalBlockChain = () => {
  let navigate = useNavigate();
  return (
    <div className="DigitalBlockChainwrapper ">
      <div className="DigitalBlockChain common_width">
        <h2>global multi-asset</h2>

        <h1>Upheld Resources and Blockchains</h1>
        <p>
          Uphold is a global multi-asset digital trading platform. Easy and
          secure place to trade and manage your digital assets. 10+. Million ...
        </p>

        <div className="buttons_wrapper">
          <button
            onClick={(e) => {
              navigate("/Download");
            }}
          >
            <img src={download} alt="" />
            <p>Download Now</p>
          </button>
          <button>
            <img src={plus} alt="" />
            <p>Add Token</p>
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
