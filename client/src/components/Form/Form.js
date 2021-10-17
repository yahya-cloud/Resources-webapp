import React, { useState, useEffect } from 'react'
import './Form.css'

import Input from './Input/Input.js'
import checkValidity from '../../utils/checkvalidity'
import Button from '../UI/Button/Button'

const Form = (props) => {
  const [inputData, setInputData] = useState({})
  const [formIsValid, setFormIsValid] = useState(false)

  //setting input and their validation fields
  useEffect(() => {
    if (!props.signup) {
      setInputData({
        email: {
          type: 'email',
          name: 'email',
          value: '',
          validation: {
            required: true,
            checkEmail: true,
          },
          valid: false,
          touched: false,
        },

        password: {
          type: 'password',
          name: 'password',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
      })
    } else {
      setInputData({
        photo: {
          type: 'photo',
          name: 'photo',
          value: '',
          validation: {},
          valid: true,
          touched: false,
        },
        name: {
          type: 'text',
          name: 'name',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        userType: {
          type: 'userType',
          name: 'userType',
          value: 'consumer',
          validation: {},
          valid: true,
          touched: false,
        },
        email: {
          type: 'email',
          name: 'email',
          value: '',
          validation: {
            required: true,
            checkEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          type: 'password',
          name: 'password',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        phoneNumber: {
          type: 'text',
          name: 'phoneNumber',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
      })
    }
  }, [props.signup])

  //array to map inputs
  const formInputs = []
  for (let key in inputData) {
    formInputs.push({ ...inputData[key] })
  }

  const changeHandler = (e, photoData) => {
    //changing object reference
    let updatedForm = { ...inputData }

    //file base64 react doest give event object
    if (photoData) {
      updatedForm['photo'].value = photoData
    } else {
      const updatedFormElement = updatedForm[e.target.name]
      updatedFormElement.value = e.target.value
      updatedFormElement.valid = checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      )
      updatedFormElement.touched = true
      updatedForm[e.target.name] = updatedFormElement
    }

    //checking if all the fields are valid
    let tempFormIsValid = true
    for (let input in updatedForm) {
      tempFormIsValid = updatedForm[input].valid && tempFormIsValid
    }

    setInputData(updatedForm)
    setFormIsValid(tempFormIsValid)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let formData = {}
    for (let key in inputData) {
      //if field is not related to address
      formData[key] = inputData[key].value
    }
    props.handleSubmit(formData)
  }

  return (
    <form className='mainForm' onSubmit={(e) => submitHandler(e)}>
      {formInputs.map((el, id) => {
        return (
          <Input
            key={id}
            type={el.type}
            name={el.name}
            changeHandler={changeHandler}
            value={el.value}
            shouldValidate={el.validation}
            isTouched={el.touched}
            inValid={!el.valid}
          />
        )
      })}

      <Button disabled={!formIsValid} btnType='btnCard' btnColor='btnGreen'>
        Submit Details
      </Button>
      {props.signup && (
        <p className='locationPara'>
          After submitting browser will ask for you location please press allow
        </p>
      )}
    </form>
  )
}

export default Form
