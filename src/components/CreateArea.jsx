import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    ynote: ""
  });

  function add(event) {
    event.preventDefault();
    setNote({
      title: "",
      ynote: ""
    });
    props.onAdd(note);
    //again set additem to zero so that it want stack
  }

  function handel(event) {
    const name = event.target.name;
    const value = event.target.value;

    //since event is also a object
    //const {value, name} =event.target

    setNote((preValue) => {
      //event can,t be used inside setname or innner function
      if (name === "title") {
        return {
          title: value,
          ynote: preValue.ynote
        };
      } else if (name === "note") {
        return {
          title: preValue.title,
          ynote: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handel}
          value={note.title}
        />
        <textarea
          name="note"
          placeholder="Take a note..."
          rows="3"
          onChange={handel}
          value={note.ynote}
        />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
