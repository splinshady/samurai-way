import axios from "axios";

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
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
}