import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http'
import morgan from 'morgan'
import { Server } from 'socket.io'
import { socketEvents } from './socket/socket.js'

import authRoutes from './routes/auth.js'
import consumerRoutes from './routes/consumer.js'
import producerRoutes from './routes/producer.js'
import conversationRoutes from './routes/conversation.js'
import messageRoutes from './routes/message.js'

const app = express()
const PORT = process.env.PORT || 5000
const server = http.Server(app)

dotenv.config()

const io = new Server(server, {
  cors: { origin: process.env.SOCKET_IO_ORIGIN },
})
socketEvents(io)

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//routes
app.use('/api/auth', authRoutes)
app.use('/api/consumer', consumerRoutes)
app.use('/api/producer', producerRoutes)
app.use('/api/conversation', conversationRoutes)
app.use('/api/message', messageRoutes)

if (process.env.NODE_ENV) {
  app.use(morgan('dev'))
}

//CONNECTION URL FROM MONGOOSE
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(PORT, () => console.log('server running on port ' + PORT))
  )
  .catch((err) => console.log(err))
