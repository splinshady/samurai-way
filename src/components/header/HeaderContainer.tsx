import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../state/redux-store";
import Header from "./Header";
import {authMeTC} from "../../state/auth-reduser";
import {compose} from "redux";
import Dialogs from "../dialogs/Dialogs";

type MapStatePropsType = {
    userID: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    authMeTC: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        this.props.authMeTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const MapStateProps = (state: stateType): MapStatePropsType=> {
    return {
        userID: state.auth.userID,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(MapStateProps, {authMeTC})
)(HeaderContainer)
