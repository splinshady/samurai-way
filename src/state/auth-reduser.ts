import {ActionsTypes} from "./redux-store";

export type authType = {
    userID: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: authType = {
    userID: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypes): authType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA' : {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default: return state;
    }
}

export const setAuthUserData = (userID: string, login: string, email: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {userID, email, login}
    } as const
}