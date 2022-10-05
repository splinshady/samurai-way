import React from 'react';
import {ProfileType} from "../../state/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <img src={`${props.profile.photos.large}`} alt=""/>
            {props.profile.fullName}
        </div>
    );
};

export default ProfileInfo;