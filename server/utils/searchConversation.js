import conversationModel from '../db/models/conversation.js'

async function searchConversation(user1Id, user2Id) {
  const conversations = await conversationModel.find({})
  const isConversationPresent = conversations.filter((conv) => {
    let counter = 0
    conv.members.map((person) => {
      if (person.id === user1Id || person.id === user2Id) {
        counter++
      }
    })
    return counter === 2
  })

  return isConversationPresent[0]
}

export default searchConversation
