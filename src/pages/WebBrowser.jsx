import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";
import { SocialArea } from "../components/SocialArea";
import "../assets/styles/browser.css";
import { MainWebBrowser } from "../components/MainWebBrowser";
import { BrowserCases } from "../components/BrowserCases";
import { GridBrowser } from "../components/GridBrowser";

export const WebBrowser = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  return (
    <div className="App">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainWebBrowser />
      <BrowserCases />
      <GridBrowser />
      <SocialArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
