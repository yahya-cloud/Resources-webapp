import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useStyles from './Styles'

import { hideLoader } from '../../../store/actions/modal'
import Button from '../Button/Button'
import Input from '../ActionModal/Input/Input'
import VideoModal from '../ActionModal/VideoModal/VideoModal'

const Modal = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state) => state.modal)
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:600px)')

  const handleToggle = () => {
    dispatch(hideLoader())
  }

  let modalContent = null

  switch (modal.type) {
    case 'message':
      modalContent = (
        <div
          className={classes.messageBox}
          style={matches ? { width: '80%', height: '40%' } : null}>
          <h3>{modal.msg}</h3>
          <Button btnType='btnCard' clickHandler={handleToggle}>
            ok Got it!
          </Button>
        </div>
      )
      break
    case 'loader':
      modalContent = (
        <CircularProgress
          size={300}
          thickness={1.8}
          style={{ color: '#fff' }}
        />
      )
      break
    case 'input':
      modalContent = <Input modalClose={handleToggle} />
      break

    case 'video':
      modalContent = <VideoModal />
      break

    default:
      break
  }

  return (
    <Backdrop className={classes.backdrop} open={modal.show}>
      {modalContent}
    </Backdrop>
  )
}

export default Modal
