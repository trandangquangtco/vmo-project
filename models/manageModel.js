import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: true },
  refreshToken: String
}, { collection: 'user', timestamps: true })

const centerSchema = new Schema({
  centerName: { type: String, required: true, unique: true },
  describe: String,
  techStack: [{ type: Schema.Types.ObjectId, ref: 'techStack' }],
  project: [{ type: Schema.Types.ObjectId, ref: 'project' }],
  staff: [{ type: Schema.Types.ObjectId, ref: 'staff' }]
}, { collection: 'center', timestamps: true })

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  information: String,
  projectType: [{ type: Schema.Types.ObjectId, ref: 'projectType' }],
  status: [{ type: Schema.Types.ObjectId, ref: 'status' }],
  techStack: [{ type: Schema.Types.ObjectId, ref: 'techStack' }],
  center: { type: Schema.Types.ObjectId, ref: 'center' },
  staff: [{ type: Schema.Types.ObjectId, ref: 'staff' }]
}, { collection: 'project', timestamps: true })

const staffSchema = new Schema({
  staffName: { type: String, required: true },
  birth: { type: Date, min: '1900-12-31', max: '2003-01-01' },
  ID: String,
  phone: {
    type: String,
    validate: {
      validator: function (numb) {
        return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(numb)
      },
      message: props => `${props.value} không phải là số điện thoại hợp lệ`
    }
  },
  certificate: Array,
  level: { type: String, enum: ['fresher', 'junior', 'middle', 'senior'] },
  language: Array,
  techStack: [{
    techStack: { type: Schema.Types.ObjectId, ref: 'techStack' },
    framework: Array,
    experience: String
  }],
  project: [{ type: Schema.Types.ObjectId, ref: 'project' }]
}, { collection: 'staff', timestamps: true })

const admin = mongoose.model('user', adminSchema)
const project = mongoose.model('project', projectSchema)
const staff = mongoose.model('staff', staffSchema)
const center = mongoose.model('center', centerSchema)

export { admin, project, staff, center }
