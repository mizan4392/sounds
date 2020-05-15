import axios from 'axios'
import { USER_SERVER } from '../../utils/misc'
import * as TYPES from '../types'

export function logOutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(res => res.data)
    return {
        type: TYPES.LOGOUT_USER,
        payload: request
    }
}

export function userAuth() {
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(res => res.data)
    return {
        type: TYPES.AUTH_USER,
        payload: request
    }
}


export function registerUser(data) {
    const request = axios.post(`${USER_SERVER}/register`, data)
        .then(res => res.data)
    return {
        type: TYPES.REGISTER_USER,
        payload: request
    }
}


export function loginUser(data) {
    const request = axios.post(`${USER_SERVER}/login`, data)
        .then(res => res.data)
    return {
        type: TYPES.LOGIN_USER,
        payload: request
    }
}