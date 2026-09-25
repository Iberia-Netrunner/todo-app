import "./App.css";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Hjärnont av MAP",
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
//Använder filter för att splice rör i original state-arrayen den blir immutable (befintlig data ska inte ändra, bara ersättas med ny)
//medan filter endast filtrerar bort den item man klickat bort
function handleRemove (textToRemove) {
const kvar = todos.filter(function (todo) {
  return todo !== textToRemove;
});
setTodos(kvar);
}

//Todo:Detta skalar inte- behöver loop
//Map () loopar genom todos-arrayen och skapar <li> per item
//key={todo} ger varje element unikt ID så React vet vad som ska ändras/sortering
  return (
    <main>
      <h1>My-todo-list</h1>
      <p>Antal uppgifter: {todos.length}</p> 
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo}>
             {todo} {" "}
             <button type="button" onClick={function () {handleRemove (todo); }}>
               Ta bort
             </button>
             </li>
           );  
         })}
      </ul>
      <input type ="text" value={draft} onChange={handleChange} placeholder="Lösenord" />
      <button type="add-button" onClick={handleAdd}>Lägg till</button>
      <p>Kladd just nu {draft}</p><button type="button" onClick={handleClear}>rensa</button>
      
    </main>
  );
}

export default App;

