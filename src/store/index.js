import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducers.js'
import {
  researcherListReducer,
  researcherApproveReducer,
  researcherEditReducer,
  researcherDeleteReducer
} from './reducers/researcherReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  researcherList: researcherListReducer,
  researcherApprove: researcherApproveReducer,
  researcherEdit: researcherEditReducer,
  researcherDelete: researcherDeleteReducer
})

const userFromStorage = localStorage.getItem('user-admin')
  ? JSON.parse(localStorage.getItem('user-admin'))
  : null

const initialState = {
  userLogin: { user: userFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
