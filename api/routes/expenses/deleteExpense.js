import Expense from '../../models/Expense'

const deleteExpense = (req, res) => {
  const id = req.params.expenseId

  Expense.findByIdAndDelete(id).exec()
    .then(() => {
      res.status(200).json({
        message: `Document with id: ${id} has been deleted`
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

export default deleteExpense
