import express from 'express'
import { projectType, status, techStack } from '../models/categoryModel.js'
import { project, staff } from '../models/manageModel.js'
import { success, fail } from '../helpers/response.js'
import { readService } from '../services/service.js'
const router = express.Router()

router.get('/status', async (req, res) => {
  try {
    const condition = await readService(status, { status: req.query.status })
    const report = await readService(project, { status: condition[0]._id })
    res.json(success('get', 'report status', { 'So luong du an': report.length }))
  } catch (error) {
    res.json(fail(error))
  }
})

router.get('/projectType', async (req, res) => {
  try {
    const condition = await readService(projectType, { projectType: req.query.status })
    const report = await readService(project, { status: condition[0]._id })
    res.json(report.length)
  } catch (error) {
    res.json(fail(error))
  }
})

router.post('/techs', async (req, res) => {
  try {
    const condition = await techStack.find({ techStack: req.body.techStack })
    const report = await project.find({ techStack: condition[0]._id })
    res.json(report.length)
  } catch (error) {
    res.json({ message: '' + error })
  }
})

router.get('/techStack', async (req, res) => {
  try {
    if (!req.query.techStack) {
      res.json('search field must be fill {techStack: your search}')
    }
    const condition = await readService(techStack, { techStack: req.query.techStack })
    const pre = await staff.find().populate({ path: 'techStack', select: '-_id', populate: { path: 'techStack', select: '_id' } })
    let report = []
    const report1 = []
    let report2 = []
    const staffList = []
    report = pre.map(data => {
      report.push(data)
      return data.techStack
    })
    report.map(data => {
      data.map(data1 => {
        report1.push(data1.techStack._id)
        return data1.techStack._id
      })
      return data.techStack
    })
    report2 = report1.filter(data => String(data) === String(condition[0]._id))
    res.json(success('get', 'report techStack', {
      amount: report2.length,
      staff: staffList
    }))
  } catch (error) {
    console.log(error)
  }
})

router.get('/certificate', async (req, res) => {
  try {
    const find = await staff.find({ certificate: req.query.certificate })
    res.json(find)
  } catch (error) {
    console.log(error)
  }
})

router.get('/projects', async (req, res) => {
  try {
    const find = await staff.find()
    const leng = []
    let current = null
    let cnt = 0
    const answer = []
    find.forEach((data) => leng.push(data.project.length))
    for (let i = 0; i < leng.length; i++) {
      if (leng[i] !== current) {
        if (cnt > 0) {
          answer.push(`join ${current} du an: ${cnt} nguoi`)
        }
        current = leng[i]
        cnt = 1
      } else {
        cnt++
      }
    }
    if (cnt > 0) {
      answer.push(`join ${current} du an: ${cnt} nguoi`)
    }
    res.json(answer)
  } catch (error) {
    console.log(error)
  }
})

export default router
