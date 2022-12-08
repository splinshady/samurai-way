import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {StateType} from "../../state/redux-store";
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
  authorizedUserID: string | null
  isAuth: boolean
}
type MapDispatchPropsType = {
  setUserProfileTC: (userID: string | null) => void
  setUserStatusTC: (userID: string | null) => void
  updateUserStatusTC: (status: string) => void
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType, any> {
  componentDidMount() {
    let userId: string | null = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserID
    }
    if (!userId) {
      this.props.history.push('/login')
    }
    this.props.setUserProfileTC(userId)
    this.props.setUserStatusTC(userId)
  }

  render() {
    return <Profile {...this.props}/>
  }
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {setUserProfileTC, setUserStatusTC, updateUserStatusTC}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)