import { staff, center, project } from '../models/manageModel.js'

const readService = (model, query, perPage, page) => {
  return model.find(query).select('-__v').limit(perPage).skip((perPage * page) - perPage).lean()
}

const readStaffPopulate = (query) => {
  return staff.find(query).select('-__v').populate('status', '-__v')
    .populate({
      path: 'techStack', populate: { path: 'techStack', select: '-__v' }
    })
    .populate({
      path: 'project',
      select: '-staff -__v',
      populate: { path: 'projectType status techStack', select: '-__v' }
    }).lean()
}

const readProjectPopulate = (query) => {
  return project.find(query).select('-__v')
    .populate('projectType', '-__v')
    .populate('staff', '-__v')
    .populate('status', '-__v')
    .populate('techStack', '-__v')
    .lean()
}

const readCenterPopulate = (query) => {
  return center.find(query).select('-__v')
    .populate('techStack', '-__v')
    .populate({
      path: 'project',
      populate: [
        // { path: 'projectType status techStack staff', select: '-__v' }
        { path: 'projectType', select: '-__v' },
        { path: 'status', select: '-__v' },
        { path: 'techStack', select: '-__v' },
        { path: 'staff', select: '-project -techStack -__v' }
      ]
    })
    .populate('techStack', '-__v')
    .lean()
}

const readOneService = (model, params) => {
  return model.findOne(params)
}

const createService = (model, body) => {
  return model.create(body)
}

const updateService = (model, id, body) => {
  return model.findOneAndUpdate({ _id: id }, body, { runValidators: true, new: true })
}

const deleteService = (model, id) => {
  return model.deleteOne({ _id: id })
}

export {
  readService, createService, updateService, deleteService, readOneService,
  readStaffPopulate, readProjectPopulate, readCenterPopulate
}
