import { useState, useEffect } from "react";
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
import { DigitalBlockChain } from "../components/DigitalBlockChain";
import { Languages } from "../helper/Lang/DigitalAssets";
export const DigitalAssets = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);

  return (
    <div className="App DigitalAssets">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainDigital active={active} />

      <div className="grid_container">
        <div className="grid_wrapper common_width">
          <div className="presentation">
            <img src={file} alt="" />
            <h1>{Languages[lang]["card1"]["title"]}</h1>
            <p>{Languages[lang]["card1"]["para"]}</p>
            <p>{Languages[lang]["card1"]["para2"]}</p>
          </div>

          <img src={digi1} alt="" />
        </div>

        <div className="grid_wrapper common_width">
          <img src={digi2} alt="" />
          <div className="presentation">
            <img src={file} alt="" />
            <h1>{Languages[lang]["card2"]["title"]}</h1>
            <p>{Languages[lang]["card2"]["para"]}</p>
            <p>{Languages[lang]["card2"]["para2"]}</p>
          </div>
        </div>
      </div>

      <DigitalBlockChain active={active} />

      <SocialArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
