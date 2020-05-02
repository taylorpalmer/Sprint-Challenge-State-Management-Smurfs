import React, { Component } from "react";
import "./App.css";
import { SmurfList } from "./SmurfList";

export const App = (getSmurfs, smurfs, isFetching, error) => {
  return (
    <div className="App">
      <SmurfList />
    </div>
  );
};
