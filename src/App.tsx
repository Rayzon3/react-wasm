import { useEffect, useState } from "react";
import init, { add } from "wasm-lib";
//
import logo from "./logo.svg";
import "./App.css";


function App() {

  const [digitOne, setdigitOne] = useState(0)
  const [digitTwo, setdigitTwo] = useState(0)
  const [ans, setAns] = useState(0);

  useEffect(() => {
    init().then(() => {
      setAns(add(digitOne, digitTwo));
    });
  }, [digitOne, digitTwo]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input placeholder="1st Number" type="number" onChange={(e) => setdigitOne(e.target.value as unknown as number)} />
        <input placeholder="2nd Number" type="number" onChange={(e) => setdigitTwo(e.target.value as unknown as number)} />
        <p>{digitOne || 0} + {digitTwo || 0} = {ans}</p>
      </header>
    </div>
  );
}

export default App;
