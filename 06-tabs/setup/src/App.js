import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [index, setIndex] = useState(0);
  console.log("🚀TCL: ~ file: App.js ~ line 9 ~ App ~ index", index);
  const [jobData, setJobData] = useState([]);
  console.log(
    "🚀TCL: ~ file: App.js ~ line 9 ~ App ~ jobData",
    jobData,
    jobData[0]
  );
  const [isLoading, setLoading] = useState(true);
  // fetch api
  const fetchJob = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setJobData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <section>
      <div className="title">
        <h2>Tab Project - CV</h2>
        <div className="underline"></div>
      </div>
      {!jobData || isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="jobs-center">
            <div className="btn-containers">
              {jobData.map(({ id, company }, i) => (
                <button
                  className={`job-btn ${index === i ? "active-btn" : ""}`}
                  key={id}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {company}
                </button>
              ))}
            </div>
            <article className="job-info">
              <h3>{jobData[index]?.title}</h3>
              <h4>{jobData[index]?.company}</h4>
              <p className="job-date">{jobData[index]?.dates}</p>
              {jobData[index]?.duties.map((duty, i) => (
                <div className="job-desc" key={i}>
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              ))}
            </article>
          </div>
          <button className="btn">more info</button>
        </>
      )}
    </section>
  );
}

export default App;
