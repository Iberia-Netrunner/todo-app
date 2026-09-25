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



  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
        <li>{todos[3]}</li>
        <li>{todos[4]}</li>
      </ul>
      <input type ="text" value={draft} onChange={handleChange} 
      placeholder="Lösenord" />
      <p>Kladd just nu {draft}</p><button type="button" onClick={handleClear}>rensa</button>
      
      
    </main>
  );
}

export default App;

