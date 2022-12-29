import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppTC} from "./state/auth-reduser";
import {StateType} from "./state/redux-store";
import CircularProgress from "@mui/material/CircularProgress";


class App extends React.Component<AppPropsType, any> {
  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.isInitialized) {
      return <CircularProgress/>
    }
    return (
      <div className="App">
        <HeaderContainer/>
        <Navbar/>
        <Route exact path='/' render={() => <Redirect to={'/users'}/>}/>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <LoginContainer/>}/>
      </div>

    )
  }
}

type MapStatePropsType = {
  isInitialized: boolean
}

type MapDispatchPropsType = {
  initializeAppTC: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchPropsType

const MapStateProps = (state: StateType): MapStatePropsType => {
  return {
    isInitialized: state.auth.isInitialized
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect(MapStateProps, {initializeAppTC})
)(App)
