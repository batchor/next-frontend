// Axios instance to make requests to the API
// Used as "fetcher" in swr hooks
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { siteConfig } from '@/configs/site'

const baseURL = siteConfig.apiBaseUrl

const ApiClient = () => {
    const defaultOptions = {
        baseURL,
    }

    const instance = axios.create(defaultOptions)

    instance.interceptors.request.use(async (request) => {
        const session = await getSession()
        if (session) {
            request.headers.Authorization = `Bearer ${session.jwt}`
        }
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            console.log(`error`, error)
        },
    )

    return instance
}

export const apiClient = ApiClient()
export default apiClient
