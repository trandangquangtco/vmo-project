import * as category from '../controllers/categoryController.js'
import express from 'express'
import { projectType } from '../models/categoryModel.js'
// import { authenticate } from '../middlewares/middleware.js'
const router = express.Router()

// router.post('/projects', category.createType)
router.get('/projectTypes/:id', category.findOneType)
router.post('/projectTypes', category.createType)
router.post('/projects-reg', category.findReg)
router.get('/projectTypes', category.findType)
router.put('/projectTypes/:id', category.updateType)
router.delete('/projectTypes/:id', category.deleteType)

router.post('/techStacks', category.createTech)
router.get('/techStacks', category.findTech)
router.get('/techStacks/:id', category.findOneTech)
router.put('/techStacks/:id', category.updateTech)
router.delete('/techStacks/:id', category.deleteTech)

router.post('/customers', category.createCustomer)
router.get('/customers', category.findCustomer)
router.get('/customers/:id', category.findOneCustomer)
router.put('/customers/:id', category.updateCustomer)
router.delete('/customers/:id', category.deleteCustomer)

router.post('/status', category.createStatus)
router.get('/status', category.findStatus)
router.get('/status/:id', category.findOneStatus)
router.put('/status/:id', category.updateStatus)
router.delete('/status/:id', category.deleteStatus)

router.post('/aggregate', async (req, res) => {
  try {
    const read = await projectType.aggregate([{ $match: { search: /req.body.search/ } }])
    res.json(read)
  } catch (error) {
    console.log(error)
  }
})

router.get('/time', async (req, res) => {
  try {
    const find = await projectType.find({
      updatedAt: { $gte: req.query.from, $lte: req.query.to }
    })
    res.json(find)
  } catch (error) {
    console.log(error)
  }
})

router.post('/search', async (req, res) => {
  try {
    const search = req.body.search
    const read = []
    const info = {
      projectType: search,
      describe: search
    }
    // const find = await projectType.find({ $text: { $search: body } })
    const find = await projectType.find({ describe: { $regex: info.describe, $options: 'i' } })
    const find1 = await projectType.find({ projectType: { $regex: info.projectType, $options: 'i' } })
    find.map(data => read.push(data))
    find1.map(data => read.push(data))
    res.json(read)
  } catch (error) {
    console.log(error)
  }
})

export default router
