import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from '../constants/userConstants.js'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

/**TODO: Try wether `loading` and `error` could be omitted
 * Cases:
 * 1. User login
 * 2. User logout
 * 3. User error
 */
export const userReducer = (
  state = { loading: false, error: null, data: {} },
  action
) => {
  switch (action.type) {
    case 'USER_LOADING': {
      return { loading: true, error: null, data: state.data }
    }
    case 'USER_LOGIN': {
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    }
    case 'USER_LOGOUT': {
      return { loading: false, error: null, data: {} }
    }
    case 'USER_ERROR': {
      return { loading: false, error: action.payload, data: state.data }
    }
  }
}
