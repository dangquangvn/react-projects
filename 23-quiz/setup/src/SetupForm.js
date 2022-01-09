import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { numQuestions, category, difficulty, handleChange, handleSubmit } =
    useGlobalContext();
  return (
    <div className='quiz quiz-small'>
      <div className='container'>
        <form action='' className='setup-form'>
          <h2>Setup Quiz</h2>
          <div className='form-control'>
            <label htmlFor='numQuestions'>Number Of Question</label>
            <input
              type='text'
              name='numQuestions'
              id='numQuestions'
              className='form-input'
              value={numQuestions}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>Category</label>
            <select
              type='text'
              id='category'
              className='form-input'
              name='category'
              value={category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='politics'>politics</option>
              <option value='history'>history</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>Select Difficulty</label>
            <select
              type='text'
              id='difficulty'
              name='difficulty'
              className='form-input'
              value={difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          <button
            type='submit'
            className='submit-btn'
            onClick={(e) => handleSubmit(e)}
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupForm;
