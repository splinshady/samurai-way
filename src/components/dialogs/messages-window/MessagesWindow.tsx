import React from 'react';
import styles from './MessagesWindow.module.css'
import Message from "./message/Message";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const MessagesWindow = () => {
    return (
        <div className={styles.messages_container + ' shadow_section'}>
            <section className={styles.header}>header</section>
            <section className={styles.body}>
                <Message avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
                         name={'Tatuan'}
                         message={'hi Tatuan fgsfg fgsgs f dgsdgfs gsgsfgds gs '}
                         time={'20:33'}
                />
                <Message avatar={'https://cdn-icons-png.flaticon.com/512/145/145847.png'}
                         name={'Tatuan'}
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