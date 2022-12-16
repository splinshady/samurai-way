import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfileInfoType = ProfileContainerPropsType & {
  isOwner: boolean
}

const Profile: React.FC<ProfileInfoType> = (props) => {
    return (
        <div className={style.profile + ' shadow_section'}>
            <ProfileInfo userStatus={props.userStatus}
                         updateStatus={props.updateUserStatusTC}
                         isOwner={props.isOwner}
                         isEditProfile={props.isEditProfile}
                         savePhoto={props.savePhotoTC}
                         setIsEditProfile={props.setIsEditProfile}
                         saveProfileData={props.updateProfileDataTC}
                         profile={props.profile}/>
            <MyPosts />
        </div>
    );
};

export default Profile;