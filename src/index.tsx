import React from 'react';
import './index.css';
import {store} from "./state/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree)

renderTree()