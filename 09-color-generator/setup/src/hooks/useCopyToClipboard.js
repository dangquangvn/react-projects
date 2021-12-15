import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";

export function useCopyToClipboard(timeout = null) {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!timeout) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  function handleCopy(text) {
    if (typeof text === "string" || typeof text == "number") {
      // copy
      copy(text.toString());
      setCopied(true);
    } else {
      // don't copy
      setCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
      alert(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }

  return [isCopied, handleCopy];
}
