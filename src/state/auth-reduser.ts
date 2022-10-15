import {ActionsTypes} from "./redux-store";
import axios from "axios";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

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

//Actions

export const setAuthUserData = (userID: string, login: string, email: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {userID, email, login}
    } as const
}

//Thunks

export const authMeTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            const data = response.data
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(data.id, data.login, data.email))
            }
        })
}
