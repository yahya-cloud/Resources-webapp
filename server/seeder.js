import mongoose from 'mongoose'
import dotenv from 'dotenv'
import ConsumerModel from './db/models/consumer.js'
import ProducerModel from './db/models/producer.js'
import HelperModel from './db/models/helper.js'
import express from 'express'

dotenv.config()

const consumer = {
  photo: "",
  name: "Yahya",
  coords:{lat: "54", long: "34" },
  userType: "helper",
  email: "consumer1@gmail.com",
  password: "pass",
  phoneNumber: "9810896720"
}

const helper = {
  photo: "",
  name: "helper",
  coords:{lat: "54", long: "34" },
  userType: "helper",
  email: "helper1@gmail.com",
  password: "pass",
  phoneNumber: "9810896720"
}

const producer = {
  photo: "",
  name: "Yahya",
  coords:{lat: "54", long: "34" },
  userType: "helper",
  email: "helper1@gmail.com",
  password: "pass",
  phoneNumber: "9810896720"
}

const importData = async () => {
  try {
    await ConsumerModel.deleteMany()
    await ProducerModel.deleteMany()
    await HelperModel.deleteMany()

    await ConsumerModel.insert(consumer)
    await ProducerModel.insert(producer)
    await HelperModel.insert(helper)

  
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}


if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
