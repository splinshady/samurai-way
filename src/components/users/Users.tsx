import React from 'react';
import {UserType} from "../../state/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "./user/User";
import style from "./User.module.css";

export type UsersPropsType = {
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  portionsSize: number
  setCurrentPage: (page: number) => void
  setFollowingInProgress: (userID: string, inFollowing: boolean) => void
  currentPage: number
  portionNumber: number
  setPortionNumber: (portionNumber: number) => void
  followingInProgress: string[]
  followUserTC: (useID: string) => void
  unfollowUserTC: (useID: string) => void
}

export function Users(props: UsersPropsType) {

  return <div className={`${style.users} shadow_section`}>
    <Paginator pageSize={props.pageSize}
               setCurrentPage={props.setCurrentPage}
               currentPage={props.currentPage}
               totalItemsCount={props.totalUsersCount}
               portionSize={props.portionsSize}
               portionNumber={props.portionNumber}
               setPortionNumber={props.setPortionNumber}
    />
    <div className={`${style.users_container}`}>
      {props.users.map(user => {
        return <User user={user}
                     key={user.id}
                     followUserTC={props.followUserTC}
                     followingInProgress={props.followingInProgress}
                     unfollowUserTC={props.unfollowUserTC}/>
      })}
    </div>
  </div>
}