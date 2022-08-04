import {
  RESEARCHER_APPROVE_FAIL,
  RESEARCHER_APPROVE_REQUEST,
  RESEARCHER_APPROVE_SUCCESS,
  RESEARCHER_DELETE_FAIL,
  RESEARCHER_DELETE_REQUEST,
  RESEARCHER_DELETE_SUCCESS,
  RESEARCHER_LIST_FAIL,
  RESEARCHER_LIST_REQUEST,
  RESEARCHER_LIST_SUCCESS
} from '../constants/researcherConstants'

export const researcherListReducer = (state = { researchers: [] }, action) => {
  switch (action.type) {
    case RESEARCHER_LIST_REQUEST:
      return { loading: true, researchers: [] }
    case RESEARCHER_LIST_SUCCESS:
      return { loading: false, researchers: action.payload }
    case RESEARCHER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const researcherApproveReducer = (state = {}, action) => {
  switch (action.type) {
    case RESEARCHER_APPROVE_REQUEST:
      return { loading: true }
    case RESEARCHER_APPROVE_SUCCESS:
      return { loading: false, success: true }
    case RESEARCHER_APPROVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const researcherDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case RESEARCHER_DELETE_REQUEST:
      return { loading: true }
    case RESEARCHER_DELETE_SUCCESS:
      return { loading: false, success: true }
    case RESEARCHER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

/**
 * 1. Fetch all researchers. TODO: implement filters
 * 2. Approve a researcher
 * 3. Delete a researcher
 */
export const researchers = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case 'LOADING_RESEARCHER': {
      return { loading: true, data: [] }
    }
    case 'FETCH_RESEARCHER': {
      return { loading: false, data: action.payload }
    }
    case 'UPDATE_RESEARCHER': {
      const researchers = state.data.filter(r => r._id !== action.payload._id)
      return { loading: false, data: [...researchers, action.payload] }
    }
    case 'DELETE_RESEARCHER': {
      return {
        loading: false,
        data: state.data.filter(r => r._id !== action.payload._id)
      }
    }
  }
}
