import React, { useState } from "react";

function Createarea(props) {
  const [inputnote, setinputnote] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setinputnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleclick(event) {
    props.onAdd(inputnote);
    setinputnote({
        title: "",
        content: "",
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={inputnote.title}
          onChange={handlechange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={inputnote.content}
          onChange={handlechange}
          rows="3"
        />
        <button onClick={handleclick}>Add</button>
      </form>
    </div>
  );
}

export default Createarea;
