import express from 'express'
import { isProducer } from '../middleware/authMiddleware.js'
import {
  changeResourceQty,
  acceptRequest,
  rejectRequest,
} from '../db/controllers/producer.js'

const router = express.Router()

router.put('/changeResourceQty', isProducer, changeResourceQty)
router.put('/acceptRequest', isProducer, acceptRequest)
router.put('/rejectRequest', isProducer, rejectRequest)


export default router
