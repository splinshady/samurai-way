import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {stateType} from "../../state/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../state/users-reducer";
import {Dispatch} from "redux";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: UserType[]) => void,
}

const mapStateToProps = (state: stateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);