import React from 'react';
import {setCurrentPageTC, UserType} from "../../state/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./user/User";

export type UsersPropsType = {
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  portionsSize: number
  setCurrentPage: (page: number) => void
  setFollowingInProgress: (userID: string, inFollowing: boolean) => void
  currentPage: number
  followingInProgress: string[]
  followUserTC: (useID: string) => void
  unfollowUserTC: (useID: string) => void
}

export function Users(props: UsersPropsType) {

  return <div>
    <Paginator pageSize={props.pageSize}
               setCurrentPage={props.setCurrentPage}
               currentPage={props.currentPage}
               totalItemsCount={props.totalUsersCount}
               portionSize={props.portionsSize}
    />
    {props.users.map(user => {
      return <User user={user}
                   key={user.id}
                   followUserTC={props.followUserTC}
                   followingInProgress={props.followingInProgress}
                   unfollowUserTC={props.unfollowUserTC}/>
    })}
  </div>
}