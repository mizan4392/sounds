import * as TYPES from '../types'


export function setSelectedPublish(data){
    return{
        type:TYPES.SET_SELECTED_PUBLISH,
        payload:data
    }
    
}

export function setSelectedBrandId(data){
    return{
        type:TYPES.SET_SELECTED_BRAND_ID,
        payload:data
    }
    
}

export function setSelectedShiping(data){
    return{
        type:TYPES.SET_SELECTED_SHIPING,
        payload:data
    }
    
}

export function setSelectedStock(data){
    return{
        type:TYPES.SET_SELECTED_STOCK,
        payload:data
    }
    
}

export function setSelectedWoodId(data){
    return{
        type:TYPES.SET_SELECTED_WOOD_ID,
        payload:data
    }
    
}

export function setSelectedFretsId(data){
    return{
        type:TYPES.SET_SELECTED_FRETS_ID,
        payload:data
    }
    
}