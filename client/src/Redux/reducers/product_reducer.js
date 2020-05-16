import * as TYPES from '../types'


export default function (state = {}, action) {
    switch (action.type) {

        case TYPES.GET_PRODUCT_BY_SELL:
            return {...state,bySell:action.payload}

        case TYPES.GET_PRODUCT_BY_ARRIVAL:
            return {...state,byArrival:action.payload}

        default:
            return state
    }
}