import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./router";

import { Provider } from "react-redux"
import store from "./store/configureStore";

import "./stylesheet/_stylesheet.css";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <RootRouter/>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

