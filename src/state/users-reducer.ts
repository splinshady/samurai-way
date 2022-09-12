import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: string,
    photoUrl: string
    followed: boolean,
    firstName: string,
    lastName: string,
    status: string,
    location: LocationType,
}

export type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            let newState = {
                ...state,
                users: state.users.map(item => item.id === action.userID ? {...item, followed: true} : item)
            }
            return newState
        }
        case 'UNFOLLOW': {
            let newState = {
                ...state,
                users: state.users.map(item => item.id === action.userID ? {...item, followed: false} : item)
            }
            return newState
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        userID: userID
    } as const
}

export const unfollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        userID: userID
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}