import ConsumerModel from '../models/consumer.js'
import ProducerModel from '../models/producer.js'

// @desc  Get doctors
// @route GET/api/consumer/getConsumers
// @access Private
export const getProducers = async (req, res) => {
  try {
    const allProducers = await ProducerModel.find()
    const result = allProducers.filter((producer) => {
      let { remdesivir, dolo } = producer.resources
      const resourceQuantity = remdesivir + dolo

      return resourceQuantity > 0
    })
    res.status(200).json({ result: result })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc  Get doctors
// @route GET/api/consumer/getConsumers
// @access Private
export const makeRequest = async (req, res) => {
  try {
    const { resourceArray, producerId } = req.body
    const { name, email, phoneNumber, photo, _id: userId, coords } = req.user

    const producer = await ProducerModel.findById(producerId)

    const alreadyRequested = producer.requests.find(
      (r) => r.userId.toString() === userId.toString()
    )

    if (alreadyRequested) {
      res.status(400)
      throw new Error('Resource is Already Requested to this producer')
    }

    const request = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      photo: photo,
      userId: userId,
      coords: coords,
      resources: resourceArray,
    }

    producer.requests.push(request)
    const success = await producer.save()
    if (success) {
      res.status(201).json({ message: 'Request have been successfully made' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
