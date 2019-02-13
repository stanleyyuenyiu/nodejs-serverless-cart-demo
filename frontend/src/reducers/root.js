import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import customer from './customer'
import form from './form'
export const CLEAR = 'CLEAR';

const appReducer = combineReducers({
    products,
    cart,
    customer,
    ...form
})

const rootReducer = (state = {}, action) => {
  if (action.type === CLEAR) {
        delete state[action.payload.entityGroup].entities[action.payload.entityKey];
  }
  return appReducer(state, action)
}
export default rootReducer
