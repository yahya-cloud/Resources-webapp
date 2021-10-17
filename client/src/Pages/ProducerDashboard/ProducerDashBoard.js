import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@mui/material'
import {
  changeResourceQty,
  acceptRequest,
  rejectRequest,
} from '../../store/actions/producer'
import classes from './ProducerDashboard.module.css'
import DashBoardCard from './DashBoardCard/DashBoardCard'
import DashBoardTable from '../../components/DashboardTable/DashBoardTable'

const ProducerDashBoard = () => {
  const { user } = useSelector((state) => state)
  const { remdesivir, dolo } = user.resources
  const dispatch = useDispatch()

  const changeHandler = (resource) => {
    dispatch(changeResourceQty(resource))
  }

  const acceptRequestHandler = (rowId) => {
    dispatch(acceptRequest(rowId))
  }

  const rejectRequestHandler = (rowId) => {
    dispatch(rejectRequest(rowId))
  }

  return (
    <Grid className='gridContainer' container spacing={4}>
      <DashBoardCard
        acceptedNumber={user.acceptedRequests}
        rejectedNumber={user.rejectedRequests}
        remdisivirNumber={remdesivir}
        doloNumber={dolo}
        btnFunction={changeHandler}
      />
      <DashBoardTable
        acceptRequest={acceptRequestHandler}
        rejectRequest={rejectRequestHandler}
        rows={user.requests}
      />
    </Grid>
  )
}

export default ProducerDashBoard
