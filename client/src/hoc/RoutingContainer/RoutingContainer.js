import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProducersPage from '../../Pages/ProducersPage/ProducersPage'
import ProducerDashBoard from '../../Pages/ProducerDashboard/ProducerDashBoard'
import Modal from '../../components/UI/Modal/Modal'
import ChatPage from '../../Pages/ChatPage/ChatPage'
import AnswerButton from '../../components/AnswerButton/AnswerButton'


const RoutingContainer = () => {
  const { user } = useSelector((state) => state)

  return (
    <>
        <AnswerButton />
        <Switch>
          <Route path='/chat'>
            <ChatPage />
          </Route>

          {user.userType === 'consumer' && (
            <Route path='/'>
              <ProducersPage />
            </Route>
          )}

          {user.userType === 'producer' && (
            <Route path='/'>
              <ProducerDashBoard />
            </Route>
          )}
        </Switch>{' '}
    </>
  )
}

export default React.memo(RoutingContainer)
