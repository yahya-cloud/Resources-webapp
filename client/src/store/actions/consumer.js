import * as api from '../../api/index'
import { SHOWMODAL, USER } from './actionTypes'
import loaderFunction from '../../utils/loaderFunction'

export const makeRequest = (reqParams) => async (dispatch) => {
  const data = await loaderFunction(reqParams, api.makeRequest, dispatch)
  if (data) {
    dispatch({ type: SHOWMODAL, modalType: 'loader', payload: data.message })
  }
}

