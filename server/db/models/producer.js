import mongoose from 'mongoose'
import { commonFields } from './common.js'

const requestFields = {
  photo: String,
  name: { type: String, required: true },
  coords: {
    lat: { type: String, required: true },
    long: { type: String, required: true },
  },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  resources: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  userId: { type: String, required: true },
}

const producerSchema = mongoose.Schema({
  ...commonFields,
  resources: {
    remdesivir: { type: Number, default: 0 },
    dolo: { type: Number, default: 0 },
  },
  complaints: { type: Number, default: 0 },
  acceptedRequests: { type: Number, default: 0 },
  rejectedRequests: { type: Number, default: 0 },
  requests: [
    {
      ...requestFields,
    },
  ],
})

const ProducerModel = mongoose.model('Producer', producerSchema)
export default ProducerModel
