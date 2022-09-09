import {v1} from "uuid";
import {addMessageAC, dialogsReducer} from "./dialogs-reduser";

/*export type dialogsType = {
    id: string,
    name: string,
}*/
/*export type messageType = {
    id: string,
    message: string,
    name: string
}*/
/*export type postType = {
    message: string,
    likesCount: number
}*/
/*export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messageType>,
}*/
/*export type stateType = {
    profilePage: Array<postType>;
    dialogsPage: dialogsPageType
}*/
/*export type storeType = {
    _state: stateType,
    _onChange: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => stateType,
    dispatch: (action: ActionsTypes) => void,
}*/
/*export type ActionsTypes = ReturnType<typeof addMessageAC>*/


/*export const store: storeType = {
    _state: {
        profilePage: [
            {message: 'my first post', likesCount: 245},
        ],
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Ed'}
            ],
            messages: [
                {id: '1', message: 'hi', name: 'Dima'},
                {
                    id: '2',
                    name: 'Dima',
                    message: 'CSS всегда использовался для разметки веб- хорошо.'
                },
                {
                    id: '3',
                    name: 'Dima',
                    message: 'CSS всегда использовался для разметки веб- хорошо.'
                },
                {
                    id: '4',
                    name: 'Dima',
                    message: 'CSS всегда использовался для разметки веб- хорошо.'
                },
                {
                    id: '5',
                    name: 'Dima',
                    message: 'CSS всегда использовался для разметки веб- хорошо.'
                },
            ],
        }
    },
    _onChange() {},
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    dispatch (action: ActionsTypes) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    },
}*/
