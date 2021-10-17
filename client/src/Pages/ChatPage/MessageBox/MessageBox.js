import React, { useState, useEffect, useRef } from 'react'

import Message from './Message/Message'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import classes from './MessageBox.module.css'
import avatar from '../../../assets/noAvatar.png'

import {
  getConversationMessages,
  sendMessage,
  updateConversation,
  setArrivalMessageEvent,
} from '../../../utils/conversationUtils'

const MessageBox = ({ userId, currentChat }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const scrollRef = useRef()

  const {
    name,
    photo,
    id: receiverId,
  } = currentChat.members.find((el) => el.id !== userId)

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  // }, [messages])

  useEffect(() => {
    setArrivalMessageEvent(setArrivalMessage)
  }, [])

  //getting conversation messages
  useEffect(() => {
    getConversationMessages(currentChat?._id, setMessages)
  }, [currentChat])

  //runs when a message is arrived
  useEffect(() => {
    arrivalMessage &&
      updateConversation(currentChat, setMessages, arrivalMessage)
  }, [arrivalMessage, currentChat])

  const handleSubmit = () => {
    const messageBody = {
      senderId: userId,
      text: newMessage,
      conversationId: currentChat._id,
    }

    sendMessage(messageBody, receiverId, setMessages)
    setNewMessage('')
    // let el = document.getElementById('messageBoxMiddle')
    // console.log(el)
    // el.scrollTo(0, el.scrollHeight)
  }

  return (
    <div className={classes.messageBox}>
      <div className={classes.messageBoxTop}>
        <img
          className={classes.userImg}
          src={photo ? `${photo}` : avatar}
          alt=''
        />
        <h3 className={classes.userName}>{name}</h3>
      </div>
      <div id='messageBoxMiddle' className={classes.messageBoxMiddle}>
        {messages.map((msg) => (
          <div key={msg._id} ref={scrollRef}>
            <Message message={msg} own={msg.senderId === userId} />
          </div>
        ))}
      </div>
      <div className={classes.messageBoxBottom}>
        <textarea
          value={newMessage}
          className={classes.messageBoxInput}
          placeholder='write something'
          onChange={(e) => setNewMessage(e.target.value)}></textarea>
        <div onClick={handleSubmit}>
          <IconButton className={classes.messageBoxButton}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default React.memo(MessageBox)
