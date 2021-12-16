import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { randomString } from "./utils";

function App() {
  // [name, setName]
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    list && localStorage.setItem("list", JSON.stringify(list));

    console.log(JSON.parse(localStorage.getItem("list")));
  }, [list]);

  const handleSubmit = async (e) => {
    if (!input) {
      //display alert
    } else if (input && isEditing) {
      // deal with edit
    } else {
      e.preventDefault();
      const newItem = { id: randomString(), title: input };
      setList([...list, newItem]);
      setInput("");
      console.log("🚀TCL: ~ file: App.js ~ line 8 ~ App ~ list", list);
    }
  };

  const handleClearAll = () => {
    setList([]);
  };

  const handleDelete = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
    console.log(id);
  };

  const handleEdit = (editItem) => {
    const currentItem = list.filter((item) => item.id === editItem.id);
    console.log(
      "🚀TCL: ~ file: App.js ~ line 34 ~ handleEdit ~ currentItem",
      currentItem
    );
    // setInput(currentItem.todo);
    setInput(editItem.todo);
  };

  return (
    <section className='section-center'>
      <form action='' className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud setup</h3>
        <div action='' className='form-control'>
          <input
            type='text'
            name='todo'
            id='todo'
            className='grocery'
            placeholder='e.g. eggs'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {!!list && (
        <div className='grocery-container'>
          <List
            items={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <button className='clear-btn' onClick={handleClearAll}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
