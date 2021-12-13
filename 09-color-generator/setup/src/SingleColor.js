import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ colorShade }) => {
  const { weight, hex, type } = colorShade;
  console.log(
    `🚀TCL: ~ file: SingleColor.js ~ line 11 ~ SingleColor, colorShade:`,
    colorShade
  );

  return (
    <article
      className={`color ${type === "shade" ? "color-light" : ""}`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};

export default SingleColor;
