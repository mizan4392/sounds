import { combineReducers } from "redux";
import user from './user_reducers'
import products from './product_reducer'

const rootReducers = combineReducers({
    user,
    products
})

export default rootReducers