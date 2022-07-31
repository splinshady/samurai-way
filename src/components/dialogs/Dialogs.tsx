import React from 'react';
import style from './Dialogs.module.css';
import MessagesWindow from "./messages-window/MessagesWindow";
import DialogsPeople from "./dialogs-people/DialogsPeople";
import {dialogsType, messageType} from "../../state/state";

type DialogsPropsType = {
    state: {
        dialogs: Array<dialogsType>,
        messages: Array<messageType>,
    }
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <MessagesWindow state={props.state.messages}/>
            <DialogsPeople state={props.state.dialogs}/>
        </div>
    );
};

export default Dialogs;