/* eslint-disable no-undef */
import sinon from 'sinon'
import chaiHttp from 'chai-http'
import chai from 'chai'
import { app } from '../main.js'
// import { admin } from '../models/manageModel.js'

chai.use(chaiHttp)
const should = chai.should()

let token = ''

describe('test sinon', () => {
  before((done) => {
    sinon.stub(app, 'post').yields(null, null, JSON.stringify([
      {
        email: 'quang',
        password: 123456
      },
      {
        email: 'quang1',
        password: 123456
      }
    ]))
    const body = {
      email: 'admin',
      password: 123456
    }
    chai.request(app).post('/login').send(body).end((_err, res) => {
      token = res.body.token
      res.headers.token = token
      done()
    })
  })

  after(() => {
    app.post.restore()
  })
  it('success', done => {
    chai.request(app).get('/admins').set({ token: token }).end((_err, res) => {
      res.should.have.status(200)
      res.body.should.be.a('array')
      console.log(res.body)
    })
    done()
  })
})
