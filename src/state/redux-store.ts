import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { FormAction, reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

import { authReducer, setAuthUserData, setCaptcha, setIsInitialized } from './auth-reduser'
import { addMessageAC, dialogsReducer } from './dialogs-reduser'
import {
  profileReducer,
  setIsEditProfile,
  setPhotos,
  setUserProfile,
  setUserStatus,
} from './profile-reducer'
import {
  follow,
  setCurrentPage,
  setFollowingInProgress,
  setIsFetching,
  setPortionNumber,
  setTotalUsersCount,
  setUsers,
  unfollow,
  usersReducer,
} from './users-reducer'

export type dialogsType = {
  id: string
  name: string
}
export type messageType = {
  id: string
  message: string
  name: string
}
export type postType = {
  message: string
  likesCount: number
}
export type dialogsPageType = {
  dialogs: Array<dialogsType>
  messages: Array<messageType>
}

export type ActionsTypes = ReturnType<
  | typeof addMessageAC
  | typeof follow
  | typeof unfollow
  | typeof setTotalUsersCount
  | typeof setCurrentPage
  | typeof setIsFetching
  | typeof setUserProfile
  | typeof setAuthUserData
  | typeof setFollowingInProgress
  | typeof setUsers
  | typeof setIsInitialized
  | typeof setPhotos
  | typeof setCaptcha
  | typeof setPortionNumber
  | typeof setIsEditProfile
  | typeof setUserStatus
>

export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatchType = ThunkDispatch<StateType, unknown, ActionsTypes | FormAction>

// @ts-ignore
window.store = store
