import axios from "axios";
import {ProfileDataEditFormType} from "../components/profile/profileUserAboutData/ProfileUserAboutDataEdit";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6a3e89cd-d88e-4f3a-9ebc-280dc7449e40'
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  getPage(pageNumber: number, pageSize: number) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  followUser(userID: string) {
    return instance.post(`follow/${userID}`)
      .then(response => {
        return response.data
      })
  },
  unfollowUser(userID: string) {
    return instance.delete(`follow/${userID}`)
      .then(response => {
        return response.data
      })
  },
}

export const profileAPI = {
  getUserProfile(userId: string | null) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      })
  },
  getUserStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data
      })
  },
  updateUserStatus(status: string) {
    return instance.put(`profile/status/`, {status})
      .then(response => {
        return response.data
      })
  },
  savePhoto(file: File) {
    const formData = new FormData()
    formData.append('image', file)

    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        return response.data
      })
  },
  saveProfileData(data: ProfileDataEditFormType) {
    return instance.put(`profile/`, data)
      .then(response => {
        return response.data
      })
  },
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`)
      .then(response => {
        return response.data
      })
  },
  login(data: LoginDataType) {
    return instance.post(`auth/login`, data)
      .then(response => {
        return response.data
      })
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(response => {
        return response.data
      })
  },
}

export type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
}