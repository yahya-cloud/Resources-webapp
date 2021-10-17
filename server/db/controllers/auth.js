import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

import ConsumerModel from '../models/consumer.js'
import ProducerModel from '../models/producer.js'
import HelperModel from '../models/helper.js'

import { searchModels } from '../../utils/searchModels.js'

dotenv.config()

const secret = process.env.SECRET

// @desc  SignIn user
// @route POST/api/auth/signIn
// @access Public
export const signIn = async (req, res) => {
  try {
    const oldUser = await searchModels(req.body.email)

    if (!oldUser)
      return res
        .status(404)
        .json({ message: "User doesn't exist. Please sign up or try again " })


    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      oldUser.password
    )

    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: 'Invalid Password. Please try again' })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '1h',
    })

    res.status(200).json({ result: oldUser, token })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ message: 'Something went wrong. Please try again later' })
  }
}

// @desc  SignUp user
// @route POST/api/auth/signUp
// @access Public
export const signUp = async (req, res) => {
  try {
    const userType = req.body.userType
    const oldUser = await searchModels(req.body.email)

    if (oldUser)
      return res
        .status(400)
        .json({ message: 'User already exists. Please Go to sign-in page' })

    const hashedPassword = await bcrypt.hash(req.body.password, 12)

    const result = await (userType === 'consumer'
      ? ConsumerModel
      : userType === 'producer'
      ? ProducerModel
      : HelperModel
    ).create({ ...req.body, password: hashedPassword })
 

    const token = jwt.sign({ id: result.id }, secret, { expiresIn: '1h' })

    res.status(200).json({ result, token })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}



// @desc  Get user
// @route GET/api/auth/getUser
// @access Private
export const getUser = async (req, res) => {
  try {
    res.status(201).json({ result: req.user })
  } catch (error) {
    console.log(error)
  }
}