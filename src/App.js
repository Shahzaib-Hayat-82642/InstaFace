import React from "react";
import "./App.css";
import Login from "./components/Login";
import Context from "./Global/Context";
import Home from "./components/Home";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
      {Context.user ? (
        <Home />
      ) : (
        <Context>
          {" "}
          <Login />
          <Model />
        </Context>
      )}{" "}
    </div>
  );
}

export default App;
