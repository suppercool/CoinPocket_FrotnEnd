import React from "react";
import nftImg from "../assets/img/nft.png";
import { MainFocusedCard } from "./MainFocusedCard";
import trade from "../assets/img/trade.png";
import guard from "../assets/img/guard.png";

import block from "../assets/img/block.png";
export const MainFocused = () => {
  return (
    <div className="nftMain MainFocused">
      <div className="common_width">
        <div className="presentation">
          <h2>crypto-assets secure</h2>
          <h1>Center Crypto Asset Security</h1>
          <p>
            Undertaking programming for giving multi-party exchange endorsement
            and strategy approval for banks, monetary establishments, and
            endeavors that can oblige any crypto resource or blockchain record.
          </p>
        </div>

        <div className="cards_wrapper">
          <MainFocusedCard
            img={trade}
            heading="Trades"
            para="Safeguard crypto resource trades and exchanging stages and increment resource liquidity and volume."
          />
          <MainFocusedCard
            img={guard}
            heading="Guardianship"
            para="Incorporate high level work processes and job based admittance consents into holding plans to meet any consistence or guideline necessities.."
          />
          <MainFocusedCard
            img={block}
            heading="Undertaking Blockchain"
            para="Premium level blockchain assurance forestalls key burglary and abuse and acquaints interoperability with any blockchain use case."
          />
        </div>
      </div>
    </div>
  );
};
