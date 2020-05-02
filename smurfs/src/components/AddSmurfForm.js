import React, { useState } from "react";

export const AddSmurfForm = (dispatch) => {
  const [newSmurfText, setNewSmurfText] = useState("");

  const handleChanges = (e) => {
    setNewSmurfText(e.target.value);
  };

  return (
    <div>
      <form className="add-smurf-form">
        <input
          className="add-smurf"
          type="text"
          name="addSmurfText"
          value={newSmurfText}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_SMURF", payload: newSmurfText });
            setNewSmurfText("");
          }}
        >
          Add Smurf
        </button>
      </form>
    </div>
  );
};
