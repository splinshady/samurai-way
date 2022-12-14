import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {ProfileType} from "../../state/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import defaultPhoto from "../../assets/icons/user.png";
import style from "./Profile.module.css";

type ProfileInfoPropsType = {
  profile: ProfileType
  userStatus: string
  isOwner: boolean
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.savePhoto(event.target.files[0])
    }
  }

  return (
    <div>
      <img src={props.profile.photos.large || defaultPhoto} className={style.users_photo} alt="user's photo"/>
      {props.isOwner && <input type="file" onChange={onPhotoSelected}/>}
      <span>{props.profile.fullName}</span>
      <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;