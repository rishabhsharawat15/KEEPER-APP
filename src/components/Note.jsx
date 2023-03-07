import React from "react";

function Note(props) {
  function hand() {
    console.log("hi");
    props.del(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={hand}></button>
    </div>
  );
}

export default Note;
