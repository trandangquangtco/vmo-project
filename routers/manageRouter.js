import express from 'express'
import * as manage from '../controllers/manageController.js'
import { center, project, staff } from '../models/manageModel.js'

const router = express.Router()

router.put('/admins', manage.updateAdmin)
router.delete('/admins', manage.deleteAdmin)

router.post('/staffs', manage.createStaff)
router.get('/staffs', manage.readStaff)
router.get('/staffs-full', manage.readStaffFull)
router.get('/staffs/:id', manage.readOneStaff)
router.put('/staffs/:id', manage.updateStaff)
router.delete('/staffs/:id', manage.deleteStaff)

router.post('/projects', manage.createProject)
router.get('/projects', manage.readProject)
router.get('/projects-full', manage.readStaffFull)
router.get('/projects/:id', manage.readOneProject)
router.put('/projects/:id', manage.updateProject)
router.delete('/projects/:id', manage.delProject)

router.post('/centers', manage.createCenter)
router.get('/centers', manage.readCenter)
router.get('/centers-full', manage.readCenterFull)
router.get('/centers/:id', manage.readOneCenter)
router.put('/centers/:id', manage.updateCenter)
router.delete('/centers/:id', manage.delCenter)

export default router
