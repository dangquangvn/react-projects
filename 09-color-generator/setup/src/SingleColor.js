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

  //* copy text to clipboard func
  // async function copyTextToClipboard(text) {
  //   if ("clipboard" in navigator) {
  //     return await navigator.clipboard.writeText(text);
  //   } else {
  //     return document.execCommand("copy", true, text);
  //   }
  // }

  //handle copy click
  // const handleCopyClick = async () => {
  //   console.log(
  //     "🚀TCL: ~ file: SingleColor.js ~ line 51 ~ SingleColor ~ timeout",
  //     timeout
  //   );
  //   try {
  //     const text = await copyTextToClipboard(`#${hex}`);
  //     setIsCopied(true);
  //     // clearTimeout(timeout);
  //     // timeout = setTimeout(() => {
  //     //   setIsCopied(false);
  //     // }, 5000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleCopyClick = () => {
    return handleCopy(`#${hex}`);
  };
  // useDebounce(isCopied, 5000, () => setIsCopied(false));

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
