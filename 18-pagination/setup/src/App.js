import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const [person, setPerson] = useState();
  const { loading, data: personData } = useFetch();
  console.log("🚀TCL: ~ file: App.js ~ line 6 ~ App ~ person", personData);

  // if (loading) {
  // const { avatar_url: image, id, login: name } = personData;
  // const newPerson = { image, id, name };
  // setPerson(newPerson);
  // } else {
  //   setPerson([]);
  // }

  // const { image, id, name } = person;
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "pagination starter"}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        <div className='container'>
          {/* <img src={image} alt={name} /> */}
          {personData.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
