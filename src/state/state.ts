import {v1} from "uuid";

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
export type stateType = {
    profilePage: Array<postType>;
    dialogsPage: {
        dialogs: Array<dialogsType>,
        messages: Array<messageType>,
    }
}
export type storeType = {
    _state: stateType,
    _onChange: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => stateType,
    dispatch: (action: ActionsTypes) => void,
}

export type ActionsTypes = ReturnType<typeof addMessageAC>

export const addMessageAC = (messInputValue: string) => {
    return {
        type: 'ADD-MESSAGE',
        message: messInputValue
    } as const
}

export const store: storeType = {
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
        switch (action.type) {
            case 'ADD-MESSAGE' : {
                const message: messageType = {
                    id: v1(),
                    name: 'Dima',
                    message: action.message
                }
                this._state.dialogsPage.messages.push(message)
                this._onChange()
            }
        }
    },
}
