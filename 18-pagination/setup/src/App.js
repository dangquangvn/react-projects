import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const [person, setPerson] = useState();
  const { loading, data: personData } = useFetch();
  console.log("🚀TCL: ~ file: App.js ~ line 6 ~ App ~ person", personData);

  // if (loading) {
  const { avatar_url: image, id, login: name } = personData;
  const newPerson = { image, id, name };
  setPerson(newPerson);
  // } else {
  //   setPerson([]);
  // }

  // const { image, id, name } = person;
  return (
    <main>
      <div className='section-title'>
        <h2>pagination starter</h2>
        <div className='underline'></div>
      </div>
      <div className='list'>{/* <img src={image} alt={name} /> */}</div>
    </main>
  );
}

export default App;
