import React, { useContext } from "react";

import { SmurfContext } from "../contexts/SmurfContext";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log(smurfs);

  return (
    <div className="smurf-card">
      {smurfs.map((smurf) => {
        return (
          <section className="smurf" key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </section>
        );
      })}
    </div>
  );
};

export default SmurfList;
