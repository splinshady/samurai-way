import {ActionsTypes} from "./redux-store";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfileType = {
  aboutMe: string | null,
  contacts: {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
  },
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  fullName: string,
  userId: number,
  photos: {
    small: string | null,
    large: string | null
  }
}

export type ProfilePageType = {
  profile: ProfileType,
  userStatus: string
}

const initialState: ProfilePageType = {
  profile: {
    aboutMe: 'string | null',
    contacts: {
      facebook: 'string| null',
      website: 'string| null',
      vk: 'string| null',
      twitter: 'string | null',
      instagram: 'string | null',
      youtube: 'string | null',
      github: 'string | null',
      mainLink: 'string | null'
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'string | null',
    fullName: 'string',
    userId: 0,
    photos: {
      small: 'string | null',
      large: 'string | null'
    }
  },
  userStatus: 'status'
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    case 'SET-USER-STATUS':
      return {...state, userStatus: action.status}
    default:
      return state;
  }
}

//Actions

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: 'SET-USER-PROFILE',
    profile
  } as const
}

export const setUserStatus = (status: string) => {
  return {
    type: 'SET-USER-STATUS',
    status
  } as const
}

//Thunks

export const setUserProfileTC = (userID: string) => (dispatch: Dispatch) => {
  profileAPI.getUserProfile(userID).then(response => {
    dispatch(setUserProfile(response))
  })
}

export const setUserStatusTC = (userID: string) => (dispatch: Dispatch) => {
  profileAPI.getUserStatus(userID).then(response => {
    dispatch(setUserStatus(response))
  })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateUserStatus(status).then(response => {
    response.resultCode === 0 && dispatch(setUserStatus(status))
  })
}