import {
  DELETE_REPOSITORY_FAIL,
  DELETE_REPOSITORY_REQUEST,
  DELETE_REPOSITORY_SUCCESS,
  EDIT_REPOSITORY_FAIL,
  EDIT_REPOSITORY_REQUEST,
  EDIT_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_FAIL,
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  RESPOND_REPOSITORY_FAIL,
  RESPOND_REPOSITORY_REQUEST,
  RESPOND_REPOSITORY_SUCCESS
} from '../constants/repositoryConstants'

export const repositoryListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOSITORY_REQUEST:
      return { loading: true }
    case FETCH_REPOSITORY_SUCCESS:
      return { loading: false, repositories: action.payload }
    case FETCH_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const respondRepositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case RESPOND_REPOSITORY_REQUEST:
      return { loading: true }
    case RESPOND_REPOSITORY_SUCCESS:
      return { loading: false, repository: action.payload }
    case RESPOND_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const editRepositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_REPOSITORY_REQUEST:
      return { loading: true }
    case EDIT_REPOSITORY_SUCCESS:
      return { loading: false, repository: action.payload }
    case EDIT_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteRepositoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REPOSITORY_REQUEST:
      return { loading: true }
    case DELETE_REPOSITORY_SUCCESS:
      return { loading: false, repository: action.payload }
    case DELETE_REPOSITORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

/** TODO: Try wether `loading` and `error` could be omitted
 * Cases:
 * 1. Fetch all repositories. TODO: Implement filters
 * 2. Update a repository
 * 3. Respond (approve/reject) to a repository
 * 4. Delete a repository
 * 5. Error repository
 */
export const repositoriesReducer = (
  state = { loading: false, error: null, data: [] },
  action
) => {
  switch (action.type) {
    case 'LOADING_REPOSITORY': {
      return { loading: true, error: null, data: [...state.data] }
    }
    case 'FETCH_REPOSITORY': {
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    }
    case 'EDIT_REPOSITORY': {
      const { _id, name, ...rest } = action.payload

      const data = state.data.map(r =>
        r._id === _id
          ? { ...r, _id, name, repository: { ...r.repository, ...rest } }
          : r
      )

      return {
        loading: false,
        error: null,
        data
      }
    }
    case 'RESPOND_REPOSITORY': {
      const data = state.data.map(r =>
        r._id === action.payload.id
          ? { ...r, status: action.payload.status }
          : r
      )

      return {
        loading: false,
        error: null,
        data
      }
    }
    case 'DELETE_REPOSITORY': {
      return {
        loading: false,
        error: null,
        data: state.data.filter(r => r._id !== action.payload)
      }
    }
    case 'ERROR_REPOSITORY': {
      return {
        loading: false,
        error: action.payload,
        data: [...state.data]
      }
    }
    default:
      return state
  }
}
