import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classes from './AnswerButton.module.css'
import { SocketContext } from '../../socket/socket'
import { showVideo } from '../../store/actions/modal'

import Button from '@mui/material/Button'

const AnswerButton = () => {
  const [show, setShow] = useState(false)
  const { call } = useContext(SocketContext)
  const dispatch = useDispatch()

  const clickHandler = () => {
    setShow(false)
    dispatch(showVideo())
  }

  useEffect(() => {
    if (call.isReceivingCall) {
      setShow(true)
    }
  }, [call])

  return (
    <div
      className={
        show ? `${classes.container}` : `${classes.container} ${classes.hide}`
      }>
      <h3>{call.userName} is calling you</h3>
      <Button onClick={clickHandler} variant='contained' color='success'>
        Accept Call
      </Button>
    </div>
  )
}

export default AnswerButton
