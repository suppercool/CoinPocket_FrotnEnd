import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";
import { SocialArea } from "../components/SocialArea";
import { KeyFeatures } from "../components/KeyFeatures";
import { VideoWrapper } from "../components/VideoWrapper";
import { MainFocused } from "../components/MainFocused";
import "../assets/styles/focused.css";
export const Focused = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  return (
    <div className="App">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainFocused />
      <VideoWrapper />
      <KeyFeatures />
      <SocialArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
