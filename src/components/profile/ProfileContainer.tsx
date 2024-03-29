import React, { Component } from 'react'

import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import WithAuthRedirect from '../../hoc/withAuthRedirect'
import {
  ProfileType,
  savePhotoTC,
  setIsEditProfile,
  setUserProfileTC,
  setUserStatusTC,
  updateProfileDataTC,
  updateUserStatusTC,
} from '../../state/profile-reducer'
import { StateType } from '../../state/redux-store'

import Profile from './Profile'
import { ProfileDataEditFormType } from './profileUserAboutData/ProfileUserAboutDataEdit'

type PathParamsType = {
  userId: string
}

type MapStateToPropsType = {
  profile: ProfileType
  userStatus: string
  authorizedUserID: string | null
  isAuth: boolean
  isEditProfile: boolean
}
type MapDispatchPropsType = {
  setUserProfileTC: (userID: string | null) => void
  setUserStatusTC: (userID: string | null) => void
  updateUserStatusTC: (status: string) => void
  savePhotoTC: (file: File) => void
  setIsEditProfile: (isEditProfile: boolean) => void
  updateProfileDataTC: (data: ProfileDataEditFormType) => void
}
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
  MapStateToPropsType &
  MapDispatchPropsType

class ProfileContainer extends Component<ProfileContainerPropsType, {}> {
  updateProfile() {
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

  componentDidMount() {
    this.updateProfile()
  }

  componentDidUpdate(
    prevProps: Readonly<ProfileContainerPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
  }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth,
    isEditProfile: state.profilePage.isEditProfile,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfileTC,
    updateProfileDataTC,
    savePhotoTC,
    setUserStatusTC,
    updateUserStatusTC,
    setIsEditProfile,
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
