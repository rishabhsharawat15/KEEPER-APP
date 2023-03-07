import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [data, setData] = useState([]);
  //adding
  function addNotes(notes) {
    setData((prev) => {
      return [...prev, notes];
    });
  }
  //deleting
  function delte(ind) {
    setData((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== ind;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {data.map((dataItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={dataItem.title}
            content={dataItem.ynote}
            del={delte}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
