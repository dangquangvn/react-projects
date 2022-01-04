import React from "react";
import { Switch, Route } from "react-router-dom";
import Error from "./Error";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/movies/:id' children={<Movie />} />
      <Route exact path='*'>
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
