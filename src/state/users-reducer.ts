import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    id: string,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string,
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return {...state, users: [...action.users]}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.newTotalUsersCount}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.newCurrentPage}
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

export const setTotalUsersCountAC = (newTotalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        newTotalUsersCount
    } as const
}

export const setCurrentPageAC = (newCurrentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        newCurrentPage
    } as const
}