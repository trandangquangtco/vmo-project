import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new Schema({
  projectType: { type: String, unique: true, required: true },
  describe: String,
  important: { type: String, default: 1 },
  active: { type: Boolean, default: true }
}, { collection: 'projectType', timestamps: true })

const techSchema = new Schema({
  techStack: { type: String, unique: true, required: true },
  describe: String,
  active: { type: Boolean, default: true }
}, { collection: 'techStack', timestamps: true })

const statusSchema = new Schema({
  status: { type: String, unique: true, required: true },
  describe: String,
  active: { type: Boolean, default: true }
}, { collection: 'status', timestamps: true })

const customerSchema = new Schema({
  customer: { type: String, unique: true, required: true },
  describe: String,
  important: { type: String, default: 1 },
  active: { type: Boolean, default: true }
}, { collection: 'customer', timestamps: true })

// projectSchema.index({ '$**': 'regex' })

const projectType = mongoose.model('projectType', projectSchema)
const techStack = mongoose.model('techStack', techSchema)
const status = mongoose.model('status', statusSchema)
const customer = mongoose.model('customer', customerSchema)

export { projectType, techStack, status, customer }
