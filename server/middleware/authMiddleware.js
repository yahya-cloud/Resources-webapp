import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import ConsumerModel from '../db/models/consumer.js'
import ProducerModel from '../db/models/producer.js'

dotenv.config()

const secret = process.env.SECRET

export const isConsumer = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    let decodedData

    decodedData = jwt.verify(token, secret)

    req.user = await ConsumerModel.findById(decodedData.id)

    if (!req.user) {
      res.status(401)
      throw new Error()
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'User Not Found' })
  }
}

export const isProducer = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    let decodedData

    decodedData = jwt.verify(token, secret)

    req.user = await ProducerModel.findById(decodedData.id)

    if (!req.user) {
      res.status(401)
      throw new Error()
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'User Not Found' })
  }
}
