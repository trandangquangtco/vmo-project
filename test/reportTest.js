/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { app } from '../main.js'
import chai from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'

// import { project, staff, center } from '../models/manageModel'
// import { techStack } from '../models/categoryModel'
chai.use(chaiHttp)
const should = chai.should()

let token = ''
describe('unit test reports at port 3000', () => {
  before((done) => {
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

  describe('test report project status', () => {
    it('report status success', done => {
      const query = { status: 'done' }
      chai.request(app).get('/reports/status').set({ token: token }).query(query).end((_err, res) => {
        res.should.have.status(200)
        res.body.data.amount.should.be.a('number')
      })
      done()
    })
  })

  describe('test report project projectType', () => {
    it('report projectType success', done => {
      const query = { projectType: 'Health care' }
      chai.request(app).get('/reports/projectType').set({ token: token }).query(query).end((_err, res) => {
        res.should.have.status(200)
        res.body.data.amount.should.be.a('number')
      })
      done()
    })
  })

  describe('test report project techStack', () => {
    it('report techStack success', done => {
      const query = { techStack: 'Nodejs' }
      chai.request(app).get('/reports/techStack-project').set({ token: token }).query(query).end((_err, res) => {
        res.should.have.status(200)
        res.body.data.amount.should.be.a('number')
      })
      done()
    })
  })
})
