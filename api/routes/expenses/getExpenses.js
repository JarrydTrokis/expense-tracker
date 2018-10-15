import Expense from '../../models/Expense'

const getExpenses = (req, res) => {
  // res.status(200).json({ message: 'You made it' })
  Expense.find().exec()
    .then(docs => {
      console.log(docs)
      res.status(200).json(docs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

export default getExpenses
