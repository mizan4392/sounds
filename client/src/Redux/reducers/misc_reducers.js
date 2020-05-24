import * as TYPES from '../types'

export default function (state = {}, action) {
    switch (action.type) {
        case TYPES.SET_SELECTED_BRAND_ID:
            return { ...state, selectedBrandId: action.payload }

        case TYPES.SET_SELECTED_SHIPING:
            return { ...state, selectedShiping: action.payload }

        case TYPES.SET_SELECTED_STOCK:
            return { ...state, selectedStock: action.payload }

        case TYPES.SET_SELECTED_WOOD_ID:
            return { ...state, selectedWoodId: action.payload }

        case TYPES.SET_SELECTED_FRETS_ID:
            return { ...state, selectedFretsId: action.payload }

        default:
            return state
    }
}