import "./App.css";
//Hämtar react hooks, så useState komponenter får ett minne, som förändras.
import { useState } from "react";

//Huvudkomponent som returnerar JSX/HTML till skärm.
//State-variabel, seTodos använd för uppdatera listan.
function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Hjärnont av MAP",
    "Exam 2 senare",
]);

//State-variabel. Kladd state som speglar vad användaren skriver i, startar tomt.
const [draft, setDraft] = useState ("");

//Funktion som fångar det som skrivs (handlechange)
//(e)=ringklocka "något har skett".
//e.target.value reagerar på varje tagenttryckning och uppdaterar draft(speglingen).
function handleChange (e) {
  setDraft(e.target.value);
}
//Funktion som rensar kladdet
function handleClear () {
  setDraft ("")
}
//Tar bort mellanslag (gör dom ogiltiga)
//Om text är lika med tomt, skriv ut INGET/Stopp
//...todos, text skapar en ny array med alla gamla todos plus nya text längst ned (spread operator).
//Setdraft (""); tömmer kladdet efter ny item lagts till.
function handleAdd() {
  const text = draft.trim ();
  if (text === "") return;
  setTodos([...todos, text]);
  setDraft (""); 
}
//Använder filter för att splice rör i original state-arrayen den blir immutable (befintlig data ska inte ändra, bara ersättas med ny)
//Medan filter endast filtrerar bort den item man klickat bort
//Filter går genom listan todos och en i taget.
//Parameter todo är just den enskilda item som loopen tittar på.
//Todo !== texttoRemove betyder behåll den här bara om den inte är samma sak som den vi vill ta bort.
//Resultat blir att alla andra items/element sparas i den nya variabeln kvar.
function handleRemove (textToRemove) {
const kvar = todos.filter(function (todo) {
  return todo !== textToRemove;
});
setTodos(kvar);
}

//Todo:Detta skalar inte- behöver loop
//Map () loopar genom todos-arrayen och skapar <li> per item
//key={todo} ger varje element unikt ID så React vet vad som ska ändras/sortering
//Ta bort knappen, varje rad får en egen knapp som är kopplad till handleremove med just den radens text.
//Talar om för webbläsaren att det här är ett vanligt textfält
//Value ={draft}: Gör fältet konrollerat, visar alltid det värde draft-state har.
//onChange={Handlechange}: Fångar upp när användaren skriver och uppdaterar staten i realtid.
//onClick={handleAdd}: Tar värdet från draft och flyttar in det i todos-listan.  

return (
    <main>
      <h1>My-todo-list</h1>
      <p>Antal uppgifter: {todos.length}</p> 
      <ul>
        {todos
          .filter(function (todo) {
            return todo
            .toLowerCase()
            .includes(draft.toLowerCase());
          })

        
        
        .map(function (todo) {
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

