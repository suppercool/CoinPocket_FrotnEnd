import React from "react";

export const MainFocusedCard = ({ img, heading, para }) => {
  return (
    <div className="MainFocusedCard">
      <img src={img} alt="" />
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  );
};
