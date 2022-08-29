import React, {ChangeEvent, useState} from 'react';
import styles from './MessagesWindow.module.css'
import Message from "./message/Message";
import style from "../dialogs-people/person-dialog/PersonDialog.module.css";
import {ActionsTypes, messageType} from "../../../state/state";
import {addMessageAC} from "../../../state/dialogs-reduser";

type MessagesWindowPropsType = {
    state: Array<messageType>
    dispatch: (action: ActionsTypes) => void
}

const MessagesWindow = (props: MessagesWindowPropsType) => {

    const [messInputValue, setMessInputValue] = useState<string>('')

    const sendMessageClickHandler = () => {
        props.dispatch(addMessageAC(messInputValue))
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
                {props.state.map(message => {
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