import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useParams } from "react-router-dom";

import DWML from "./DWML.js";
import Home from "./Home.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/DWML" element={<DWML />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
