import { useEffect, useState } from "react";
import init, { add } from "wasm-lib";
//
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [ans, setAns] = useState(0);

  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>1 + 1 = {ans}</p>
      </header>
    </div>
  );
}

export default App;
