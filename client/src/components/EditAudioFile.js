import React, { useState, useEffect } from "react";
import axios from "axios";

// import "./App.css";

const apiURL = "http://localhost:8080";
const audioURL = `${apiURL}/api/audio`;

const EditAudioFile = () => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [audioFiles, setAudioFiles] = useState([]);
  const [audioFile, setAudioFile] = useState("");

  //   React.useEffect(() => {
  //     const json = localStorage.getItem("todos");
  //     const loadedTodos = JSON.parse(json);
  //     if (loadedTodos) {
  //       setTodos(loadedTodos);
  //     }
  //   }, []);

  //   React.useEffect(() => {
  //     const json = JSON.stringify(todos);
  //     localStorage.setItem("todos", json);
  //   }, [todos]);

  //   function handleSubmit(e) {
  //     e.preventDefault();

  //     const newTodo = {
  //       id: new Date().getTime(),
  //       text: audioFile,
  //       completed: false,
  //     };
  //     setTodos([...todos].concat(newTodo));
  //     setTodo("");
  //   }

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(audioURL);
      setAudioFiles(results.data);
    }
    getResults();
  }, []);
  console.log(audioFiles);

  //   function deleteTodo(id) {
  //     let updatedTodos = [...todos].filter((audioFile) => todo.id !== id);
  //     setTodos(updatedTodos);
  //   }

  function toggleComplete(id) {
    let updatedAudioFiles = [...audioFiles].map((audioFile) => {
      if (audioFile.id === id) {
        audioFile.completed = !audioFile.completed;
      }
      return audioFile;
    });
    setAudioFiles(updatedAudioFiles);
  }

  function submitEdits(id) {
    const updatedAudioFiles = [...audioFiles].map((audioFile) => {
      if (audioFile.id === id) {
        audioFile.text = editingText;
      }
      return audioFile;
    });
    setAudioFiles(updatedAudioFiles);
    setTodoEditing(null);
  }

  return (
    <div id="audioFile-list">
      <h1>Todo List</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={audioFile}
        />
        <button type="submit">Add Todo</button>
      </form> */}
      {audioFiles.map((audioFile) => (
        <div key={audioFile.id} className="audioFile">
          <div className="audioFile-text">
            <input
              type="checkbox"
              id="completed"
              checked={audioFile.completed}
              onChange={() => toggleComplete(audioFile.id)}
            />
            {audioFile.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{audioFile.text}</div>
            )}
          </div>
          <div className="audioFile-actions">
            {audioFile.id === todoEditing ? (
              <button onClick={() => submitEdits(audioFile.id)}>
                Submit Edits
              </button>
            ) : (
              <button onClick={() => setTodoEditing(audioFile.id)}>Edit</button>
            )}

            {/* <button onClick={() => deleteTodo(audioFile.id)}>Delete</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditAudioFile;
