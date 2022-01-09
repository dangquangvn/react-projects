import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import useFetch from "./hooks/useFetch";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const CATEGORY_ID = {
  SPORTS: 21,
  HISTORY: 23,
  POLITICS: 24,
};
const CATEGORY_NAME = {
  SPORTS: "sports",
  HISTORY: "history",
  POLITICS: "politics",
};

const checkCategory = (category) => {
  switch (category) {
    case CATEGORY_NAME.SPORTS:
      return CATEGORY_ID.SPORTS;
    case CATEGORY_NAME.HISTORY:
      return CATEGORY_ID.HISTORY;
    case CATEGORY_NAME.POLITICS:
      return CATEGORY_ID.POLITICS;
    default:
      return category;
  }
};

// const url = ''

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [numQuestions, setNumQuestions] = useState(10);
  // const [category, setCategory] = useState(21);
  // const [difficulty, setDifficulty] = useState("easy");
  const [input, setInput] = useState({
    numQuestions: 10,
    category: CATEGORY_ID.SPORTS,
    difficulty: "easy",
  });
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [isFetch, setFetch] = useState(false);
  let urlNumQuestion = `amount=${input.numQuestions}`;
  let urlCategory = `&category=${checkCategory(input.category)}`;
  let urlDifficulty = `&difficulty=${input.difficulty}`;
  let url = `${API_ENDPOINT}${urlNumQuestion}${urlCategory}${urlDifficulty}&type=multiple`;
  // let quiz, isLoading, error;

  const fetchQuestions = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // if(data.response) {
      setQuiz(data.results);
      // }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  console.log("🚀TCL: ~ file: context.js ~ line 24 ~ AppProvider ~ data", quiz);

  const { numQuestions, category, difficulty } = input;

  const handleChange = (e) => {
    let inputName = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [inputName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider value={{ ...input, quiz, handleChange, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
