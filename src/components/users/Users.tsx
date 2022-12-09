import React from 'react';
import style from "./User.module.css";
import defaultPhoto from '../../assets/icons/incubator.png'
import {setCurrentPageTC, UserType} from "../../state/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./user/User";

export type UsersPropsType = {
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  setCurrentPage: (pageNumber: number) => void
  setFollowingInProgress: (userID: string, inFollowing: boolean) => void
  currentPage: number
  followingInProgress: string[]
  followUserTC: (useID: string) => void
  unfollowUserTC: (useID: string) => void
}

export function Users(props: UsersPropsType) {

  return <div>
    <Paginator {...props}/>
    {props.users.map(user => {
      return <User user={user}
                   key={user.id}
                   followUserTC={props.followUserTC}
                   followingInProgress={props.followingInProgress}
                   unfollowUserTC={props.unfollowUserTC}/>
    })}
  </div>
}