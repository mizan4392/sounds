import axios from 'axios'
import {USER_SERVER} from '../../utils/misc'
import * as TYPES from '../types'

export function loginUser(data){

    const request = axios.post(`${USER_SERVER}/login`,data)
        .then(res=> res.data)


    return{
        type:TYPES.LOGIN_USER,
        payload:request
    }

}