import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { Agreement } from "../components/Agreement";

import "../assets/styles/moduler.css";
import { PartnerArea } from "../components/PartnerArea";
import { MainModuler } from "../components/MainModuler";
import { ModulerSteps } from "../components/ModulerSteps";

export const Moduler = () => {
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState("Chinese");

  return (
    <div className="App">
      {popup == "privacy" && <PrivacyPolicy setPopup={setPopup} />}
      {popup == "agreement" && <Agreement setPopup={setPopup} />}

      <Header active={active} setActive={setActive} />
      <MainModuler active={active} />
      <ModulerSteps active={active} />

      <PartnerArea active={active} />
      <Footer setPopup={setPopup} active={active} />
    </div>
  );
};
