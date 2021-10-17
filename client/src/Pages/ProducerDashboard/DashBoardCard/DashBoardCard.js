import React, { useState } from 'react'
import { Grid } from '@mui/material'

import Button from '../../../components/UI/Button/Button'
import classes from './DashBoardCard.module.css'

const DashBoardCard = ({
  remdisivirNumber,
  doloNumber,
  btnFunction,
  rejectedNumber,
  acceptedNumber,
}) => {
  const [remdisivirQty, setRemdisivirQty] = useState(0)
  const [doloQty, setDoloQty] = useState(0)

  return (
    <>
      <Grid item xs={12} md={4}>
        <div className={classes.card}>
          <h3>Resources</h3>
          <div className={classes.inputContainer}>
            <div>
              <h4>Remdesivir:</h4>
              <h5>{remdisivirNumber}</h5>
            </div>
            <input
              onChange={(e) => setRemdisivirQty(e.target.value)}
              type='number'
              className={classes.input}
            />
            <button
              onClick={() =>
                btnFunction({ name: 'remdesivir', value: +remdisivirQty })
              }
              className={classes.button}>
              Change
            </button>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <h4>Dolo:</h4>
              <h5>{doloNumber}</h5>
            </div>
            <input
              onChange={(e) => setDoloQty(e.target.value)}
              type='number'
              className={classes.input}
            />
            <button
              onClick={() => btnFunction({ name: 'dolo', value: +doloQty })}
              className={classes.button}>
              Change
            </button>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className={classes.card}>
          <h3> Rejected Requests</h3>
          <h1 className={classes.rejectedNumber}>{rejectedNumber}</h1>
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className={classes.card}>
          <h3>Accepted Requests</h3>
          <h1 className={classes.acceptedNumber}>{acceptedNumber}</h1>
        </div>
      </Grid>
    </>
  )
}

export default DashBoardCard
