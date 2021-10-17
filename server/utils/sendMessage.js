import MessageModel from '../db/models/message.js'

async function sendMessage(messageBody) {
  try {
    const newMessage = new MessageModel(messageBody)
    await newMessage.save()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export default sendMessage
