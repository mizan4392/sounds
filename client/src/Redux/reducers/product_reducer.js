import * as TYPES from '../types'


export default function (state = {}, action) {
    switch (action.type) {

        case TYPES.GET_PRODUCT_TO_SHOP:
            return {...state,toShop:action.payload.articles,toShopSize:action.payload.size,prevState:action.payload.prevState}

        case TYPES.GET_PRODUCT_WOODS:
            return {...state,woods:action.payload}

        case TYPES.GET_PRODUCT_BRANDS:
            return {...state,brands:action.payload}

        case TYPES.GET_PRODUCT_BY_SELL:
            return {...state,bySell:action.payload}

        case TYPES.GET_PRODUCT_BY_ARRIVAL:
            return {...state,byArrival:action.payload}

        case TYPES.ADD_PRODUCT:
            return {...state,addProduct:action.payload}

        default:
            return state
    }
}