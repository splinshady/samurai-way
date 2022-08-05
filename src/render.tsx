import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, stateType} from "./state/state";

export const renderTree = (state: stateType) => {
    ReactDOM.render(
        <App state={state} addMessage={addMessage}/>,
        document.getElementById('root')
    );
}