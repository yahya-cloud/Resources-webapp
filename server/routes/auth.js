import express from 'express'
import { signUp, signIn, getUser } from '../db/controllers/auth.js'
import {searchModels} from '../middleware/searchMiddleware.js'

const router = express.Router()

router.post('/signUp', signUp)
router.post('/signIn', signIn)
router.get('/getUser', searchModels, getUser)

export default router