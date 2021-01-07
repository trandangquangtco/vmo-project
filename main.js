import express from 'express'
import mongoose from 'mongoose'
import categoryRouter from './routers/categoryRouter.js'
import manageRouter from './routers/manageRouter.js'
import reportRouter from './routers/reportRouter.js'
import userRouter from './routers/userRouter.js'
import { authenticate } from './middlewares/middleware.js'
import bodyParser from 'body-parser'
import dontenv from 'dotenv'
import winston from 'winston'

const app = express()
dontenv.config()

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'combined.log', level: 'error' })
  ]
})

mongoose.connect('mongodb://localhost:27017/vmoprj', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/category', authenticate)
app.use('/category', categoryRouter)

app.use('/manage', authenticate)
app.use('/manage', manageRouter)

app.use('/reports', authenticate)
app.use('/reports', reportRouter)

app.use('/', userRouter)

app.listen(3000, () => {
  console.log('connect success 3000')
})

export { app }
