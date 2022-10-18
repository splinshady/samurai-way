import {ActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {follow, setFollowingInProgress} from "./users-reducer";

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string| null,
        website: string| null,
        vk: string| null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}
type ProfilePageType = {
    profile: ProfileType,
    userStatus: string
}

const initialState: ProfilePageType = {
    profile: {
        aboutMe: 'string | null',
        contacts: {
            facebook: 'string| null',
            website: 'string| null',
            vk: 'string| null',
            twitter: 'string | null',
            instagram: 'string | null',
            youtube: 'string | null',
            github: 'string | null',
            mainLink: 'string | null'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'string | null',
        fullName: 'string',
        userId: 0,
        photos: {
            small: 'string | null',
            large: 'string | null'
        }
    },
    userStatus: 'status a'
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'SET-USER-PROFILE': return {...state , profile: action.profile}
        default:
            return state;
    }
}

//Actions

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

//Thunks

export const setUserProfileTC = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userID).then(response => {
        dispatch(setUserProfile(response))
    })
}