import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  const [faqData, setFaqData] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section>
          {faqData &&
            faqData.map(({ id, title, info }) => (
              <SingleQuestion key={id} title={title} info={info} />
            ))}
        </section>
      </div>
    </main>
  );
}

export default App;
