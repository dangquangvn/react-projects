import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";
function App() {
  return (
    <main className='section'>
      <SearchForm />
      <Buttons />
      <Stories />
    </main>
  );
}

export default App;
