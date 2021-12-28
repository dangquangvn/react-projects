import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const [person, setPerson] = useState();
  const [page, setPage] = useState(0);
  const { loading, data: personData } = useFetch();
  console.log(
    "🚀TCL: ~ file: App.js ~ line 7 ~ App ~ personData",
    personData,
    !!personData
  );

  const checkNumber = (num) => {
    if (!personData.length) return;
    if (num > personData.length - 1) {
      return 0;
    } else if (num < 0) {
      return personData.length - 1;
    }
    return num;
  };

  const handlePage = (e) => {
    if (!e.target.classList.contains("page-btn")) return;
    console.log(e.target.dataset.page);
    setPage(e.target.dataset.page);
  };

  const handlePrevNextBtn = (e) => {
    if (e.target.classList.contains("next-btn")) {
      setPage(checkNumber(page + 1));
    } else if (e.target.classList.contains("prev-btn")) {
      setPage(checkNumber(page - 1));
    }
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination starter"}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        <div className='container'>
          {personData.length &&
            personData[page].map((follower) => (
              <Follower key={follower.id} {...follower} />
            ))}
        </div>
      </div>
      <div className='btn-container'>
        <div className='prev-btn' onClick={handlePrevNextBtn}>
          Prev
        </div>
        {personData.length &&
          personData.map((_, index) => (
            <div
              className={`page-btn ${
                parseInt(page) === index ? "active-btn" : ""
              }`}
              key={index}
              data-page={index}
              onClick={handlePage}
            >
              {index}
            </div>
          ))}
        <div className='next-btn' onClick={handlePrevNextBtn}>
          Next
        </div>
      </div>
    </main>
  );
}

export default App;
