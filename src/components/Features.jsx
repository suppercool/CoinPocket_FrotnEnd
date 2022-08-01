import React, { useEffect, useState } from "react";
import secure from "../assets/img/secure.svg";
import modular from "../assets/img/modular.svg";
import store_nft from "../assets/img/store_nft.svg";
import { Languages } from "../helper/Lang/FeaturesArea";
import { useNavigate } from "react-router-dom";
export const Features = ({ active }) => {
  let navigate = useNavigate();
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    if (active == "Chinese") {
      setLang("eng");
    } else {
      setLang("chi");
    }
  }, [active]);

  return (
    <div className="Features common_width" id="feature_link">
      <h1>{Languages[lang]["title"]}</h1>
      <p>{Languages[lang]["para"]}</p>
      <div className="cards_wrapper">
        <div className="card">
          <img src={secure} alt="" />
          <h1>{Languages[lang]["cards"][0]}</h1>
          <p>{Languages[lang]["cardspara"][0]}</p>
          <button
            onClick={(e) => {
              navigate("/Focused");
            }}
          >
            {Languages[lang]["button"]}
          </button>
        </div>

        <div className="card">
          <img src={modular} alt="" />
          <h1>{Languages[lang]["cards"][1]}</h1>
          <p>{Languages[lang]["cardspara"][1]}</p>
          <button
            onClick={(e) => {
              navigate("/Moduler");
            }}
          >
            {Languages[lang]["button"]}
          </button>
        </div>

        <div className="card">
          <img src={store_nft} alt="" />
          <h1>{Languages[lang]["cards"][2]}</h1>
          <p>{Languages[lang]["cardspara"][2]}</p>
          <button
            onClick={(e) => {
              navigate("/NFT");
            }}
          >
            {Languages[lang]["button"]}
          </button>
        </div>
      </div>
    </div>
  );
};
