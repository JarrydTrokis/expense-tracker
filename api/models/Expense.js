import mongoose from 'mongoose'

const Expense = mongoose.model('Expense', {
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  amount: Number,
  paid: Boolean
})

export default Expense
