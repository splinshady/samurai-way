import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../../state/redux-store";
import {
    follow,
    setCurrentPage, setFollowingInProgress, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../state/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Loader} from "../common/loader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type MapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: UserType[]) => void,
    setTotalUsersCount: (newTotalUsersCount: number) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    setIsFetching: (isFetching: boolean) => void,
    setFollowingInProgress: (userID: string, inFollowing: boolean) => void,
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.items)
                    this.props.setTotalUsersCount(response.totalCount)
                })
        }
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getPage(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    render() {
        return this.props.isFetching ? <Loader/> : <Users users={this.props.users}
                                                          totalUsersCount={this.props.totalUsersCount}
                                                          pageSize={this.props.pageSize}
                                                          unfollow={this.props.unfollow}
                                                          follow={this.props.follow}
                                                          followingInProgress={this.props.followingInProgress}
                                                          setFollowingInProgress={this.props.setFollowingInProgress}
                                                          setCurrentPage={this.setCurrentPage}
                                                          currentPage={this.props.currentPage}/>

    }
};

const mapStateToProps = (state: stateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress,
})(UsersContainer);