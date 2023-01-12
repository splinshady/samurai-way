import React, { useEffect, useRef, useState } from 'react'

import { messageType } from '../../../state/redux-store'
import style from '../dialogs-people/person-dialog/PersonDialog.module.css'

import { AddMessageFormType, AddMessageReduxForm } from './AddMessageForm'
import Message from './message/Message'
import styles from './MessagesWindow.module.css'
import { useDispatch } from 'react-redux'
import { reset } from 'redux-form'

type MessagesWindowPropsType = {
  messages: Array<messageType>
  sendMessage: (newMessage: string) => void
}

type MessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const MessagesWindow = (props: MessagesWindowPropsType) => {
  const dispatch = useDispatch()
  const [ws, setWs] = useState<WebSocket>()
  const [messages, setMessages] = useState<MessageType[]>([])
  const messageWindowRef = useRef<HTMLElement | null>(null)
  if (ws) {
    ws.onmessage = (messageEvent: MessageEvent) => {
      console.log(messageEvent)
      const newMessages = JSON.parse(messageEvent.data)
      setMessages([...messages, ...newMessages])
      messageWindowRef.current?.scrollTo(0, messageWindowRef.current?.scrollHeight)
    }
  }

  useEffect(() => {
    const localWs = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    setWs(localWs)
  }, [])

  const sendMessageClickHandler = (formData: AddMessageFormType) => {
    ws && ws.send(formData.message)
    dispatch(reset('addMessage'))
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

      <section className={styles.body} ref={messageWindowRef}>
        {messages.map((message, index) => {
          return (
            <Message
              key={index}
              avatar={message.photo}
              name={message.userName}
              message={message.message}
            />
          )
        })}
      </section>
      <AddMessageReduxForm onSubmit={sendMessageClickHandler} />
    </div>
  )
}

export default MessagesWindow
