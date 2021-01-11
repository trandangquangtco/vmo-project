import * as category from '../controllers/categoryController.js'
import express from 'express'
import { projectType } from '../models/categoryModel.js'
// import { authenticate } from '../middlewares/middleware.js'
const router = express.Router()

// router.post('/projects', category.createType)
router.get('/oneTypes/:id', category.findOneType)
router.post('/projectTypes', category.createType)
router.post('/projects-reg', category.findReg)
router.get('/projectTypes', category.findType)
router.put('/projectTypes/:id', category.updateType)
router.delete('/projectTypes/:id', category.deleteType)

router.post('/techStacks', category.createTech)
router.get('/techStacks', category.findTech)
router.put('/techStacks/:id', category.updateTech)
router.delete('/techStacks/:id', category.deleteTech)

router.post('/customers', category.createCustomer)
router.get('/customers', category.findCustomer)
router.put('/customers/:id', category.updateCustomer)
router.delete('/customers/:id', category.deleteCustomer)

router.post('/status', category.createStatus)
router.get('/status', category.findStatus)
router.put('/status/:id', category.updateStatus)
router.delete('/status/:id', category.deleteStatus)

router.post('/aggregate', async (req, res) => {
  try {
    const read = await projectType.aggregate([{ projectType: req.body.projectType }])
    res.json(read)
  } catch (error) {
    console.log(error)
  }
})

router.get('/time', async (req, res) => {
  try {
    const find = await projectType.find({ updatedAt: { $gte: req.query.updatedAt } })
    res.json(find)
  } catch (error) {
    console.log(error)
  }
})

router.post('/search', async (req, res) => {
  try {
    const body = req.body.search
    const find = await projectType.find({ $text: { $search: body } })
    res.json(find)
  } catch (error) {
    console.log(error)
  }
})

export default router
