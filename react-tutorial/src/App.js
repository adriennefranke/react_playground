import { useState } from "react";
import "./App.css";
import { ToDo } from "./components/ToDo";
import { ToDoAppName } from "./components/ToDoAppName";

const App = () =>  {
   const [state, setState] = useState(0);
   return (
    // <div className="App">
    //   <p>{state}</p>
    //   <button onClick={() => setState(state+1)}>Increment state</button>
    // </div>
    <div>
      <ToDoAppName />
      <ToDo />
    </div>
   );
};

export default App;
