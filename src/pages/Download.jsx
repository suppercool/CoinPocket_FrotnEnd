import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PartnerArea } from "../components/PartnerArea";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";
import { SocialArea } from "../components/SocialArea";
import { DownloadContent } from "../components/DownloadContent";
export const Download = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  return (
    <div className="App">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <DownloadContent active={active} />
      <SocialArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
