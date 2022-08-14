import React from 'react';
import './index.css';
import {state, subscribe} from "./state/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, stateType} from "./state/state";

const renderTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} addMessage={addMessage}/>,
        document.getElementById('root')
    );
}

renderTree(state);

subscribe(renderTree)