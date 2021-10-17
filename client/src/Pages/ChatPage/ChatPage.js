import React, { useEffect, useState } from 'react'

import classes from './ChatPage.module.css'
import Conversation from './Conversation/Conversation'
import SelectChat from '../../components/UI/SelectChat/SelectChat'
import MessageBox from './MessageBox/MessageBox'
import { getConversations } from '../../utils/conversationUtils'
import { useSelector } from 'react-redux'

const ChatPage = () => {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(false)
  const { _id: currentUserId } = useSelector((state) => state.user)

  useEffect(() => {
    getConversations(setConversations)
  }, [])

  return (
    <div className={classes.chatContainer}>
      <div className={classes.chatMenu}>
        <h1>Chats</h1>
        {conversations.map((el) => (
          <div key={el._id} onClick={() => setCurrentChat(el)}>
            <Conversation
              currentUserId={currentUserId}
              conversation={el}
              currentChat={currentChat}
            />
          </div>
        ))}
      </div>
      <div className={classes.chatPanelContainer}>
        {currentChat ? (
          <MessageBox
          currentChat={currentChat}
          userId={currentUserId}
          // socket={props.socket}
          />
        ) : (
          <SelectChat text='Select a Conversation' />
        )}
      </div>
    </div>
  )
}

export default ChatPage
