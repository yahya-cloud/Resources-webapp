import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Backdrop } from '@mui/material'

import { SHOWLOADER, HIDEMODAL } from '../../store/actions/actionTypes'
import { makeRequest } from '../../store/actions/consumer'
import * as api from '../../api/index'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import classes from './ProducersPage.module.css'
import Button from '../../components/UI/Button/Button'
import nameQtyArray from '../../utils/nameQtyArrray'

const ProducersPage = () => {
  const [producers, setProducers] = useState([])
  const [producerId, setProducerId] = useState()
  const [resources, setResources] = useState({ remdesivir: 0, dolo: 0 })
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const showInputHandler = (prodId) => {
    setShow(true)
    setProducerId(prodId)
  }

  const onInputChange = (e) => {
    let newQuantity = { ...resources }
    newQuantity[e.target.name] = +e.target.value
    setResources(newQuantity)
  }

  const submitHandler = () => {
    const resourceArray = nameQtyArray(resources)
    const requestParams = { resourceArray, producerId }
    dispatch(makeRequest(requestParams))
    setShow(false)
  }

  useEffect(() => {
    ;(async function getProducers() {
      dispatch({ type: SHOWLOADER })
      let { data } = await api.getProducers()
      dispatch({ type: HIDEMODAL })
      setProducers(data.result)
    })()
  }, [dispatch])

  return (
    <>
      {' '}
      <Grid className={'gridContainer'} container spacing={4}>
        {producers.map((producer) => (
          <Grid
            key={producer._id}
            className={classes.gridItem}
            item
            xs={12}
            md={4}>
            <ProfileCard
              photo={producer.photo}
              resources={producer.resources}
              name={producer.name}
              number={producer.phoneNumber}
              btnFunction={showInputHandler}
              userId={producer._id}
            />
          </Grid>
        ))}
      </Grid>
      <Backdrop open={show} className={classes.backdrop}>
        <div className={classes.inputContainer}>
          <h2>Please fill the Name and Quantity of resources you need</h2>
          <div className={classes.input}>
            <h3>Remdesivir:</h3>
            <input
              type='number'
              onChange={(e) => onInputChange(e)}
              name='remdesivir'
            />
          </div>
          <div className={classes.input}>
            <h3>Dolo:</h3>
            <input
              type='number'
              onChange={(e) => onInputChange(e)}
              name='dolo'
            />
          </div>
          <Button clickHandler={submitHandler} btnType='btnCard'>
            Make Request
          </Button>
        </div>
      </Backdrop>
    </>
  )
}

export default ProducersPage
