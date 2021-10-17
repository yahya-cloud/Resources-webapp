import React from 'react'

import Navbar from '../Navbar/Navbar'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerNavbar}>
        <Navbar />
      </div>
      <h2 className={classes.logo}>Resources</h2>
      <div className={classes.text}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, invidunt ut
        </p>
      </div>
    </div>
  )
}

export default Footer
