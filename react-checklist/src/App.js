import { createContext, useState } from "react";
import "./App.css";
import CheckList from "./CheckList.js";

export const DataLayer = createContext();

function App() {
  const initialState = {
    citizen: false,
    age_limit: false,
  };

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
    
    <DataLayer.Provider value={{state , setState}}>
      <CheckList />
    </DataLayer.Provider>
    </div>
  );
}

export default App;
