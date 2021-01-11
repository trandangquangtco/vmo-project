import express from 'express'
import * as manage from '../controllers/manageController.js'
import { admin, center, project, staff } from '../models/manageModel.js'

const router = express.Router()

router.post('/staffs-sub', async (req, res) => {
  try {
    const body = req.body
    const update = await staff.find(body)
    const find = update[0].techStack[0]
    res.json(find.framework)
  } catch (error) {
    console.log(error)
  }
})

router.post('/redirect', async (req, res) => {
  try {
    const check = await admin.find()
    if (check.length <= 0) {
      res.redirect('/admins')
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/staffs', manage.createStaff)
router.get('/staffs', manage.readStaff)
router.put('/staffs/:id', manage.updateStaff)
router.delete('/staffs/:id', manage.deleteStaff)

router.post('/projects', manage.createProject)
router.get('/projects', manage.readProject)
router.put('/projects/:id', manage.updateProject)
router.delete('/projects/:id', manage.delProject)

router.post('/centers', manage.createCenter)
router.get('/centers', manage.readCenter)
router.put('/centers/:id', manage.updateCenter)
router.delete('/centers/:id', manage.delCenter)

router.post('/populate-staff', (req, res) => {
  staff.find().populate({ path: 'techStack', populate: 'techStack' }).populate('project')
    .then(data => res.json(data)).catch(err => console.log(err))
})

router.post('/populate-project', (req, res) => {
  project.find().populate('techStack', 'techStack describe -_id').populate('staff', 'staffName').populate('status').populate('projectType')
    .then(data => res.json(data))
})

router.post('/populate-center', (req, res) => {
  center.find().populate('techStack')
    .populate('project').populate({
      path: 'project',
      populate: { path: 'status techStack staff', select: '-__v -_id' }
    })
    .populate('staff').then(data => res.json(data)).catch(err => console.log(err))
})
export default router
