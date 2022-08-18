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
    addMessage: (mess: string) => void,
    _onChange: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => stateType,
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
    addMessage(mess: string) {
        const message: messageType = {
            id: v1(),
            name: 'Dima',
            message: mess
        }
        this._state.dialogsPage.messages.push(message)
        this._onChange()
    },
    _onChange() {
    },

    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    }
}