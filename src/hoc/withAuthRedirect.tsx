import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {StateType} from "../state/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T> (Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<mapStateToPropsType, any> {
        render() {
            const {isAuth, ...restProps} = this.props
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...restProps as T}/>;
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;