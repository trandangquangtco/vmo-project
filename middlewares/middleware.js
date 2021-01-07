import jwt from 'jsonwebtoken'
import { admin } from '../models/manageModel.js'

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.token
    const decode = jwt.verify(token, 'vmoprj')
    const authen = await admin.findOne({ _id: decode.id })
    if (authen) {
      next()
    } else {
      res.send('dang nhap sai')
    }
  } catch (error) {
    if (error.message === 'jwt must be provided') {
      res.json({ message: 'you not login yet' })
    } else if (error.message === 'jwt expired') {
      res.json({ message: 'your login is out of date' })
    } else {
      console.log(error)
    }
  }
}

export { authenticate }
