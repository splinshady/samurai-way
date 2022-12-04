import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";
import thunkMiddleware from "redux-thunk";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    usersReducer
} from "./users-reducer";
import {profileReducer, setUserProfile, setUserStatus} from "./profile-reducer";
import {authReducer, setAuthUserData} from "./auth-reduser";
import {reducer as formReducer} from "redux-form";

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
    | typeof setUserStatus>

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
