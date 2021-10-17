import {
  SHOWMODAL,
  HIDEMODAL,
  SHOWINPUT,
  SHOWVIDEO,
  SHOWMESSAGE,
  SHOWLOADER,
} from '../actions/actionTypes'

const loader = (state = { show: false, msg: '' }, action) => {
  switch (action.type) {
    case SHOWLOADER:
      return { show: true, type: 'loader' }

    case SHOWMESSAGE:
      return { show: true, type: 'message', msg: action?.payload }

    case HIDEMODAL:
      return { show: false, type: '' }

    case SHOWINPUT:
      return { show: true, type: 'input', userInfo: action?.payload }

    case SHOWVIDEO:
      return { show: true, type: 'video', receiverId: action?.payload }

    default:
      return state
  }
}

export default loader
