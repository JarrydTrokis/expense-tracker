import { Router } from 'express'

// #region Controllers
import getExpenses from './getExpenses'
import getExpenseById from './getExpenseById'
import deleteExpense from './deleteExpense'
import createExpense from './createExpense'
// #endregion

const router = Router()

/**
 * Child routes of '/expenses'
 */
router.get('/', getExpenses)
router.get('/:expenseId', getExpenseById)
router.post('/create', createExpense)
router.delete('/:expenseId', deleteExpense)

export default router
