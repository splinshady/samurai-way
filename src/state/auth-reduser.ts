import {ActionsTypes} from "./redux-store";

type initialStatePropsType = {
    userID: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: initialStatePropsType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypes): initialStatePropsType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA' : {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }
}

export const setAuthUserData = (userID: string, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {userID, email, login}
    } as const
}