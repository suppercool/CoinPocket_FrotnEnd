import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";
import { SocialArea } from "../components/SocialArea";

import "../assets/styles/digital.css";
import { MainDigital } from "../components/MainDigital";
import digi1 from "../assets/img/digi1.png";
import digi2 from "../assets/img/digi2.png";
import file from "../assets/img/file.svg";
import coin from "../assets/img/coin.svg";
import { DigitalBlockChain } from "../components/DigitalBlockChain";
export const DigitalAssets = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  return (
    <div className="App DigitalAssets">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainDigital />

      <div className="grid_container">
        <div className="grid_wrapper common_width">
          <div className="presentation">
            <img src={file} alt="" />
            <h1>Multi Cryptocurrency Wallet Application</h1>
            <p>
              <b>Safely convey your #1 digital</b> forms of money on your
              Android and Apple gadgets with Trust Wallet. With a typical client
              survey of 4.7/5.0 you can feel certain your Digital Assets are
              private and safe
            </p>
            <p>
              Multi wallet allows you to securely manage and exchange a variety
              of cryptocurrencies from a single channel that too with an easy to
              use interface for a smooth and simple crypto wallet usage. We
              provide cryptocurrency airdrop with our app, it's safe and secure.
            </p>
          </div>

          <img src={digi1} alt="" />
        </div>

        <div className="grid_wrapper common_width">
          <img src={digi2} alt="" />
          <div className="presentation">
            <img src={file} alt="" />
            <h1>Large number of Supported Coins</h1>
            <p>
              Our multicoin wallet application upholds the fundamental
              blockchains inside the Ethereum environment, and works with any
              <b>ERC20, BEP2 and ERC721</b> tokens while likewise giving
              inclusion as a Bitcoin Wallet.
            </p>
            <p>
              We've likewise as of late added help for
              <b>Binance Smart Chain</b>. The Trust Wallet improvement group
              keeps on adding support for more digital currencies consistently,
              so make certain to check for refreshes. Or on the other hand even
              better, contact our group to share support for your number one
              coins and get them added into Trust Wallet!
            </p>
          </div>
        </div>
      </div>

      <DigitalBlockChain />

      <SocialArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
