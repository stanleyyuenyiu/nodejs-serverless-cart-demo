import { combineReducers } from 'redux'
import apiCallStatus from './apiCallStatus'
import { REQUEST, SUCCESS, FAILURE } from 'Actions/products'


const entities = (state = {
}, action) => {
    if (action.response && action.response.data) {
        return {
            ...state,
            [action.key]: action.response.data
        }
    }

   return state
}

const products = combineReducers({
    entities,
    apiStatus: apiCallStatus({
        mapActionToKey: action => action.key,
        types: [
            REQUEST,
            SUCCESS,
            FAILURE
        ]
    })
})
export default products