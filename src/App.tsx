import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";


function App() {
    return (

            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>

    );
}

export default App;
