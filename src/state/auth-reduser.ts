import {ActionsTypes, AppDispatchType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, LoginDataType, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type authType = {
  userID: string | null
  email: string | null
  login: string | null
  isAuth: boolean
  isInitialized: boolean
}

const initialState: authType = {
  userID: null,
  login: null,
  email: null,
  isAuth: false,
  isInitialized: false,
}

export const authReducer = (state = initialState, action: ActionsTypes): authType => {
  switch (action.type) {
    case 'SET-AUTH-USER-DATA' : {
      return {
        ...state,
        ...action.data,
      }
    }
    case 'SET-IS-INITIALIZED' : {
      return {
        ...state,
        isInitialized: action.isInitialized,
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

export const setIsInitialized = (isInitialized: boolean) => {
  return {
    type: 'SET-IS-INITIALIZED',
    isInitialized
  } as const
}

//Thunks

export const authMeTC = () => (dispatch: Dispatch) => {
  return authAPI.authMe()
    .then(response => {
      const data = response.data
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(data.id, data.login, data.email, true))
      }
    })
}

export const initializeAppTC = () => (dispatch: AppDispatchType) => {
  let authPromise = dispatch(authMeTC())
  Promise.all([authPromise])
    .then(() => {
      dispatch(setIsInitialized(true))
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
