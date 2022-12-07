import {ActionsTypes, AppDispatchType} from "./redux-store";
import axios from "axios";
import {Dispatch} from "redux";
import {authAPI, LoginDataType, profileAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {stopSubmit} from "redux-form";

export type authType = {
  userID: string | null
  email: string | null
  login: string | null
  isAuth: boolean
}

const initialState: authType = {
  userID: null,
  login: null,
  email: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypes): authType => {
  switch (action.type) {
    case 'SET-AUTH-USER-DATA' : {
      return {
        ...state,
        ...action.data,
      }
    }
    default:
      return state;
  }
}

//Actions

export const setAuthUserData = (userID: string | null, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: 'SET-AUTH-USER-DATA',
    data: {userID, email, login, isAuth}
  } as const
}

//Thunks

export const authMeTC = () => (dispatch: Dispatch) => {
  authAPI.authMe()
    .then(response => {
      const data = response.data
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(data.id, data.login, data.email, true))
      }
    })
}

export const loginTC = (data: LoginDataType) => (dispatch: AppDispatchType | any) => {
  authAPI.login(data)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(authMeTC())
      } else {
        const message = response.messages.length ? response.messages[0] : 'Something went wrong'
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
}


export const logoutTC = () => (dispatch: AppDispatchType) => {
  authAPI.logout()
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}
