import {combineReducers, createStore} from "redux";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";

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
    | typeof followAC
    | typeof unfollowAC
    | typeof setTotalUsersCountAC
    | typeof setCurrentPageAC
    | typeof setUsersAC>

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

