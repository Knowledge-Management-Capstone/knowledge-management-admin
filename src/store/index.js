import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducers'
import {
  researcherListReducer,
  researcherApproveReducer,
  researcherDeleteReducer
} from './reducers/researcherReducers'
import {
  repositoryListReducer,
  respondRepositoryReducer,
  editRepositoryReducer
} from './reducers/repositoryReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  researcherList: researcherListReducer,
  researcherApprove: researcherApproveReducer,
  researcherDelete: researcherDeleteReducer,
  repositoryList: repositoryListReducer,
  respondRepository: respondRepositoryReducer,
  editRepository: editRepositoryReducer
})

const userFromStorage = localStorage.getItem('user-admin')
  ? JSON.parse(localStorage.getItem('user-admin'))
  : null

const initialState = {
  userLogin: { user: userFromStorage }
}

const middlewares = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
