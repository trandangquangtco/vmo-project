import express from 'express'
import { createAdmin } from '../controllers/manageController.js'
import { refresh, signin } from '../controllers/loginController.js'
import { admin } from '../models/manageModel.js'

const router = express.Router()

router.post('/admins', createAdmin)
router.post('/login', signin)

router.post('/refresh', refresh)

export default router
