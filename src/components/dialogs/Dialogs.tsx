import React from 'react';
import style from './Dialogs.module.css';
import MessagesWindow from "./messages-window/MessagesWindow";
import DialogsPeople from "./dialogs-people/DialogsPeople";
import {dialogsType, messageType} from "../../state/redux-store";

type DialogsPropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
    sendMessage: (newMessage: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <MessagesWindow messages={props.messages} sendMessage={props.sendMessage}/>
            <DialogsPeople dialogs={props.dialogs}/>
        </div>
    );
};

export default Dialogs;