import { combineReducers } from "redux";
import user from './user_reducers'
import products from './product_reducer'
import misc from './misc_reducers'

const rootReducers = combineReducers({
    user,
    products,
    misc
})

export default rootReducers