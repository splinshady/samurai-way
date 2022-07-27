import React from 'react';
import styles from './MessagesWindow.module.css'
import Message from "./message/Message";
import style from "../dialogs-people/person-dialog/PersonDialog.module.css";

const MessagesWindow = () => {
    return (
        <div className={styles.messages_container + ' shadow_section'}>
            <section className={styles.header}>
                <img className={style.avatar} src='https://cdn-icons-png.flaticon.com/512/145/145847.png' alt=""/>
                <span className={style.name}>name</span>
            </section>

            <section className={styles.body}>
                <Message avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
                         name={'name'}
                         message={'hi Tatuan fgsfg fgsgs f dgsdgfs gsgsfgds gs '}
                         time={'20:33'}
                />
                <Message avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
                         name={'name'}
                         message={'hi Tatuan fgsfg fgsgs f dgsdgfs gsgsfgds gs '}
                         time={'20:33'}
                />
            </section>

            <section className={styles.input_container}>
                <textarea className={styles.input_textarea}></textarea>
                <button>send</button>
            </section>
        </div>
    );
};

export default MessagesWindow;