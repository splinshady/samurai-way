import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../../state/redux-store";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../state/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Loader} from "../common/loader";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userID: string) => void,
    unfollow: (userID: string) => void,
    setUsers: (users: UserType[]) => void,
    setTotalUsersCount: (newTotalUsersCount: number) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    setIsFetching: (isFetching: boolean) => void,
}
export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, any> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }
    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    render() {
        return this.props.isFetching ? <Loader /> : <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
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
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);