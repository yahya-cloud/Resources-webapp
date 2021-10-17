import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import ConsumerModel from '../db/models/consumer.js'
import ProducerModel from '../db/models/producer.js'
import HelperModel from '../db/models/helper.js'

dotenv.config()

const secret = process.env.SECRET

export const searchModels = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    let decodedData

    decodedData = jwt.verify(token, secret)

    req.user = await ConsumerModel.findById(decodedData.id)
    if (!req.user) {
      req.user = await ProducerModel.findById(decodedData.id)
      if (!req.user) {
        req.user = await HelperModel.findById(decodedData.id)
      }
    }

    next()
  } catch (error) {
    console.error(error)
    res.status(401)
    throw new Error('Not authorized, token failed')
  }
}
