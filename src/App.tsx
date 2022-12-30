import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    axios.get("http://localhost:3000/api/person").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(() => {
    getPersons();
  }, []);

  const newPerson = async () => {
    const firstName = window.prompt("Enter a first name");
    const lastName = window.prompt("Enter a last name");
    const response = await axios.post("http://localhost:3000/api/person", {
      firstName: firstName,
      lastName: lastName,
    });
    console.log(response.data);
    getPersons();
  };

  const deletePerson = async (id: string) => {
    const response = await axios.delete(`http://localhost:3000/api/person/${id}`);
    console.log(response.data);
    getPersons();
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
      <h1>CRUD for Odin Project</h1>
      <div className="card">
        <button onClick={() => newPerson()}>Send</button>
        <button>Get</button>
        <p>List of persons:</p>
        {persons.map(({ id, firstName, lastName }) => {
          return (
            <div key={id}>
              ({id}) {firstName} {lastName}
              <span>
                <button onClick={() => deletePerson(id)}>Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
