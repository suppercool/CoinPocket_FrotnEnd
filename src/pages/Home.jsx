import { useState } from "react";
import { Header } from "../components/Header";
import { MainArea } from "../components/MainArea";
import { GridArea } from "../components/GridArea";
import { TokenManage } from "../components/TokenManage";
import { Features } from "../components/Features";
import { LogosBanner } from "../components/LogosBanner";
import { PartnerArea } from "../components/PartnerArea";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";
export const Home = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");
  return (
    <div className="App">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainArea active={active} />
      <GridArea active={active} />
      <TokenManage active={active} />
      <Features active={active} />
      <LogosBanner active={active} />
      <PartnerArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
