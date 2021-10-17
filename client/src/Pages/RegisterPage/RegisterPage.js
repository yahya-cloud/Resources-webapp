import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp, signIn } from '../../store/actions/auth'
import Form from '../../components/Form/Form'
import classes from './Register.module.css'
import getCoordinates from '../../utils/getCoordinates'
import { showLoader, hideLoader } from '../../store/actions/modal'

const RegisterPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const dispatch = useDispatch()

  const signUpHandler = () => {
    setIsSignUp((prevState) => !prevState)
  }

  const handleSubmit = async (body) => {
    try {
      if (isSignUp) {
        const { coords } = await getCoordinates()
        let formBody = {
          ...body,
          coords: { lat: coords.latitude, long: coords.longitude },
        }
        dispatch(signUp(formBody))
      } else {
        dispatch(signIn(body))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.formContainer}>
      <h1>{isSignUp ? 'Sign Up ' : 'Sign In'}</h1>
      <Form signup={isSignUp} handleSubmit={handleSubmit} />
      <button className={classes.button} onClick={signUpHandler}>
        {isSignUp ? 'or SignIn' : 'or Signup'}
      </button>
    </div>
  )
}

export default RegisterPage
