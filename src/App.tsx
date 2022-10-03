import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/ProfileContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


function App() {
    return (

        <div className="App">
            <Header/>
            <Navbar/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </div>

    );
}

export default App;
