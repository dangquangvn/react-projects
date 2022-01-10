import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    isLoading,
    isWaiting,
    quiz,
    index,
    correct,
    handleNextQuiz,
    isModalOpen,
  } = useGlobalContext();
  const { question, incorrect_answers, correct_answer } = quiz[0] || {};
  let allAnswers;
  if (incorrect_answers) {
    allAnswers = [...incorrect_answers, correct_answer];
  }
  if (isWaiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <section className='quiz'>
        <p className='correct-answers'>Correct Answer: 0/0</p>
        <article className='container'>
          {quiz.map(
            (
              { question, incorrect_answers, correct_answer },
              currentQuestion
            ) => {
              if (incorrect_answers) {
                allAnswers = [...incorrect_answers, correct_answer];
              }
              if (currentQuestion === index) {
                return (
                  <div key={currentQuestion}>
                    <h3>
                      current: {currentQuestion} vs index: {index}
                    </h3>
                    <h2>{question}</h2>
                    {allAnswers.length &&
                      allAnswers.map((answer, index) => (
                        <button className='answer-btn' key={index}>
                          {answer}
                        </button>
                      ))}
                  </div>
                );
              }
              // return <h1>{currentQuestion}</h1>;
            }
          )}
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
