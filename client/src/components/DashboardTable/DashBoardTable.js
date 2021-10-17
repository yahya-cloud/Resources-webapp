import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'

import classes from './DashBoardTable.module.css'
import ActionButtons from '../ActionButtons/ActionButtons'
import Button from '../UI/Button/Button'

const DashBoardTable = ({ rows, acceptRequest, rejectRequest }) => {
  return (
    <Grid item xs={12}>
      <div className={classes.dashBoardTable}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell algin='left'>Name</TableCell>
                <TableCell align='left'>Requirement</TableCell>
                <TableCell align='left'>Quantity</TableCell>
                <TableCell align='left'>Number</TableCell>
                <TableCell className={classes.actionBtnHeading} align='left'>
                  Contact
                </TableCell>
                <TableCell align='left'>Accept/Reject</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='left'>
                    {row.resources.map((req) => `${req.name},`)}
                  </TableCell>
                  <TableCell align='left'>
                    {row.resources.map((req) => `${req.quantity},`)}
                  </TableCell>
                  <TableCell align='left'>{row.phoneNumber}</TableCell>
                  <TableCell align='center'>
                    <ActionButtons userInfo={row} page='dashboard' />
                  </TableCell>
                  <TableCell align='left'>
                    <Button
                      clickHandler={() => acceptRequest(row._id)}
                      btnType='btnAccept--small'>
                      accept
                    </Button>
                    <Button
                      clickHandler={() => rejectRequest(row._id)}
                      btnType='btnReject--small'>
                      reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Grid>
  )
}

export default DashBoardTable
