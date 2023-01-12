import React from 'react'

import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'

import WithAuthRedirect from '../../hoc/withAuthRedirect'
import { addMessageAC } from '../../state/dialogs-reduser'
import { dialogsType, messageType, StateType } from '../../state/redux-store'

import Dialogs from './Dialogs'

type MapStatePropsType = {
  dialogs: Array<dialogsType>
  messages: Array<messageType>
}
type MapDispatchPropsType = {
  sendMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    sendMessage: (newMessage: string) => {
      dispatch(addMessageAC(newMessage))
    },
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)
