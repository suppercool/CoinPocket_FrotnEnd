import React from "react";
import mblpop from "../assets/img/mbl.png";
import email from "../assets/img/email.svg";
import close from "../assets/img/close.svg";
export const JoinCommunity = ({ setPopupState }) => {
  return (
    <div className="popupWrapper">
      <div className="popup">
        <img src={mblpop} alt="" />
        <div className="content_area">
          <img src={close} alt="" onClick={(e) => setPopupState(false)} />
          <h2>Welcome to our Communuty</h2>
          <h1>Join Our Communuty!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
            tortor mi posuere velit dui id gravida eget. Interdum orci,
            pellentesque orci amet, ipsum. Scelerisque aliquam eleifend
          </p>

          <div className="input_wrapper">
            <img src={email} alt="" />
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
