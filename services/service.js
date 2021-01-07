const readService = (model, query) => {
  return model.find(query)
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

export { readService, createService, updateService, deleteService, readOneService }