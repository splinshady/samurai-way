import React from 'react'

import { NavLink } from 'react-router-dom'

import defaultPhoto from '../../../assets/icons/user.png'
import { UserType } from '../../../state/users-reducer'
import { Button } from '../../common/Button/Button'
import style from '../User.module.css'

export type UserPropsType = {
  user: UserType
  followUserTC: (useID: string) => void
  unfollowUserTC: (useID: string) => void
  followingInProgress: string[]
}

export const User: React.FC<UserPropsType> = ({
  user,
  followUserTC,
  unfollowUserTC,
  followingInProgress,
}) => {
  return (
    <div key={user.id} className={style.user_container}>
      <NavLink to={`profile/${user.id}`}>
        <img
          src={user.photos.small ? user.photos.small : defaultPhoto}
          alt="user's avatar"
          className={style.user_avatar}
        />
      </NavLink>
      {user.followed ? (
        <Button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            unfollowUserTC(user.id)
          }}
        >
          unfollow
        </Button>
      ) : (
        <Button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            followUserTC(user.id)
          }}
        >
          follow
        </Button>
      )}
      <h3 className={style.user_name}>{user.name}</h3>
      <span className={style.user_status}>{user.status}</span>
    </div>
  )
}
