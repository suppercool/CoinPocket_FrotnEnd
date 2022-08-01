import React from "react";
import tick from "../assets/img/tick_list.svg";
export const SpotArea = () => {
  return (
    <div className="spot_wrapper">
      <div className="common_width">
        <h1>All that you really want in One Spot</h1>
        <ul>
          <li>
            <img src={tick} alt="" />
            <p>Get, trade and hold various digital currencies</p>
          </li>

          <li>
            <img src={tick} alt="" />
            <p>Remain private and secure putting away your protection.</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>Store stablecoins to keep away from market instability.</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>Purchase more crypto with your Mastercard.</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>Effectively acquire interest on the crypto in your wallet</p>
          </li>
          <li>
            <img src={tick} alt="" />
            <p>Trade or exchange your resources seconds.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
