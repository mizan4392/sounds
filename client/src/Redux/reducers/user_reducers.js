import * as TYPES from '../types'


export default function (state = {}, action) {
    switch (action.type) {

        case TYPES.REGISTER_USER:
            return {...state,register:action.payload}

        case TYPES.LOGIN_USER:
            return {...state,loginSucess:action.payload}

        default:
            return state
    }
}