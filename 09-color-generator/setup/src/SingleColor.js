import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import { useDebounce } from "./hooks/debounceHook";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";

const SingleColor = ({ colorShade }) => {
  const { weight, hex, type } = colorShade;
  // copy text
  //& we will use custom hook instead
  // const [isCopied, setIsCopied] = useState(false);
  const [isCopied, handleCopy] = useCopyToClipboard(5000);

  const handleCopyClick = () => {
    return handleCopy(`#${hex}`);
  };

  return (
    <article
      className={`color ${type === "shade" ? "color-light" : ""}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleCopyClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      {isCopied && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
