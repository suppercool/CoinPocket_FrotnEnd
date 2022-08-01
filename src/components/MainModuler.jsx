import React from "react";
import moduler_main from "../assets/img/moduler_main.png";
export const MainModuler = () => {
  return (
    <div className="nftMain">
      <div className="common_width">
        <div className="presentation">
          <h2>buy, sell and transfer </h2>
          <h1>Crypto wallet</h1>

          <p>
            <b> Crypto wallet</b> is an instant ("turnkey") answer for your
            clients, related with your image (White Label), for putting away and
            utilizing different existing digital currencies.
          </p>
          <p>
            Cryptocurrency users to store and retrieve their digital assets. As
            with conventional currency, you don't need a wallet to spend your
            cash, but it certainly helps to keep it all in one place..
          </p>
        </div>
        <img src={moduler_main} alt="" />
      </div>
    </div>
  );
};
