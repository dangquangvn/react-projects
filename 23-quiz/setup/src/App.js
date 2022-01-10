import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import { shuffle } from "./utils";
function App() {
  const {
    isLoading,
    isWaiting,
    quiz,
    index,
    correct,
    handleNextQuiz,
    isModalOpen,
    checkAnswer,
  } = useGlobalContext();
  // const { question, incorrect_answers, correct_answer } = quiz[0] || {};
  // let allAnswers;
  // if (incorrect_answers) {
  //   allAnswers = [...incorrect_answers, correct_answer];
  // }
  if (isWaiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = quiz[index];
  let allAnswers = [];
  if (incorrect_answers) {
    //= method 1: use shuffle function
    // allAnswers = [...incorrect_answers, correct_answer];
    // allAnswers = shuffle(allAnswers);
    //= method 2:
    allAnswers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    console.log("🚀TCL: ~ file: App.js ~ line 40 ~ App ~ tempIndex", tempIndex);
    if (tempIndex === 3) {
      allAnswers.push(correct_answer);
    } else {
      allAnswers.push(allAnswers[tempIndex]);
      allAnswers[tempIndex] = correct_answer;
    }
  }

  return (
    <main>
      <section className='quiz'>
        <p className='correct-answers'>
          Correct Answer: {correct}/{index}
        </p>
        <article className='container'>
          <h3>
            current: {correct} vs index: {index}
          </h3>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          {/* <h2>{question}</h2> */}
          {allAnswers.length &&
            allAnswers.map((answer, index) => (
              <button
                className='answer-btn'
                key={index}
                onClick={() => checkAnswer(correct_answer === answer)}
              >
                {answer}
              </button>
            ))}
        </article>
        <button className='next-question' onClick={() => handleNextQuiz()}>
          Next Question
        </button>
      </section>
      {isModalOpen && <Modal />}
      {/* <Modal /> */}
    </main>
  );
}

export default App;
