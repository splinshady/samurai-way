import {ActionsTypes, AppDispatchType, StateType} from "./redux-store";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {ProfileDataEditFormType} from "../components/profile/profileUserAboutData/ProfileUserAboutDataEdit";
import {stopSubmit} from "redux-form";
import {rejects} from "assert";

export type ProfileType = {
  aboutMe: string | null,
  contacts: ContactsType,
  lookingForAJob: boolean,
  lookingForAJobDescription: string | null,
  fullName: string,
  userId: number,
  photos: ProfilePhotosType
}

export type ProfilePhotosType = {
  small: string | undefined,
  large: string | undefined
}

export type ContactsType = {
  facebook: string | null,
  website: string | null,
  vk: string | null,
  twitter: string | null,
  instagram: string | null,
  youtube: string | null,
  github: string | null,
  mainLink: string | null
}

export type ProfilePageType = {
  profile: ProfileType,
  userStatus: string
  isEditProfile: boolean
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
  userStatus: 'status',
  isEditProfile: false
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    case 'SET-USER-STATUS':
      return {...state, userStatus: action.status}
    case 'SET-IS-EDIT-PROFILE':
      return {...state, isEditProfile: action.isEditProfile}
    case 'SET-USER-PHOTO':
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
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

export const setIsEditProfile = (isEditProfile: boolean) => {
  return {
    type: 'SET-IS-EDIT-PROFILE',
    isEditProfile
  } as const
}

export const setUserStatus = (status: string) => {
  return {
    type: 'SET-USER-STATUS',
    status
  } as const
}

export const setPhotos = (photos: any) => {
  return {
    type: 'SET-USER-PHOTO',
    photos
  } as const
}

//Thunks

export const savePhotoTC = (file: File) => (dispatch: Dispatch) => {
  profileAPI.savePhoto(file)
    .then(response => {
      console.log(response)
      dispatch(setPhotos(response.data.photos))
    })
}

export const setUserProfileTC = (userID: string | null) => (dispatch: Dispatch) => {
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

export const updateProfileDataTC = (data: ProfileDataEditFormType) => (dispatch: AppDispatchType, getState: () => StateType) => {
  const userId = getState().auth.userID
  profileAPI.saveProfileData(data).then(response => {
    if (response.resultCode === 0) {
      dispatch(setUserProfileTC(userId))
      dispatch(setIsEditProfile(false))
    } else {
      const message = response.messages.length ? response.messages[0] : 'Something went wrong'
      dispatch(stopSubmit('profile-contacts', {_error: message}))
    }
  })
}