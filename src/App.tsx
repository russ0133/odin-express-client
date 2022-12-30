import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const newPerson = async () => {
    const response = await axios.post("http://localhost:3000/api/person", {
      firstName: "John",
      lastName: "Smith",
    });
    console.log(response.data);
  };

  const getPersons = async () => {
    const response = await axios.get("http://localhost:3000/api/person");
    console.log(response.data);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => newPerson()}>Send</button>
        <button onClick={() => getPersons()}>Get</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
