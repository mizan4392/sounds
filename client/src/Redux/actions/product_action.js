import axios from 'axios'
import { USER_PRODUCT } from '../../utils/misc'
import * as TYPES from '../types'



export function getProductBrands(){
    const request = axios.get(`${USER_PRODUCT}/brands`)

    return{
        type:TYPES.GET_PRODUCT_BRANDS,
        payload:request
    }
    
}


export function getProductWoods(){

    const request = axios.get(`${USER_PRODUCT}/woods`)

    return{
        type:TYPES.GET_PRODUCT_WOODS,
        payload:request
    }
    
}



export function getProductBySell(){
    const request = axios.get(`${USER_PRODUCT}/articles?sortBy=sold&order=desc&limit=4`)
        .then(res=> res.data)

    return{
        type:TYPES.GET_PRODUCT_BY_SELL,
        payload:request
    }
    
}

export function getProductByArrival(){
    const request = axios.get(`${USER_PRODUCT}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(res=> res.data)

    return{
        type:TYPES.GET_PRODUCT_BY_ARRIVAL,
        payload:request
    }
}