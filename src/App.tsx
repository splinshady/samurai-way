import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import {stateType} from "./state/state";

type AppPropsType = {
    state: stateType,
    addMessage: (mess: string) => void
}

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>}/>
                <Route path='/profile' render={() => <Profile />}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
