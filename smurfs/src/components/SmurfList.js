import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/actions";
import { AddSmurfForm } from "../components/AddSmurfForm";

export const SmurfList = ({ getSmurfs, smurfs, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h1>Smurf List</h1>
        <h2>{error}</h2>
        <button onClick={getSmurfs}>Get Smurfs</button>
        <AddSmurfForm />
      </div>
    );
  if (isFetching) {
    return <h2>Finding Smurfs</h2>;
  } else {
    return (
      <div>
        <h1>Smurf List</h1>
        <ul className="smurf-list">
          <li>{smurfs.name}</li>
          <button onClick={getSmurfs}>Get Smurfs</button>
        </ul>
        <AddSmurfForm />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
