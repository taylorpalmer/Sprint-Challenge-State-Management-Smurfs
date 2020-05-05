import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";
import SmurfList from "../components/SmurfList";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
        <h1>Smurf Village</h1>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
