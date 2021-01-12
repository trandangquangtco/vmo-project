import { admin, center, project, staff } from '../models/manageModel.js'
import { createService, deleteService, readCenterPopulate, readOneService, readProjectPopulate, readService, readStaffPopulate, updateService } from '../services/service.js'
import { success, fail } from '../helpers/response.js'

/// ///////////////////////////
/// ///////Admin Controller////
/// ///////////////////////////
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

const updateAdmin = async (req, res) => {
  try {
    const update = await updateService(admin, req.params.id, req.body)
    res.json(success('put', 'admin', update))
  } catch (error) {
    res.json(fail(error.message))
  }
}

const deleteAdmin = async (req, res) => {
  try {
    const remove = await deleteService(admin, req.params.id)
    res.json(success('delete', 'admin', remove))
  } catch (error) {
    res.json(error.message)
  }
}

/// ///////////////////////////////
/// ///////End Admin Controller////
/// ///////////////////////////////

/// ---------------------------------------------------------------------///

/// ///////////////////////////
/// //////Staff Controller/////
/// ///////////////////////////
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

const readStaffFull = async (req, res) => {
  try {
    const read = await readStaffPopulate(req.query)
    res.json(success('get', 'staff', read))
  } catch (error) {
    res.json(fail(error.message))
  }
}

const readOneStaff = async (req, res) => {
  try {
    const read = await readOneService(staff, req.params.id)
    res.json(success('get', 'staff', read))
  } catch (error) {
    res.json(fail(error.message))
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

/// ///////////////////////////////
/// /////End Staff Controller//////
/// ///////////////////////////////

/// ---------------------------------------------------------------------///

/// ///////////////////////////
/// //////Center Controller////
/// ///////////////////////////
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

const readCenterFull = async (req, res) => {
  try {
    const read = await readCenterPopulate(req.query)
    res.json(success('get', 'center', read))
  } catch (error) {
    res.json(fail(error.message))
  }
}

const readOneCenter = async (req, res) => {
  try {
    const read = await readOneService(center, req.params.id)
    res.json(success('get', 'center', read))
  } catch (error) {
    res.json(fail(error.message))
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

/// ///////////////////////////////
/// //////End Center Controller////
/// ///////////////////////////////

/// ---------------------------------------------------------------------///

/// ///////////////////////////
/// //////Project Controller///
/// ///////////////////////////
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

const readProjectFull = async (req, res) => {
  try {
    const read = await readProjectPopulate(req.query)
    res.json(success('get', 'project', read))
  } catch (error) {
    res.json(error.message)
  }
}

const readOneProject = async (req, res) => {
  try {
    const read = await readOneService(project, req.params.id)
    res.json(success('get', 'project', read))
  } catch (error) {
    res.json(fail(error.message))
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

/// ///////////////////////////////
/// //////End Project Controller///
/// ///////////////////////////////

export {
  createAdmin, readAdmin, readOneAdmin, updateAdmin, deleteAdmin,
  createStaff, readStaff, readStaffFull, readOneStaff, updateStaff, deleteStaff,
  createCenter, readCenter, readCenterFull, readOneCenter, updateCenter, delCenter,
  createProject, readProject, readProjectFull, readOneProject, updateProject, delProject
}
