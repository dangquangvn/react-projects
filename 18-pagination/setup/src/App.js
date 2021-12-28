import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const [page, setPage] = useState(0);
  const { loading, data: personData } = useFetch();
  const [followers, setFollwers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollwers(personData[page]);
    console.log("page -->", page);
  }, [loading, page]);
  const checkNumber = (num) => {
    if (!personData.length) return;
    if (num > personData.length - 1) {
      return 0;
    } else if (num < 0) {
      return personData.length - 1;
    }
    return num;
  };

  const handlePage = (num) => {
    // if (!e.target.classList.contains("page-btn")) return;
    // console.log(e.target.dataset.page);
    // setPage(parseInt(e.target.dataset.page));
    setPage(num);
  };

  const handlePrevNextBtn = (e) => {
    if (e.target.classList.contains("next-btn")) {
      setPage((page) => checkNumber(page + 1));
    } else if (e.target.classList.contains("prev-btn")) {
      setPage((page) => checkNumber(page - 1));
    }
    console.log(e.target);
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination starter"}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={handlePrevNextBtn}>
              Prev
            </button>
            {personData.length &&
              personData.map((_, index) => (
                <button
                  className={`page-btn ${
                    parseInt(page) === index ? "active-btn" : ""
                  }`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              ))}
            <button className='next-btn' onClick={handlePrevNextBtn}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
