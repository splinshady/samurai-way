import {v1} from "uuid";
import {messageType} from "./state";

export const dialogsReducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'ADD-MESSAGE' : {
            const message: messageType = {
                id: v1(),
                name: 'Dima',
                message: action.message
            }
            state.messages.push(message)
            return state;
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