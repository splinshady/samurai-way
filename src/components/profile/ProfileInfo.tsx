import React from 'react';
import {ProfileType} from "../../state/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    userStatus: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <img src={`${props.profile.photos.large}`} alt=""/>
            {props.profile.fullName}
            <ProfileStatus userStatus={props.userStatus}/>
        </div>
    );
};

export default ProfileInfo;