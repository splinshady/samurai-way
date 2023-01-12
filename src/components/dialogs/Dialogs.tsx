import React from 'react'

import DialogsPeople from './dialogs-people/DialogsPeople'
import style from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer'
import MessagesWindow from './messages-window/MessagesWindow'

const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={style.dialogs}>
      <MessagesWindow messages={props.messages} sendMessage={props.sendMessage} />
      <DialogsPeople dialogs={props.dialogs} />
    </div>
  )
}

export default Dialogs
