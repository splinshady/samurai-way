import React, { FC } from 'react'

import { ProfileType } from '../../../state/profile-reducer'

import { ContactsItem } from './ContactsItem'
import style from './ProfileUserAboutData.module.css'

type ProfileUserAboutDataType = {
  profile: ProfileType
}

export const ProfileUserAboutData: FC<ProfileUserAboutDataType> = ({ profile }) => {
  return (
    <div>
      <div className={style.description_container}>
        <h5>About me: </h5>
        <span>{profile.aboutMe}</span>
      </div>
      <div className={style.description_container}>
        <h5>Looking for a job: </h5>
        <span>{profile.lookingForAJob ? 'yes' : 'no'}</span>
      </div>
      <div className={style.description_container}>
        <h5>Looking for a job description: </h5>
        <span>{profile.lookingForAJobDescription}</span>
      </div>
      <div>
        <h5>Contacts</h5>
        <div className={style.contacts_container}>
          {(Object.keys(profile.contacts) as (keyof typeof profile.contacts)[]).map(key => (
            <ContactsItem key={key} title={key} value={profile.contacts[key]} />
          ))}
        </div>
      </div>
    </div>
  )
}
