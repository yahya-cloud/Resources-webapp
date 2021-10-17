import { SHOWMODAL } from './actionTypes'
import * as api from '../../api/index'
import loaderFunction from '../../utils/loaderFunction'

export const makeConversation = (params) => async (dispatch) => {
  console.log(params)
  const data = await loaderFunction(params, api.makeConversation, dispatch)
  if (data) {
    dispatch({ type: SHOWMODAL, modalType: 'message', payload: data.message })
  }
}
