import React, { useState, useContext } from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";

const AddSmurfForm = () => {
  const { smurfs, setSmurfs } = useContext(SmurfContext);

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: null,
    height: "",
  });

  const dataRequests = (e) => {
    e.preventDefault();

    console.log(smurfs);

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post("http://localhost:3333/smurfs", { ...newSmurf })
      .then((res) => console.log("post: ", res))
      .catch((err) => {
        console.log("post: ", err);
      });
  };

  const changeHandler = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="new-smurf-form">
      <form onSubmit={dataRequests}>
        <input name="name" onChange={changeHandler} placeholder="Smurfy Name" />
        <input name="age" onChange={changeHandler} placeholder="Smurfy Age" />
        <input
          name="height"
          onChange={changeHandler}
          placeholder="Smurfy Height"
        />
        <button type="submit">Add Smurf!</button>
      </form>
    </section>
  );
};

export default AddSmurfForm;
