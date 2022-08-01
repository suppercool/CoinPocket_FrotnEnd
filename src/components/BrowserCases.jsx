import React from "react";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
export const BrowserCases = () => {
  return (
    <div className="wrapperBrowser">
      <div className="BrowserCases common_width">
        <h1>Use Cases</h1>
        <p>
          A use case is a list of actions or event steps typically defining the
          interactions between a role.
        </p>

        <div className="cards_wrapper">
          <div className="card">
            <img src={card1} alt="" />
            <div className="presetation">
              <h1>Safeguard crypto</h1>
              <p>
                Safeguard crypto resource trades and exchanging stages and
                increment resource liquidity and volume.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <div className="presetation">
              <h1>Admittance consents</h1>
              <p>
                Incorporate high level work processes and job based admittance
                consents into holding plans to meet any consistence or guideline
                necessities..
              </p>
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <div className="presetation">
              <h1>Premium level</h1>
              <p>
                Premium level blockchain assurance forestalls key burglary and
                abuse and acquaints interoperability with any blockchain use
                case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
