import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {storeType} from "./state/state";
import DialogsContainer from "./components/dialogs/DialogsContainer";

type AppPropsType = {
    store: storeType,
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
