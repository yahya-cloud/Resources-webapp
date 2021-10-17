import { USER } from './actionTypes'
import * as api from '../../api/index'
import loaderFunction from '../../utils/loaderFunction'

export const changeResourceQty = (reqParams) => async (dispatch) => {
  const data = await loaderFunction(reqParams, api.changeResourceQty, dispatch)
  if (data) {
    dispatch({ type: USER, payload: data.result })
  }
}

export const acceptRequest = (rowId) => async (dispatch) => {
  console.log(rowId)
  const data = await loaderFunction(
    { rowId: rowId },
    api.acceptRequest,
    dispatch
  )
  if (data) {
    dispatch({ type: USER, payload: data.result })
  }
}

export const rejectRequest = (rowId) => async (dispatch) => {
  const data = await loaderFunction(
    { rowId: rowId },
    api.rejectRequest,
    dispatch
  )
  if (data) {
    dispatch({ type: USER, payload: data.result })
  }
}
