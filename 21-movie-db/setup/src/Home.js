import React, { useState } from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import { useGlobalContext } from "./context";
const Home = () => {
  // const [searchQuery, setSearchQuery] = useState("batman");
  const { movies, loading, searchQuery, setSearchQuery, errorValue } =
    useGlobalContext();
  console.log("🚀TCL: ~ file: Home.js ~ line 8 ~ Home ~ movies", movies);
  return (
    <main className='section'>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
