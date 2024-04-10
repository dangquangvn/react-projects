import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [jobData, setJobData] = useState([]);
  const [index, setIndex] = useState(0);
  // fetch api
  const fetchJob = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJob();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  const { company, dates, duties, title } = jobData[index];
  return (
    <section className="section">
      <div className="title">
        <h2>Tab Project - CV</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-containers">
          {jobData.map((item, i) => (
            <button
              className={`job-btn ${index === i ? "active-btn" : ""}`}
              key={item.id}
              onClick={() => setIndex(i)}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, i) => (
            <div className="job-desc" key={i}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default App;
