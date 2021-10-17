import React from 'react'
import Navbar from '../Navbar/Navbar'
import UserInfo from './UserInfo/UserInfo'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <h2 className={classes.logo}>Resources</h2>
      <div className={classes.navbarContainer}>
        <Navbar />
      </div>
      <div className={classes.userInfo}>
        <UserInfo />
      </div>
    </div>
  )
}

export default Header
