import express from 'express'
import { statusInProject, techStackInProject, test, TypeInProject } from '../controllers/reportController.js'
import { techStack } from '../models/categoryModel.js'
import { staff } from '../models/manageModel.js'
import { success, fail } from '../helpers/response.js'
import { readService } from '../services/service.js'
const router = express.Router()

router.get('/status', statusInProject)
router.get('/test', test)
router.get('/projectType', TypeInProject)

router.get('/techStack-project', techStackInProject)

router.get('/level', async (req, res) => {
  try {
    const query = {}
    if (req.query.staffName) { query.staffName = req.query.staffName }
    const condition = await staff.find(query).populate({
      path: 'techStack',
      populate: { path: 'techStack', select: '-__v' }
    })
    let report = []
    const list = []
    if (condition.length > 0) {
      condition.map(data => data.techStack.map(data1 => list.push({
        staffName: data.staffName,
        techStack: data1
      })))
      list.map(data => report.push({
        staffName: data.staffName,
        techStack: data.techStack.techStack.techStack,
        experience: data.techStack.experience
      }))
      const experience = req.query.experience
      report = report.filter(data => data.experience === experience)
      res.json(report)
    } else {
      res.json(success('get', 'report', null))
    }
  } catch (error) {
    res.json(fail(error.message))
  }
})

router.get('/techStack-staff', async (req, res) => {
  try {
    const condition = await readService(techStack, req.query)
    if (condition.length > 0) {
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
    } else {
      fail(success('get', 'report', null))
    }
  } catch (error) {
    res.json(fail(error.properties))
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
