import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    usersReducer
} from "./users-reducer";
import {profileReducer, setPhotos, setUserProfile, setUserStatus} from "./profile-reducer";
import {authReducer, setAuthUserData, setIsInitialized} from "./auth-reduser";
import {FormAction, reducer as formReducer, stopSubmit} from "redux-form";

export type dialogsType = {
    id: string,
    name: string,
}
export type messageType = {
    id: string,
    message: string,
    name: string
}
export type postType = {
    message: string,
    likesCount: number
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
}




export type ActionsTypes = ReturnType<typeof addMessageAC
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
    | typeof setUserStatus>

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
