import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../../state/redux-store";
import {
    followUserTC, getUsersTC,
    setCurrentPage, setCurrentPageTC, setFollowingInProgress, setIsFetching,
    setTotalUsersCount,
    setUsers, unfollowUserTC,
    UserType
} from "../../state/users-reducer";
import {Loader} from "../common/loader";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type MapDispatchPropsType = {
    setUsers: (users: UserType[]) => void,
    setTotalUsersCount: (newTotalUsersCount: number) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    setIsFetching: (isFetching: boolean) => void,
    setFollowingInProgress: (userID: string, inFollowing: boolean) => void,
    followUserTC: (useID: string) => void,
    unfollowUserTC: (useID: string) => void,
    getUsersTC: (users: UserType[], currentPage: number, pageSize: number) => void,
    setCurrentPageTC: (pageNumber: number, pageSize: number) => void,
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, any> {
    componentDidMount() {
        this.props.getUsersTC(this.props.users, this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPageTC(pageNumber, this.props.pageSize)
    }

    render() {
        return this.props.isFetching ? <Loader/> : <Users users={this.props.users}
                                                          totalUsersCount={this.props.totalUsersCount}
                                                          pageSize={this.props.pageSize}
                                                          followingInProgress={this.props.followingInProgress}
                                                          setFollowingInProgress={this.props.setFollowingInProgress}
                                                          setCurrentPage={this.setCurrentPage}
                                                          followUserTC={this.props.followUserTC}
                                                          unfollowUserTC={this.props.unfollowUserTC}
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
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress,
    followUserTC,
    unfollowUserTC,
    getUsersTC,
    setCurrentPageTC,
})(UsersContainer);