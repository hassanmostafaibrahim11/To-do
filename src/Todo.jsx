import React, { useState } from "react";
// import DeleteOutlineSharpIcon from "@material-ui/icons/DeleteOutlineSharp";
export default function Todo(props) {
  const [isDone, setIsDone] = useState(false);

  function lineThrough() {
    setIsDone((pre) => {
      return !pre;
    });
  }
  return (
    <div className="myDiv">
      <li style={{ textDecoration: isDone ? "line-Through " : "none" }}>
        <button
          class="delete"
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          {/* <DeleteOutlineSharpIcon fontSize="small" /> */}
          <i class="fa fa-trash-o"></i>
        </button>
        <input type="checkbox" onClick={lineThrough} />
        {props.anItem}
      </li>
    </div>
  );
}
