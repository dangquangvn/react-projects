import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { handlePage, page, nbPages } = useGlobalContext();
  return (
    <div className='btn-container'>
      <button className='btn-prev' onClick={(e) => handlePage(e)}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button className='btn-next' onClick={(e) => handlePage(e)}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
