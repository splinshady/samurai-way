import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import {stateType} from "../../state/redux-store";
import {ProfileType, setUserProfile} from "../../state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId: string,
}

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
    componentDidMount() {
        let userId: string = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        profileAPI.getUserProfile(userId).then(response => {
                this.props.setUserProfile(response)
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))