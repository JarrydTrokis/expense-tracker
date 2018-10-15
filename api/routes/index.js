import mongoose from 'mongoose'
import { Router } from 'express'
import expensesRouter from './expenses'

const router = Router()

mongoose.connect(`mongodb+srv://jarryd:${process.env.MONGO_PW}@expensetracker-enlra.mongodb.net/expense-tracker?retryWrites=true`,
  { useNewUrlParser: true },
  (err) => {
    console.log(err)
  }
)

router.use('/expenses', expensesRouter)

export default router
