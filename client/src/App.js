import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import decode from 'jwt-decode'
import { getUser, logOut } from './store/actions/auth'
import socket, { ContextProvider } from './socket/socket'
import { showLoader, hideLoader } from './store/actions/modal'

import './App.css'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import RoutingContainer from './hoc/RoutingContainer/RoutingContainer'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/UI/Modal/Modal'

const App = () => {
  const { user } = useSelector((state) => state)
  const token = localStorage.getItem('userToken')
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (user) {
      socket.emit('addUser', user._id)
    }
  }, [user])

  useEffect(() => {
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logOut(history))
      } else {
        dispatch(getUser())
      }
    }
  }, [dispatch, token, history])

  let appContent
  if (user) {
    appContent = <RoutingContainer />
  } else {
    appContent = (
      <Route path='/'>
        <RegisterPage />
      </Route>
    )
  }

  return (
    <>
      <ContextProvider>
        <Modal />
        {user && <Header />}
        <div className='AppContainer'>{appContent}</div>
        {user && <Footer />}
      </ContextProvider>
    </>
  )
}

export default App
