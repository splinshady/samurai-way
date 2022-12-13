import React from 'react';
import './index.css';
import {store} from "./state/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

const renderTree = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
}

renderTree()