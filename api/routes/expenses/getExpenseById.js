import Expense from '../../models/Expense'

const getExpenseById = (req, res) => {
  const id = req.params.expenseId

  Expense.findById(id).exec()
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

export default getExpenseById
