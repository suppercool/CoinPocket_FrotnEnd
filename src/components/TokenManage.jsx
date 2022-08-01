import React, { useState, useEffect } from "react";
import token_manage from "../assets/img/token_manage.svg";
import manage_token from "../assets/img/token.png";
import { Languages } from "../helper/Lang/TokenArea";
import { useNavigate } from "react-router-dom";
export const TokenManage = ({ active }) => {
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
    <div className="common_width TokenManage">
      <div className="top_area">
        <img src={token_manage} alt="" />
        <h1>{Languages[lang]["title"]}</h1>
        <p>BTC. BSC.ETH. MATIC. TRX</p>
        <button
          onClick={(e) => {
            navigate("/ManageToken");
          }}
        >
          <p>{Languages[lang]["button"]}</p>
        </button>
      </div>
      <img src={manage_token} alt="" />
    </div>
  );
};
