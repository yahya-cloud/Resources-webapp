import {
  SHOWLOADER,
  HIDEMODAL,
  SHOWINPUT,
  SHOWVIDEO,
  SHOWMESSAGE
} from '../actions/actionTypes'

export const showLoader = () => {
  return { type: SHOWLOADER, modalType: 'loader'}
}

export const showMessage = (message) => {
  return { type: SHOWMESSAGE, modalType: 'message', payload: message }
}

export const hideLoader = () => {
  return { type: HIDEMODAL }
}

export const showInput = (userInfo) => {
  return { type: SHOWINPUT, modalType: 'input', payload: userInfo }
}

export const showVideo = (receiverId) => {
  return { type: SHOWVIDEO, modalType: 'video', payload: receiverId }
}
