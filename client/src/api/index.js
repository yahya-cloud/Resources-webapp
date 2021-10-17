import * as axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userToken')) {
    req.headers.Authorization = ` Bearer ${localStorage.getItem('userToken')}`
  }
  return req
})

//common requests
export const signIn = (formData) => API.post('/api/auth/signIn', formData)
export const signUp = (formData) => API.post('/api/auth/signUp', formData)
export const getUser = () => API.get('/api/auth/getUser')

//consumer requests
export const getProducers = () => API.get('/api/consumer/getProducers')
export const makeRequest = (data) => API.post('/api/consumer/makeRequest', data)

//producer request
export const changeResourceQty = (data) =>
  API.put('/api/producer/changeResourceQty', data)
export const acceptRequest = (data) =>
  API.put('/api/producer/acceptRequest', data)
export const rejectRequest = (data) =>
  API.put('/api/producer/rejectRequest', data)

//conversation
export const makeConversation = (data) =>
  API.post('/api/conversation/makeConversation', data)
export const getConversations = () =>
  API.get('/api/conversation/getConversations')
export const getMessages = (id) => API.get(`/api/message/${id}`)
export const sendMessage = (data) => API.post('/api/message', data)
