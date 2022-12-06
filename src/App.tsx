import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";


function App() {
    return (

        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
        </div>

    );
}

export default App;
