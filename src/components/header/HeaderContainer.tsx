import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../state/redux-store";
import Header from "./Header";
import {authType, setAuthUserData} from "../../state/auth-reduser";
import axios from "axios";

type MapStatePropsType = {
    userID: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (userID: string, login: string, email: string) => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                const data = response.data.data
                if (response.data.resultCode === 0) this.props.setAuthUserData(data.id, data.login, data.email)
            })

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

export default connect(MapStateProps, {setAuthUserData})(HeaderContainer)