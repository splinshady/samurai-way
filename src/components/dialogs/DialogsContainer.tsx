import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC} from "../../state/dialogs-reduser";
import {connect} from "react-redux";
import {dialogsType, messageType, stateType} from "../../state/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
}
type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: stateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;