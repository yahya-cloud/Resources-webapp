import React from 'react'
import { useSelector } from 'react-redux'

import classes from './UserInfo.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { collapseClasses } from '@mui/material'

const UserInfo = () => {
  const { user } = useSelector((state) => state)
 
  return (
    <div className={classes.infoContainer}>
      <div
        style={{ backgroundImage: `url(${user.photo})` }}
        className={classes.userPhoto}></div>
      
      <div className={classes.notificationContainer}>
        <div className={classes.notificationNumber}>
          <p>4</p>
        </div>
        <NotificationsIcon style={{ color: '#333', fontSize: 30 }} />
      </div>

    </div>
  )
}

export default UserInfo
