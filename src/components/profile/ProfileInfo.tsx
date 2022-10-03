import React from 'react';
import {ProfileType} from "../../state/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            {props.profile.aboutMe}
            {props.profile.contacts.github}
            {props.profile.lookingForAJobDescription}
        </div>
    );
};

export default ProfileInfo;