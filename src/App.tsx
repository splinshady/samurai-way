import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import {storeType} from "./state/state";

type AppPropsType = {
    store: storeType,
}

function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}
                                                              addMessage={props.store.addMessage.bind(props.store)}/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
