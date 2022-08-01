import React from "react";
import search from "../assets/img/search.png";
import mbl_cases from "../assets/img/mbl_cases.png";
export const GridBrowser = () => {
  return (
    <div className="GridBrowser">
      <div className="common_width">
        <div className="presentation">
          <h1>Search</h1>
          <p>
            <b>Accurate, Secure, Seamlessly</b> track your crypto portfolio
            across your wallets & exchanges with CoinTracker. Minimize Crypto
            Taxes. Secure, Easy, Accurate. Auto Sync. All Exchanges & Wallets.
          </p>
        </div>
        <img src={search} alt="" />
        <img src={mbl_cases} alt="" />
        <div className="presentation">
          <h1>History</h1>
          <p>
            <b> Exchange provides</b> open and filled order history, as well as
            deposit and withdrawal history. You can also generate and download
            statements for any
          </p>
        </div>
      </div>
    </div>
  );
};
