import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {stateType} from "../../state/redux-store";
import {ProfileType, setUserProfileTC, setUserStatusTC, updateUserStatusTC} from "../../state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";

type PathParamsType = {
  userId: string,
}

type MapStateToPropsType = {
  profile: ProfileType
  userStatus: string
}
type MapDispatchPropsType = {
  setUserProfileTC: (userID: string) => void
  setUserStatusTC: (userID: string) => void
  updateUserStatusTC: (status: string) => void
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
  componentDidMount() {
    let userId: string = '5975' //this.props.match.params.userId
    if (!userId) {
      userId = '5975'
    }
    this.props.setUserProfileTC(userId)
    this.props.setUserStatusTC(userId)
  }

  render() {
    return <Profile {...this.props}/>
  }
};

const mapStateToProps = (state: stateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {setUserProfileTC, setUserStatusTC, updateUserStatusTC}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)