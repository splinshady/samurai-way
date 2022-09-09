import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC} from "../../state/dialogs-reduser";
import {connect} from "react-redux";
import {stateType} from "../../state/redux-store";

let mapStateToProps = (state: stateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;