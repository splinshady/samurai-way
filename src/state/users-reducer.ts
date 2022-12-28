import {ActionsTypes} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
  portionsSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: string[]
}

const initialState: UsersPageType = {
  users: [],
  pageSize: 9,
  portionsSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    case 'SET-IS-FETCHING': {
      return {...state, isFetching: action.isFetching}
    }
    case 'SET-FOLLOWING-IN-PROGRESS': {
      return {
        ...state,
        followingInProgress: action.inFollowing
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => action.userID !== id)
      }
    }
    default:
      return state;
  }
}

// Actions

export const follow = (userID: string) => {
  return {
    type: 'FOLLOW',
    userID: userID
  } as const
}
export const unfollow = (userID: string) => {
  return {
    type: 'UNFOLLOW',
    userID: userID
  } as const
}
export const setUsers = (users: UserType[]) => {
  return {
    type: 'SET-USERS',
    users: users
  } as const
}
export const setTotalUsersCount = (newTotalUsersCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    newTotalUsersCount
  } as const
}
export const setCurrentPage = (newCurrentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    newCurrentPage
  } as const
}
export const setIsFetching = (isFetching: boolean) => {
  return {
    type: 'SET-IS-FETCHING',
    isFetching
  } as const
}
export const setFollowingInProgress = (userID: string, inFollowing: boolean) => {
  return {
    type: 'SET-FOLLOWING-IN-PROGRESS',
    userID,
    inFollowing
  } as const
}

// Thunks

export const followUserTC = (userID: string) => (dispatch: Dispatch) => {
  dispatch(setFollowingInProgress(userID, true))
  usersAPI.followUser(userID)
    .then(response => {
      if (response.resultCode === 0) dispatch(follow(userID))
      dispatch(setFollowingInProgress(userID, false))
    })
}
export const unfollowUserTC = (userID: string) => (dispatch: Dispatch) => {
  dispatch(setFollowingInProgress(userID, true))
  usersAPI.unfollowUser(userID)
    .then(response => {
      if (response.resultCode === 0) dispatch(unfollow(userID))
      dispatch(setFollowingInProgress(userID, false))
    })
}
export const getUsersTC = (users: UserType[], currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
  if (users.length === 0) {
    dispatch(setIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
      .then(response => {
        if (!response.error) {
          dispatch(setIsFetching(false))
          dispatch(setUsers(response.items))
          dispatch(setTotalUsersCount(response.totalCount))
        }
      })
  }
}
export const setCurrentPageTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
  dispatch(setCurrentPage(pageNumber))
  dispatch(setIsFetching(true))
  usersAPI.getPage(pageNumber, pageSize)
    .then(response => {
      dispatch(setIsFetching(false))
      dispatch(setUsers(response.items))
      dispatch(setTotalUsersCount(response.totalCount))
    })
}
