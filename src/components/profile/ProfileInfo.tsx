import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {ProfileType} from "../../state/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import defaultPhoto from "../../assets/icons/user.png";
import style from "./Profile.module.css";
import {ProfileUserAboutData} from "./profileUserAboutData/ProfileUserAboutData";
import {ProfileDataEditFormType, ProfileUserAboutDataEditForm} from "./profileUserAboutData/ProfileUserAboutDataEdit";
import {LoginFormType} from "../login/LoginForm";

type ProfileInfoPropsType = {
  profile: ProfileType
  userStatus: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfileData: (data: ProfileDataEditFormType) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false)

  const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.savePhoto(event.target.files[0])
    }
  }

  const onEditDataSubmit = (formData: ProfileDataEditFormType) => {
    props.saveProfileData(formData)
    setEditMode(false)
  }

  return (
    <div>
      <img src={props.profile.photos.large || defaultPhoto} className={style.users_photo} alt="user's photo"/>
      {props.isOwner && <input type="file" onChange={onPhotoSelected}/>}
      <span>{props.profile.fullName}</span>
      <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>
      {editMode
        ? <ProfileUserAboutDataEditForm initialValues={props.profile} onSubmit={onEditDataSubmit}/>
        : <ProfileUserAboutData profile={props.profile}/>
      }
      {props.isOwner && <button onClick={() => setEditMode(true)}>edit profile</button>}
    </div>
  );
};

export default ProfileInfo;