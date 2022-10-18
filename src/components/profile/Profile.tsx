import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ProfileContainerPropsType} from "./ProfileContainer";


const Profile: React.FC<ProfileContainerPropsType> = (props) => {
    return (
        <div className={style.profile + ' shadow_section'}>
            <ProfileInfo userStatus={props.userStatus} profile={props.profile}/>
            <MyPosts />
        </div>
    );
};

export default Profile;