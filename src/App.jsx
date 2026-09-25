import "./App.css";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Exam 2 senare",
  ]);
const [draft, setDraft] = useState ("");

function handleChange (e) {
  setDraft(e.target.value);
}

function handleClear () {
  setDraft ("")
}

function handleAdd() {
  const text = draft.trim ();
  if (text === "") return;
  setTodos([...todos, text]);
  setDraft ("");
}


//Todo:Detta skalar inte- behöver loop
  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <ul>
        {todos.map(function (todo) {
        return <li key={todo}>{todo}</li>;
         
        })}
        </ul>
      <input type ="text" value={draft} onChange={handleChange} 
      placeholder="Lösenord" />
      <p>Kladd just nu {draft}</p><button type="button" onClick={handleClear}>rensa</button>
      <button type="add-button" onClick={handleAdd}>Lägg till</button>
      
    </main>
  );
}

export default App;

