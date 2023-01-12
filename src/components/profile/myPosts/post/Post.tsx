import React from 'react'

import { useSelector } from 'react-redux'

import { StateType } from '../../../../state/redux-store'

import style from './Post.module.css'

type postProps = {
  message: string
  likesCount: number
}

const Post = (props: postProps) => {
  const ava = useSelector<StateType, string | undefined>(
    state => state.profilePage.profile.photos.small
  )

  return (
    <div className={style.post}>
      <div className={style.avatar__like}>
        <img className={style.avatar} src={ava} alt="avatar" />
        <div className={style.post__like}>
          <span>Likes</span>
          <span>{props.likesCount}</span>
        </div>
      </div>
      <p className={style.post__content}>{props.message}</p>
    </div>
  )
}

export default Post
