import mongoose from 'mongoose'
import { commonFields } from './common.js'

const arrayFields = {
  ...commonFields,
  resources: [
    {
      resourceName: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
}

const helperSchema = mongoose.Schema({
  ...commonFields,
  acceptedRequests: { type: Number, default: 0 },
  rejectedRequests: { type: Number, default: 0 },
  allotedProducers: [
    {
     ...arrayFields
    },
  ],
})

const HelperModel = mongoose.model('Helper', helperSchema)
export default HelperModel
