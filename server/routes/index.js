import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/expenses', (req, res) => {
  res.render('expenses')
})

export default router
