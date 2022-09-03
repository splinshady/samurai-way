import React, {ChangeEvent} from 'react';
import {ActionsTypes, dialogsType, messageType, storeType} from "../../state/state";
import Dialogs from "./Dialogs";
import {addMessageAC} from "../../state/dialogs-reduser";

type DialogsPropsType = {
    store: storeType,
}

const DialogsContainer = (props: DialogsPropsType) => {

    const sendMessage = (newMessage: string) => {
        props.store.dispatch(addMessageAC(newMessage))
    }

    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store.getState().dialogsPage.messages}
                 sendMessage={sendMessage}
        />
    );
};

export default DialogsContainer;