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
  userLogin: userLoginReducer
})

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const initialState = {
  userLogin: { user: userFromStorage },
  researcherList: researcherListReducer,
  researcherApprove: researcherApproveReducer,
  researcherEdit: researcherEditReducer,
  researcherDelete: researcherDeleteReducer
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
