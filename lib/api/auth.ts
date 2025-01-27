import { apiClient } from './client'


export const login = async (email: string, password: string) => {
    const response = await apiClient.post('/auth', {
        identifier: email,
        password,
    })
    return response.data
}


export const register = async (email: string, password: string) => {
    const response = await apiClient.post('/auth/register', {
        email,
        password,
    })
    return response.data
}


// 验证邮箱是否已经注册，是否已经验证
export const emailState = async (email: string) => {
    const response = await apiClient.post('/auth/email-state', {
        email,
    })
    return response.data
}


export const resetPassword = async (email: string) => {
    const response = await apiClient.post('/auth/reset-password', {
        email,
    })
    return response.data
}
