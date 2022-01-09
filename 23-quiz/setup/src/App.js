import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { isLoading, isWaiting } = useGlobalContext();
  if (isWaiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <h1>Question here</h1>
    </main>
  );
}

export default App;
