import conversationModel from '../models/conversation.js'
import searchConversation from '../../utils/searchConversation.js'
import sendMessage from '../../utils/sendMessage.js'

// @desc  Make new Conversation
// @route POST/api/conversation/
// @access Private
export const makeConversation = async (req, res) => {
  try {
    const { name: userName, photo: userPhoto, _id: userId } = req.user
    const {
      name: otherUserName,
      photo: otherUserPhoto,
      id: otherUserId,
      messageText,
    } = req.body

    console.log(req.body)

    const isConversationPresent = await searchConversation(
      userId.toString(),
      otherUserId
    )

    if (!isConversationPresent) {
      const newConversation = new conversationModel({
        members: [
          { id: userId, name: userName, photo: userPhoto },
          { id: otherUserId, name: otherUserName, photo: otherUserPhoto },
        ],
      })
      const savedConversation = await newConversation.save()
      await sendMessage({
        senderId: userId,
        text: messageText,
        conversationId: savedConversation._id,
      })
      res.status(200).json({ message: 'Message sent succefully' })
    } else {
      await sendMessage({
        senderId: userId,
        text: messageText,
        conversationId: isConversationPresent._id,
      })
      res.status(200).json({ message: 'Message sent succefully' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

// @desc  find user Conversations
// @route get/api/conversation/:userId
// @access Private
export const getConversations = async (req, res) => {
  const { _id: id } = req.user

  try {
    const conversation = await conversationModel.find({
      members: {$elemMatch: {id: id.toString()} },
    })
    res.status(200).json(conversation)
  } catch (error) {
    res.status(500).json(err)
  }
}
