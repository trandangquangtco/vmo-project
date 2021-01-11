import { projectType, techStack, status, customer } from '../models/categoryModel.js'
import { readService, createService, updateService, deleteService, readOneService } from '../services/service.js'
import { success, fail } from '../helpers/response.js'
/// ///////////////////////////
/// /Project Type Controller///
/// ///////////////////////////
const createType = async (req, res) => {
  try {
    const create = await createService(projectType, req.body)
    res.json(success('post', 'project', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findReg = async (req, res) => {
  const body = req.body.projectType
  // projectType.find({ projectType: new RegExp(body, 'i') })
  projectType.find({ projectType: { $regex: body, $options: 'i' } })
    .then(data => res.json(data)).catch(err => console.log(err))
}

const findType = async (req, res) => {
  try {
    const find = await readService(projectType, req.body)
    res.json(success('get', 'project', find))
  } catch (error) {
    res.status(500).json(fail(error.message))
  }
}

const findOneType = async (req, res) => {
  try {
    const find = await readOneService(projectType, { _id: req.params.id })
    res.json(success('get', 'project type', find))
  } catch (error) {
    res.json(fail(error))
  }
}

const updateType = async (req, res) => {
  try {
    const update = await updateService(projectType, req.params.id, req.body)
    res.json(success('put', 'project', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const deleteType = async (req, res) => {
  try {
    const update = await deleteService(projectType, req.params.id)
    res.json(success('put', 'project', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

/// ///////////////////////////////
/// /End Project Type Controller///
/// ///////////////////////////////

/// ---------------------------------------------------------------------///

/// ////////////////////////////////
/// ////TechStack Controller////////
/// ////////////////////////////////
const createTech = async (req, res) => {
  try {
    const create = await createService(techStack, req.body)
    res.json(success('post', 'techStack', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findTech = async (req, res) => {
  try {
    const find = await readService(techStack, req.query)
    res.json(success('get', 'techStack', find))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findOneTech = async (req, res) => {
  try {
    const find = await readOneService(techStack, req.params.id)
    res.json(success('get', 'tech stack', find))
  } catch (error) {
    res.json(fail(error.message))
  }
}

const updateTech = async (req, res) => {
  try {
    const update = await updateService(techStack, req.params.id, req.body)
    res.json(success('put', 'techStack', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const deleteTech = async (req, res) => {
  try {
    const update = await deleteService(techStack, req.params.id)
    res.json(success('put', 'techStack', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}
/// ////////////////////////////////
/// //// End TechStack Controller///
/// ////////////////////////////////

/// ---------------------------------------------------------------------///

/// ////////////////////////////////
/// ////status Controller///////////
/// ////////////////////////////////
const createStatus = async (req, res) => {
  try {
    const create = await createService(status, req.body)
    res.json(success('post', 'status', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findStatus = async (req, res) => {
  try {
    const find = await readService(status, req.query)
    res.json(success('get', 'status', find))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findOneStatus = async (req, res) => {
  try {
    const find = await readOneService(status, req.params.id)
    res.json(success('get', 'status', find))
  } catch (error) {
    res.json(fail(error.message))
  }
}

const updateStatus = async (req, res) => {
  try {
    const update = await updateService(status, req.params.id, req.body)
    res.json(success('put', 'status', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const deleteStatus = async (req, res) => {
  try {
    const update = await deleteService(status, req.params.id)
    res.json(success('put', 'status', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

/// ///////////////////////////////
/// //////End Status Controller////
/// ///////////////////////////////

/// ---------------------------------------------------------------------///

/// ////////////////////////////////
/// ////customer Controller/////////
/// ////////////////////////////////
const createCustomer = async (req, res) => {
  try {
    const create = await createService(customer, req.body)
    res.json(success('post', 'customer', create))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findCustomer = async (req, res) => {
  try {
    const find = await readService(customer, req.query)
    res.json(success('get', 'customer', find))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const findOneCustomer = async (req, res) => {
  try {
    const find = await readOneService(customer, req.params.id)
  } catch (error) {
    res.json(error.message)
  }
}

const updateCustomer = async (req, res) => {
  try {
    const update = await updateService(customer, req.params.id, req.body)
    res.json(success('put', 'customer', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

const deleteCustomer = async (req, res) => {
  try {
    const update = await deleteService(customer, req.params.id)
    res.json(success('put', 'customer', update))
  } catch (error) {
    res.status(500).json(fail(error))
  }
}

/// ///////////////////////////////
/// //////End customer Controller//
/// ///////////////////////////////

export {
  createType, findType, updateType, deleteType, findReg, findOneType,
  createTech, findTech, findOneTech, updateTech, deleteTech,
  createStatus, findStatus, findOneStatus, updateStatus, deleteStatus,
  createCustomer, findCustomer, findOneCustomer, updateCustomer, deleteCustomer
}
