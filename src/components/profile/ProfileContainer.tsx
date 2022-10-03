import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import {stateType} from "../../state/redux-store";
import {ProfileType, setUserProfile} from "../../state/profile-reducer";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }
    render() {
        return <Profile {...this.props}/>
    }
};

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)