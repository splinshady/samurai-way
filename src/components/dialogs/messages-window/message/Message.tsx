import React from 'react'

import styles from './Message.module.css'

type MessagePropsType = {
  avatar: string
  name: string
  message: string
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={styles.message}>
      <div className={styles.message__container}>
        <img className={styles.message__avatar} src={props.avatar} alt={props.name} />
        <div className={styles.message__block}>
          <div className={styles.message__name_text}>
            <span className={styles.message__name}>{props.name}</span>
            <span className={styles.message__text}>{props.message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
