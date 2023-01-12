import React, { ChangeEvent } from 'react'

import defaultPhoto from '../../assets/icons/user.png'
import { ProfileType } from '../../state/profile-reducer'
import { Button } from '../common/Button/Button'

import style from './Profile.module.css'
import ProfileStatus from './ProfileStatus'
import { ProfileUserAboutData } from './profileUserAboutData/ProfileUserAboutData'
import {
  ProfileDataEditFormType,
  ProfileUserAboutDataEditForm,
} from './profileUserAboutData/ProfileUserAboutDataEdit'

type ProfileInfoPropsType = {
  profile: ProfileType
  userStatus: string
  isOwner: boolean
  isEditProfile: boolean
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  setIsEditProfile: (isEditProfile: boolean) => void
  saveProfileData: (data: ProfileDataEditFormType) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = props => {
  const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.savePhoto(event.target.files[0])
    }
  }

  const onEditDataSubmit = (formData: ProfileDataEditFormType) => {
    props.saveProfileData(formData)
  }

  return (
    <div>
      <img
        src={props.profile.photos.large || defaultPhoto}
        className={style.users_photo}
        alt="user's photo"
      />
      {props.isOwner && <input type="file" onChange={onPhotoSelected} />}
      <span>{props.profile.fullName}</span>
      <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus} />
      {props.isEditProfile ? (
        <ProfileUserAboutDataEditForm initialValues={props.profile} onSubmit={onEditDataSubmit} />
      ) : (
        <ProfileUserAboutData profile={props.profile} />
      )}
      {props.isOwner && !props.isEditProfile && (
        <Button onClick={() => props.setIsEditProfile(true)}>edit profile</Button>
      )}
    </div>
  )
}

export default ProfileInfo
