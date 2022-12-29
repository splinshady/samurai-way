import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../state/redux-store";
import {
  followUserTC, getUsersTC,
  setCurrentPage, setCurrentPageTC, setFollowingInProgress, setIsFetching, setPortionNumber,
  setTotalUsersCount,
  setUsers, unfollowUserTC,
  UserType
} from "../../state/users-reducer";
import {Loader} from "../common/loader";
import {compose} from "redux";

type MapStatePropsType = {
  users: UserType[]
  pageSize: number
  portionsSize: number
  totalUsersCount: number
  currentPage: number
  portionNumber: number
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
  setPortionNumber: (portionNumber: number) => void,
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
    return <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  portionsSize={this.props.portionsSize}
                  followingInProgress={this.props.followingInProgress}
                  setFollowingInProgress={this.props.setFollowingInProgress}
                  setCurrentPage={this.setCurrentPage}
                  portionNumber={this.props.portionNumber}
                  setPortionNumber={this.props.setPortionNumber}
                  followUserTC={this.props.followUserTC}
                  unfollowUserTC={this.props.unfollowUserTC}
                  currentPage={this.props.currentPage}/>

  }
};

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    portionNumber: state.usersPage.portionNumber,
    pageSize: state.usersPage.pageSize,
    portionsSize: state.usersPage.portionsSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setFollowingInProgress,
    followUserTC,
    unfollowUserTC,
    getUsersTC,
    setPortionNumber,
    setCurrentPageTC,
  })
)(UsersContainer)