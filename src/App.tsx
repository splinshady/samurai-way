import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer, {HeaderContainerPropsType} from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppTC} from "./state/auth-reduser";
import {StateType} from "./state/redux-store";
import {Loader} from "./components/common/loader";


class App extends React.Component<AppPropsType, any> {
  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.isInitialized) {
      return <h2>Please wait...</h2>
    }
    return (
      <div className="App">
        <HeaderContainer/>
        <Navbar/>
        <Route path='/dialogs' render={
          () => <DialogsContainer/>
        }

        />
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
