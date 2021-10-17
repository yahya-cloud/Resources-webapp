import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import classes from './Navbar.module.css'

const Navbar = () => {
  const { user } = useSelector((state) => state)
  const { userType } = user
  return (
    <div className={classes.navbar}>
      <NavLink
        exact
        activeClassName={classes.navItemActive}
        className={classes.navItem}
        to='/'>
        {userType === 'consumer' ? 'Producer' : 'Dashboard'} 
      </NavLink>

      <NavLink
        exact
        activeClassName={classes.navItemActive}
        className={classes.navItem}
        to='/chat'>
        Chat
      </NavLink>

      <NavLink
        exact
        activeClassName={classes.navItemActive}
        className={classes.navItem}
        to='/locate'>
        Locate
      </NavLink>

      <NavLink
        exact
        activeClassName={classes.navItemActive}
        className={classes.navItem}
        to='/about'>
        About
      </NavLink>
    </div>
  )
}

export default Navbar
