import express from 'express'
import { createAdmin } from '../controllers/manageController.js'
import { refresh, signin } from '../controllers/loginController.js'
// import { admin } from '../models/manageModel.js'
import { testModel } from '../models/testModel.js'

const router = express.Router()

router.post('/admins', createAdmin)
router.post('/login', signin)

router.post('/refresh', refresh)

router.post('/test', async (req, res) => {
  try {
    const read = []
    const search = req.body.search
    const find = await testModel.find({ product_name: { $regex: search, $options: 'i' } })
    const find1 = await testModel.find({ product_id: { $regex: search, $options: 'i' } })
    const find2 = await testModel.find({ product_description: { $regex: search, $options: 'i' } })
    find.map(data => read.push(data))
    find1.map(data => read.push(data))
    find2.map(data => read.push(data))
    res.json(read)
  } catch (error) {
    console.log(error)
  }
})
export default router
