import mongoose from 'mongoose'

const Schema = mongoose.Schema

const testSchema = new Schema({}, { collection: 'sellingpageproduct' })

const testModel = mongoose.model('sellingpageproduct', testSchema)

export { testModel }
