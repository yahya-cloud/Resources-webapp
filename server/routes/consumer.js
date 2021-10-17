import express from 'express'
import {isConsumer} from '../middleware/authMiddleware.js'
import { getProducers, makeRequest } from '../db/controllers/consumer.js'

const router = express.Router()

router.get('/getProducers', isConsumer, getProducers)
router.post('/makeRequest', isConsumer, makeRequest)
export default router