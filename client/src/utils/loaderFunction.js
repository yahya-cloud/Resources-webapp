import { SHOWLOADER,SHOWMESSAGE, HIDEMODAL } from '../store/actions/actionTypes'

const loaderFunction = async (params, apiCall, dispatch) => {
  try {
    dispatch({ type: SHOWLOADER, modalType:'loader' })
    const { data } = await apiCall(params)
    dispatch({ type: HIDEMODAL })
    return data
  } catch (error) {
    const errMessage = error.response?.data?.message
    dispatch({ type: SHOWMESSAGE, modalType: 'message', payload: errMessage })
  }
}

export default loaderFunction
