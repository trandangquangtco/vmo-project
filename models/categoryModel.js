import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new Schema({
  projectType: { type: String, unique: true, required: true },
  describe: String,
  important: { type: String, default: 1 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'projectType', timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

const techSchema = new Schema({
  techStack: { type: String, unique: true, required: true },
  describe: String,
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'techStack' })

const statusSchema = new Schema({
  status: { type: String, unique: true, required: true },
  describe: String,
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'status' })

const customerSchema = new Schema({
  customer: { type: String, unique: true, required: true },
  describe: String,
  important: { type: String, default: 1 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'customer' })

projectSchema.index({ '$**': 'regex' })

projectSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const projectType = mongoose.model('projectType', projectSchema)
const techStack = mongoose.model('techStack', techSchema)
const status = mongoose.model('status', statusSchema)
const customer = mongoose.model('customer', customerSchema)

export { projectType, techStack, status, customer }
