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
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    list && localStorage.setItem("list", JSON.stringify(list));

    console.log(JSON.parse(localStorage.getItem("list")));
  }, [list]);

  /**
   * @description function handle setAlert
   * @param {boolean} [show=false]
   * @param {string} [type='']
   * @param {string} [msg='']
   */
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) {
      //display alert
      showAlert(true, "danger", "please enter value");
    } else if (input && isEditing) {
      // deal with edit
      showAlert(true, "success", "value changed");
    } else {
      const newItem = { id: randomString(), title: input };
      setList([...list, newItem]);
      setInput("");
      showAlert(true, "success", "item added to the list");
      console.log("🚀TCL: ~ file: App.js ~ line 8 ~ App ~ list", list);
    }
  };

  const handleClearAll = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const handleDelete = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
    showAlert(true, "danger", "item removed");
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
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
