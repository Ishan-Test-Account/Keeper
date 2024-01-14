import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Createarea from "./components/Createarea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteitem, index)=>{
        return index!==id;
      })
    })
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Createarea onAdd={addNote} />
      </div>
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
