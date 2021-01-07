import { admin, center, project, staff } from '../models/manageModel.js'
import { createService, deleteService, readOneService, readService, updateService } from '../services/service.js'
import { success, fail } from '../helpers/response.js'

const createAdmin = async (req, res) => {
  try {
    const create = await admin.create(req.body)
    res.json(success('post', 'admin', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const readOneAdmin = async (req, res) => {
  try {
    const read = await readOneService(admin, req.query)
    res.json(success('get', 'admin', read))
  } catch (error) {
    fail(error)
  }
}

const readAdmin = async (req, res) => {
  try {
    const read = await readService(admin, req.query)
    res.json(success('get', 'admin', read))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const createStaff = async (req, res) => {
  try {
    const create = await createService(staff, req.body)
    res.json(success('post', 'staff', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const readStaff = async (req, res) => {
  try {
    const read = await readService(staff, req.query)
    res.json(success('get', 'staff', read))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const updateStaff = async (req, res) => {
  try {
    const update = await updateService(staff, req.params.id, req.body)
    res.json(success('put', 'staff', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const deleteStaff = async (req, res) => {
  try {
    const del = await deleteService(staff, req.params.id)
    res.json(success('post', 'center', del))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const createCenter = async (req, res) => {
  try {
    const create = await createService(center, req.body)
    res.json(success('post', 'center', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const readCenter = async (req, res) => {
  try {
    const read = await readService(center, req.query)
    res.json(success('get', 'center', read))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const updateCenter = async (req, res) => {
  try {
    const update = await updateService(center, req.params.id, req.body)
    res.json(success('put', 'center', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const delCenter = async (req, res) => {
  try {
    const del = await deleteService(center, req.params.id)
    res.json(success('delete', 'center', del))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const createProject = async (req, res) => {
  try {
    const create = await createService(project, req.body)
    res.json(success('post', 'project', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const readProject = async (req, res) => {
  try {
    const read = await readService(project, req.query)
    res.json(success('get', 'project', read))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const updateProject = async (req, res) => {
  try {
    const update = await updateService(project, req.params.id, req.body)
    res.json(success('put', 'project', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const delProject = async (req, res) => {
  try {
    const del = await deleteService(project, req.params.id)
    res.json(success('delete', 'project', del))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

export {
  createAdmin, readAdmin, readOneAdmin,
  createStaff, readStaff, updateStaff, deleteStaff,
  createCenter, readCenter, updateCenter, delCenter,
  createProject, readProject, updateProject, delProject
}
