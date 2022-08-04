import axios from 'axios'
import {
  DELETE_REPOSITORY,
  DELETE_REPOSITORY_FAIL,
  DELETE_REPOSITORY_REQUEST,
  DELETE_REPOSITORY_SUCCESS,
  EDIT_REPOSITORY_FAIL,
  EDIT_REPOSITORY_REQUEST,
  EDIT_REPOSITORY_SUCCESS,
  ERROR_REPOSITORY,
  FETCH_REPOSITORY,
  FETCH_REPOSITORY_FAIL,
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  LOADING_REPOSITORY,
  RESPOND_REPOSITORY,
  RESPOND_REPOSITORY_FAIL,
  RESPOND_REPOSITORY_REQUEST,
  RESPOND_REPOSITORY_SUCCESS
} from '../constants/repositoryConstants'

export const repositoryList = () => async dispatch => {
  try {
    dispatch({ type: FETCH_REPOSITORY_REQUEST })

    const { data } = await axios.get('/api/team')

    dispatch({ type: FETCH_REPOSITORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FETCH_REPOSITORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const fetchRepositories = () => async dispatch => {
  try {
    dispatch({ type: LOADING_REPOSITORY })

    const { data } = await axios.get('/api/team')

    dispatch({ type: FETCH_REPOSITORY, payload: data })
  } catch (error) {
    dispatch({
      type: ERROR_REPOSITORY,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const respondRepository =
  ({ id, approve }) =>
  async dispatch => {
    try {
      await axios.put(`/api/team/${id}/approve?value=${approve}`)

      dispatch({
        type: RESPOND_REPOSITORY,
        payload: { id, status: approve ? 'accepted' : 'rejected' }
      })
    } catch (error) {
      dispatch({
        type: ERROR_REPOSITORY,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const editRepository = payload => async dispatch => {
  try {
    dispatch({ type: EDIT_REPOSITORY_REQUEST })

    const { data } = await axios.put(`/api/team/${payload._id}`, payload)

    dispatch({ type: EDIT_REPOSITORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: EDIT_REPOSITORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deleteRepository = id => async dispatch => {
  try {
    await axios.delete(`/api/team/${id}`)

    dispatch({ type: DELETE_REPOSITORY, payload: id })
  } catch (error) {
    dispatch({
      type: ERROR_REPOSITORY,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
