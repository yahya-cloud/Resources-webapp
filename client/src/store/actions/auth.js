import { USER, LOGOUT, SHOWLOADER } from './actionTypes'
import * as api from '../../api/index'
import loaderFunction from '../../utils/loaderFunction'

export const signIn = (formData) => async (dispatch) => {
  const data = await loaderFunction(formData, api.signIn, dispatch)
  if (data) {
    dispatch({ type: USER, payload: data.result })
    localStorage.setItem('userToken', data.token)
  }
}

export const signUp = (formData) => async (dispatch) => {
  const data = await loaderFunction(formData, api.signUp, dispatch)
  if (data) {
    dispatch({ type: USER, payload: data.result })
    localStorage.setItem('userToken', data.token)
  }
}


export const logOut = (history) => {
  history.push('/')
  localStorage.clear()
  return { type: LOGOUT }
}


export const getUser = () => async (dispatch) => {
  const data = await loaderFunction({}, api.getUser, dispatch)
  if (data) {
    dispatch({ type: USER, payload: data.result })
  }
}