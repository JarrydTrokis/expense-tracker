import mongoose from 'mongoose'
import Expense from '../../models/Expense'

const createExpense = (req, res) => {
  const { title, description, amount, paid } = req.body
  const expense = new Expense({
    _id: new mongoose.Types.ObjectId(),
    title,
    description,
    amount,
    paid
  })
  expense.save()
    .then(result => {
      res.status(200).json(result)
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
}

export default createExpense
