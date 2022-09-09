import {v1} from "uuid";
import {ActionsTypes, dialogsPageType, messageType} from "./redux-store";

const initialState: dialogsPageType = {
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

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes): dialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE' : {
            const newState = {...state}

            const message: messageType = {
                id: v1(),
                name: 'Dima',
                message: action.message 
            }
            newState.messages = [...state.messages, message]
            return newState;
        }
        default: return state;
    }
}

export const addMessageAC = (messInputValue: string) => {
    return {
        type: 'ADD-MESSAGE',
        message: messInputValue
    } as const
}