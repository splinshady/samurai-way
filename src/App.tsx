import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
