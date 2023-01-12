import React, { FC } from 'react'

import style from './ProfileUserAboutData.module.css'

type ContactsItemPropsType = {
  title: string
  value: string | null
}

export const ContactsItem: FC<ContactsItemPropsType> = ({ title, value }) => {
  return (
    <div className={style.contact_container}>
      <h6 className={style.contact_title}>{title}: </h6>
      <span className={style.contact_value}>{value}</span>
    </div>
  )
}
