import React from 'react';
import style from './Dialogs.module.css';
import MessagesWindow from "./messages-window/MessagesWindow";
import DialogsPeople from "./dialogs-people/DialogsPeople";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <MessagesWindow />
            <DialogsPeople />
        </div>
    );
};

export default Dialogs;