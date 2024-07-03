import "./styles.css";
import React, { useState } from "react";
import Todo from "./Todo";
import Footer from "./Footer";
// import AddRoundedIcon from "@material-ui/icons/AddRounded";
// import CreateIcon from '@material-ui/icons/Create';
// import ReceiptIcon from '@material-ui/icons/Receipt';
export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  function upDate(event) {
    const newValue = event.target.value;
    setText(newValue);
  }
  function addItem() {
    setItems((previous) => {
      return [...previous, text];
    });

    setText("");
  }
  function deleteItem(id) {
    setItems((previous) => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className="container">
        <h2>
          {/* <ReceiptIcon />
          <CreateIcon /> */}
          to-do list
        </h2>
        <input
          type="text"
          name="todo"
          onChange={upDate}
          value={text}
          placeholder="write something to do"
        />
        <button onClick={addItem} class="add">
          {/* <AddRoundedIcon /> */}+
        </button>
        <ul>
          {items.map((item, index) => {
            return <Todo anItem={item} id={index} onChecked={deleteItem} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
