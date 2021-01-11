import { projectType, status, techStack } from '../models/categoryModel.js'
import { project, staff } from '../models/manageModel.js'
import { success, fail } from '../helpers/response.js'
import { readService } from '../services/service.js'

const statusInProject = async (req, res) => {
  try {
    const condition = await readService(status, req.query)
    if (condition.length > 0) {
      const report = await readService(project, { status: condition[0]._id })
      res.json(success('get', 'report status', { amount: report.length }))
    } else {
      res.json(success('get', 'report', null))
    }
  } catch (error) {
    fail(error.message)
  }
}

const test = async (req, res) => {
  try {
    const condition = await project.find().populate('status', '-_id -__v')
    const list = []
    let report = []
    if (condition.length > 0) {
      condition.map(data => {
        data.status.map(data1 => {
          list.push(data1)
          return data1
        })
        return data
      })
      report = list.filter(data => data.status === req.query.status)
      res.json(report)
    }
  } catch (error) {
    console.log(error)
  }
}

const TypeInProject = async (req, res) => {
  try {
    const condition = await readService(projectType, req.query)
    if (condition.length > 0) {
      const report = await readService(project, { projectType: condition[0]._id })
      res.json(success('get', 'report', {
        amount: report.length
      }))
    } else {
      res.json(success('get', 'report', null))
    }
  } catch (error) {
    fail(error.message)
  }
}

const techStackInProject = async (req, res) => {
  try {
    const condition = await readService(techStack, req.query)
    if (condition.length > 0) {
      const report = await readService(project, { techStack: condition[0]._id })
      res.json(success('get', 'report', {
        amount: report.length
      }))
    } else {
      res.json(success('get', 'report', null))
    }
  } catch (error) {
    fail(error.message)
  }
}

export { statusInProject, TypeInProject, techStackInProject, test }
