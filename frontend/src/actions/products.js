import { CALL_API,
    API_RES_JSON
} from 'Middlewares/api'


export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const loadProducts = ({key, ...payload}) => (dispatch, getState) => {
    return dispatch({
        key,
        [CALL_API]: {
            endpoint: 'products',
            resType: API_RES_JSON,
            payload,
            types: [REQUEST, SUCCESS, FAILURE]
        }
    })
}