import { admin } from '../models/manageModel.js'
import { fail, login } from '../helpers/response.js'
import { readOneService, updateService } from '../services/service.js'
import { signToken, verifyToken } from '../helpers/token.js'
import jwt from 'jsonwebtoken'

const signin = async (req, res) => {
  try {
    const body = {
      email: req.body.email,
      password: req.body.password
    }
    const read = await readOneService(admin, body)
    if (read) {
      const token = signToken({ id: read._id }, process.env.TOKEN_LIFE)
      const refresh = signToken({ id: read._id }, process.env.REFRESH_LIFE)
      await updateService(admin, read._id, { refreshToken: refresh })
      res.json(login(token, refresh))
    } else {
      res.send('wrong email or password')
    }
  } catch (error) {
    res.json(fail(error))
  }
}

const refresh = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken
    const refresh = jwt.verify(req.headers.token, process.env.SECRET_KEY, { ignoreExpiration: true })
    const find = await readOneService(admin, { _id: refresh.id })
    if (refreshToken === find.refreshToken) {
      const decode = verifyToken(refreshToken)
      const token = signToken({ id: decode.id }, process.env.TOKEN_LIFE)
      res.json(token)
    } else {
      res.send('refresh token is failed')
    }
  } catch (error) {
    fail(error)
  }
}

export { signin, refresh }
