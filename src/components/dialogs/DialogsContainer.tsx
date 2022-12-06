import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC} from "../../state/dialogs-reduser";
import {connect} from "react-redux";
import {dialogsType, messageType, StateType} from "../../state/redux-store";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
}
type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: StateType): MapStatePropsType => {
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)