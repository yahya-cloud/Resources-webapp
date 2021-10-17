import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showInput, showVideo } from '../../store/actions/modal'
import { SocketContext } from '../../socket/socket'

import IconButton from '@mui/material/IconButton'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NavigationIcon from '@mui/icons-material/Navigation'
import VideocamIcon from '@mui/icons-material/Videocam'
import InfoIcon from '@mui/icons-material/Info'

const ActionButtons = (props) => {
  const { user } = useSelector((state) => state)
  const { setMe, callUser } = useContext(SocketContext)
  const { name, userId, photo } = props.userInfo
  const dispatch = useDispatch()

  let fontSize = props.page === 'dashBoard' ? 'small' : 'large'

  const chatButtonHandler = () => {
    dispatch(showInput({ name, id: userId, photo }))
  }

  const videoButtonHandler = () => {
    dispatch(showVideo(userId))
    setMe(true)
  }

  return (
    <>
      <ul class='profile-social-links'>
        <li>
          <IconButton onClick={chatButtonHandler}>
            <ChatBubbleIcon style={{ color: '#19BFC5' }} fontSize={fontSize} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <NavigationIcon style={{ color: '#20a58a' }} fontSize={fontSize} />
          </IconButton>
        </li>
        <li>
          <IconButton onClick={videoButtonHandler}>
            <VideocamIcon style={{ color: '#333' }} fontSize={fontSize} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            {props.page !== 'dashboard' && (
              <InfoIcon style={{ color: '#FF6464' }} fontSize={fontSize} />
            )}
          </IconButton>
        </li>
      </ul>
    </>
  )
}

export default ActionButtons
