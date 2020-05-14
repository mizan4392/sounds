import * as TYPES from '../types'


export default function (state = {}, action) {
    switch (action.type) {

        case TYPES.LOGIN_USER:
            return {...state,loginSucess:action.payload}

        default:
            return state
    }
}