import mongoose from 'mongoose'

import { commonFields } from './common.js'

const consumerSchema = mongoose.Schema({
  ...commonFields,
})

const ConsumerModel = mongoose.model('Consumer', consumerSchema)
export default ConsumerModel