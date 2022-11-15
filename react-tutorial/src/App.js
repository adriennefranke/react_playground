import { useState } from "react";
import "./App.css";

const App = () =>  {
   const [state, setState] = useState(0);
   return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => setState(state+1)}>Increment state</button>
    </div>
   );
};

export default App;
