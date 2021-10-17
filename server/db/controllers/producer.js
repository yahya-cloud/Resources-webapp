import ProducerModel from '../models/producer.js'

export const changeResourceQty = async (req, res) => {
  try {
    const { _id: id } = req.user
    const { name, value } = req.body

    const producer = await ProducerModel.findById(id)
    const { resources } = producer

    resources[name] = value

    const success = await producer.save()
    if (success) {
      res.status(201).json({
        result: success,
        message: 'Resources have been successfully changed',
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const acceptRequest = async (req, res) => {
  try {
    const { _id } = req.user
    const { rowId } = req.body

    const result = await ProducerModel.findByIdAndUpdate(
      _id,
      {
        $pull: { requests: { _id: rowId } },
        $inc: { acceptedRequests: 1 },
      },
      { new: true }
    )

    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const rejectRequest = async (req, res) => {
  try {
    const { _id } = req.user
    const { rowId } = req.body
    console.log(req.body)

    const result = await ProducerModel.findByIdAndUpdate(
      _id,
      {
        $pull: { requests: { _id: rowId } },
        $inc: { rejectedRequests: 1 },
      },
      { new: true }
    )

    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
