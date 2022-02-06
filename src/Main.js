import React, { Component } from 'react'
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useParams } from "react-router-dom";

import MainPage from './MainPage.js';


class Main extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return(

    <div >
<Routes>
    <Route path='/' element={<MainPage />}></Route>
      </Routes>
  </div>
        )
        };
}

export default Main;