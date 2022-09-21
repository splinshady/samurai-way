import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {stateType} from "../../state/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../state/users-reducer";
import {Dispatch} from "redux";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: UserType[]) => void,
    setTotalUsersCount: (newTotalUsersCount: number) => void,
    setCurrentPage: (newCurrentPage: number) => void,
}

const mapStateToProps = (state: stateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setTotalUsersCount: (newTotalUsersCount) => {
            dispatch(setTotalUsersCountAC(newTotalUsersCount))
        },
        setCurrentPage: (newCurrentPage) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);