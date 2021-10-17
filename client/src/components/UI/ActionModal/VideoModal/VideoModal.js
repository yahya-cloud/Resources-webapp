import React, { useContext } from 'react'

import { useSelector } from 'react-redux'
import { SocketContext } from '../../../../socket/socket'
import classes from './VideoModal.module.css'
import CallEndIcon from '@mui/icons-material/CallEnd'
import IconButton from '@mui/material/IconButton'
import Button from '../../../UI/Button/Button'

const VideoModal = () => {
  const {
    callUser,
    userVideo,
    leaveCall,
    otherUser,
    myVideo,
    call,
    answerCall,
    setMe,
  } = useContext(SocketContext)
  const { user, modal } = useSelector((state) => state)

  let content = (
    <div className={classes.messageBox}>
      <h3>Do you want to call this user?</h3>
      <Button
        btnType='btnCard'
        clickHandler={() => callUser(modal.receiverId, user.name)}>
        Yes i do
      </Button>
    </div>
  )

  if (call.isReceivingCall) {
    setMe(true)
    content = (
      <div className={classes.messageBox}>
        <h3>Do you want to accept call from this user?</h3>
        <Button btnType='btnCard' clickHandler={answerCall}>
          Yes i do
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.videoChatContainer}>
      {content}
      {otherUser && (
        <div className={classes.otherUserVideo}>
          <video id='userVideo' playsInline ref={userVideo} autoPlay></video>
          <IconButton
            onClick={leaveCall}
            className={classes.endButton}
            color='warning'>
            <CallEndIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
      )}
      <video
        id='userVideo'
        playsInline
        muted={true}
        ref={myVideo}
        autoPlay
        className={classes.myVideo}></video>
    </div>
  )
}

export default VideoModal
