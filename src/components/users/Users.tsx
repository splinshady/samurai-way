import React from 'react';
import style from "./User.module.css";
import defaultPhoto from '../../assets/icons/incubator.png'
import {UserType} from "../../state/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
}

export function Users(props: UsersPropsType) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        if (i < 5) {
            pages.push(i)
        } else {
            pages.push(pageCount)
        }
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span key={page}
                             className={props.currentPage === page ? style.currentPage : ''}
                             onClick={() => {
                                 props.setCurrentPage(page)
                             }}
                >{` ${page} `}</span>
            })}
        </div>
        {props.users.map(user => {
            return <div key={user.id}>
                <NavLink to={`profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : defaultPhoto}
                         alt="user's avatar"
                         className={style.user_avatar}/>
                </NavLink>
                {user.followed
                    ? <button onClick={() => {
                        usersAPI.unfollowUser(user.id)
                            .then(response => {
                                if (response.resultCode === 0) props.unfollow(user.id)
                            })
                    }}>unfollow</button>
                    : <button onClick={() => {
                        usersAPI.followUser(user.id)
                            .then(response => {
                                if (response.resultCode === 0) props.follow(user.id)
                            })
                    }}>follow</button>
                }
                <h3>{user.name}</h3>
                <span>{user.status}</span>
            </div>
        })}
    </div>
}