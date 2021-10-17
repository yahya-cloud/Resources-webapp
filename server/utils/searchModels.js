import ConsumerModel from '../db/models/consumer.js'
import ProducerModel from '../db/models/producer.js'
import HelperModel from '../db/models/helper.js'

export const searchModels = async (email) => {
  try {
    let user
    user = await ConsumerModel.findOne({ email })
    if (!user) {
      user = await ProducerModel.findOne({ email })
      if (!user) {
        user = await HelperModel.findOne({ email })
      }
    }
    return user
  } catch (error) {
    console.log(error)
  }
}
