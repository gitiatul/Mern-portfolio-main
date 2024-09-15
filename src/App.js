import React from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";

const App = () => {
  return (
    <Router>
      <div className="h-16">
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </Router>
  );
};

export default App;
