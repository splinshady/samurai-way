import {combineReducers, createStore} from "redux";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";

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
export type stateType = {
    profilePage: Array<postType>;
    dialogsPage: dialogsPageType
}
export type ActionsTypes = ReturnType<typeof addMessageAC>

const reducers = combineReducers({
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)

