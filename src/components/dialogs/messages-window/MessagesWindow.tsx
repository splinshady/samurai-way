import React, { useEffect, useState } from 'react'

import { messageType } from '../../../state/redux-store'
import style from '../dialogs-people/person-dialog/PersonDialog.module.css'

import { AddMessageFormType, AddMessageReduxForm } from './AddMessageForm'
import Message from './message/Message'
import styles from './MessagesWindow.module.css'

type MessagesWindowPropsType = {
  messages: Array<messageType>
  sendMessage: (newMessage: string) => void
}

const MessagesWindow = (props: MessagesWindowPropsType) => {
  const [ws, setWs] = useState<WebSocket>()

  useEffect(() => {
    const localWs = new WebSocket('https://social-network.samuraijs.com/handlers/ChatHandler.ashx')

    localWs.onmessage = messageEvent => {
      console.log(messageEvent)
    }

    setWs(localWs)
  }, [])
  const sendMessageClickHandler = (formData: AddMessageFormType) => {
    props.sendMessage(formData.message)
    ws && ws.send(formData.message)
  }

  return (
    <div className={styles.messages_container + ' shadow_section'}>
      <section className={styles.header}>
        <img
          className={style.avatar}
          src="https://cdn-icons-png.flaticon.com/512/145/145847.png"
          alt=""
        />
        <span className={style.name}>name</span>
      </section>

      <section className={styles.body}>
        {props.messages.map(message => {
          return (
            <Message
              key={message.id}
              avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
              name={message.name}
              message={message.message}
              time={'20:33'}
            />
          )
        })}
      </section>
      <AddMessageReduxForm onSubmit={sendMessageClickHandler} />
    </div>
  )
}

export default MessagesWindow
