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

export const state: stateType = {
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
}

let renderTree = (state: stateType) => {}

export const subscribe = (observer: any) => {
    renderTree = observer;
}

export const addMessage = (mess: string) => {
    const message: messageType = {
        id: v1(),
        name: 'Dima',
        message: mess
    }
    state.dialogsPage.messages.push(message)
    renderTree(state);
}