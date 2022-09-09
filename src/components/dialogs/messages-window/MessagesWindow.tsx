import React, {ChangeEvent, useState} from 'react';
import styles from './MessagesWindow.module.css'
import Message from "./message/Message";
import style from "../dialogs-people/person-dialog/PersonDialog.module.css";
import {messageType} from "../../../state/redux-store";

type MessagesWindowPropsType = {
    messages: Array<messageType>
    sendMessage: (newMessage: string) => void
}

const MessagesWindow = (props: MessagesWindowPropsType) => {

    const [messInputValue, setMessInputValue] = useState<string>('')

    const sendMessageClickHandler = () => {
        props.sendMessage(messInputValue)
        setMessInputValue('')
    }

    const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessInputValue(event.currentTarget.value)
    }

    return (
        <div className={styles.messages_container + ' shadow_section'}>
            <section className={styles.header}>
                <img className={style.avatar} src='https://cdn-icons-png.flaticon.com/512/145/145847.png' alt=""/>
                <span className={style.name}>name</span>
            </section>

            <section className={styles.body}>
                {props.messages.map(message => {
                    return <Message key={message.id}
                        avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
                        name={message.name}
                        message={message.message}
                        time={'20:33'}
                    />
                })}
            </section>

            <section className={styles.input_container}>
                <textarea value={messInputValue} onChange={changeMessageHandler} className={styles.input_textarea}></textarea>
                <button onClick={sendMessageClickHandler}>send</button>
            </section>
        </div>
    );
};

export default MessagesWindow;