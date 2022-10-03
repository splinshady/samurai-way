import {combineReducers, createStore} from "redux";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    usersReducer
} from "./users-reducer";
import {profileReducer, setUserProfile} from "./profile-reducer";

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
    | typeof setUsers>

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
})

export const store = createStore(rootReducer)

