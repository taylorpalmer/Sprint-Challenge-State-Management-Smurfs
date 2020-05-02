import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions/actions";

export const SmurfList = ({ getSmurfs, smurfs, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button></button>
      </div>
    );
  if (isFetching) {
    return <h2>Finding Smurfs</h2>;
  } else {
    return (
      <ul className="smurf-list">
        <li>{smurfs.name}</li>
        <button></button>
      </ul>
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
