import {ActionsTypes} from "./redux-store";

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
    profile: ProfileType
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
    }
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'SET-USER-PROFILE': return {...state , profile: action.profile}
        default:
            return state;
    }
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}