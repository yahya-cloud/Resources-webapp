import React, { useState } from 'react'

import * as api from '../../../../api/index'
import { useSelector, useDispatch } from 'react-redux'
import { makeConversation } from '../../../../store/actions/messages'
import classes from './Input.module.css'
import Button from '../../Button/Button'

const Input = (props) => {
  const [message, setMessage] = useState()
  const modal = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const submitHandler = () => {
    props.modalClose()
    dispatch(makeConversation({ ...modal.userInfo, messageText: message }))
  }

  return (
    <div className={classes.inputContainer}>
      <h3> Write your Message here</h3>
      <input
        placeholder='type your message'
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button btnType='btnCard' clickHandler={submitHandler}>
        send message
      </Button>
    </div>
  )
}

export default Input
