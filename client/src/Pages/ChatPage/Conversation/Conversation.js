import React from 'react'

import classes from './Conversation.module.css'
import avatar from '../../../assets/noAvatar.png'

const Conversation = ({ conversation, currentChat, currentUserId }) => {
  const { name, photo } = conversation.members.find(
    (el) => el.id !== currentUserId
  )

  return (
    <div
      className={
        conversation._id === currentChat._id
          ? `${classes.conversation} ${classes.active}`
          : classes.conversation
      }>
      <img
        className={classes.conversationImg}
        src={photo ? `${photo}` : avatar}
        alt=''
      />
      <div className={classes.conversationTexts}>
        <span className={classes.conversationName}>{name}</span>
        {/* <span className={classes.conversationLastText}>hey you there?</span> */}
      </div>
    </div>
  )
}

export default Conversation
