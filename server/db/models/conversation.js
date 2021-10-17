import mongoose from 'mongoose'

const member = {
  id: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String },
}

const conversationSchema = new mongoose.Schema(
  {
    members: [member],
  },
  { timestamps: true }
)

const conversationModel = mongoose.model('Conversation', conversationSchema)

export default conversationModel
