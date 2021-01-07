/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { app } from '../main.js'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { projectType, status, techStack, customer } from '../models/categoryModel.js'

chai.use(chaiHttp)

const should = chai.should()
let projectTypeId = ''
let techStackId = ''
let statusId = ''
let customerId = ''
let token = ''
describe('unit test 3000', () => {
  before(done => {
    const body = {
      email: 'admin',
      password: '123456'
    }
    chai.request(app).post('/login').send(body).end((_err, res) => {
      token = res.body.token
      res.headers.token = token
      done()
    })
  })

  describe('test create project type', () => {
    it('create success', (done) => {
      const create = new projectType({
        projectType: 'create projectType',
        describe: 'describe'
      })
      chai.request(app).post('/category/projectTypes').set({ token: token }).send(create).end((_err, res) => {
        projectTypeId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })

    it('create fail', done => {
      const create = new projectType({
        projectType: '',
        describe: 'describe'
      })
      chai.request(app).post('/category/projectTypes').set({ token: token }).send(create).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
        res.body.should.have.property('status').eql(500)
      })
      done()
    })
  })

  describe('get project type', () => {
    it('get success', done => {
      chai.request(app).get('/category/projectTypes').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })
  })

  describe('update project type', () => {
    it('update success', done => {
      const body = {
        projectType: 'update',
        describe: 'description'
      }
      chai.request(app).put('/category/projectTypes/' + projectTypeId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
      })
      done()
    })
  })

  describe('delete project type', () => {
    it('delete success', done => {
      chai.request(app).delete('/category/projectTypes/' + projectTypeId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })

  /// //////////////////Test tech stack CRUD//////////////////////

  describe('test create tech Stack', () => {
    it('create success', (done) => {
      const create = new techStack({
        techStack: 'create techStack',
        describe: 'describe'
      })
      chai.request(app).post('/category/techStacks').set({ token: token }).send(create).end((_err, res) => {
        techStackId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })

    it('create fail', done => {
      const create = new techStack({
        techStack: '',
        describe: 'describe'
      })
      chai.request(app).post('/category/techStacks').set({ token: token }).send(create).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
        res.body.should.have.property('status').eql(500)
      })
      done()
    })
  })

  describe('get tech Stack', () => {
    it('get success', done => {
      chai.request(app).get('/category/techStacks').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })
  })

  describe('update tech Stack', () => {
    it('update success', done => {
      const body = {
        projectType: 'update',
        describe: 'description'
      }
      chai.request(app).put('/category/techStacks/' + techStackId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
      })
      done()
    })
  })

  describe('delete tech Stack', () => {
    it('delete success', done => {
      chai.request(app).delete('/category/techStacks/' + techStackId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })

  /// ////////////////////////////test status CRUD//////////////////////////////////

  describe('test create status', () => {
    it('create success', (done) => {
      const create = new status({
        status: 'create status',
        describe: 'describe'
      })
      chai.request(app).post('/category/status').set({ token: token }).send(create).end((_err, res) => {
        statusId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })

    it('create fail', (done) => {
      const create = new status({
        status: '',
        describe: 'describe'
      })
      chai.request(app).post('/category/status').set({ token: token }).send(create).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
        res.body.should.have.property('status').eql(500)
      })
      done()
    })
  })

  describe('get status', () => {
    it('get success', done => {
      chai.request(app).get('/category/status').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })
  })

  describe('update status', () => {
    it('update success', done => {
      const body = {
        projectType: 'update',
        describe: 'description'
      }
      chai.request(app).put('/category/status/' + statusId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
      })
      done()
    })
  })

  describe('delete status', () => {
    it('delete success', done => {
      chai.request(app).delete('/category/status/' + statusId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })

  /// ////////////////////////////test customer CRUD//////////////////////////////////

  describe('test create customer', () => {
    it('create success', (done) => {
      const create = new customer({
        customer: 'create customer',
        describe: 'describe'
      })
      chai.request(app).post('/category/customers').set({ token: token }).send(create).end((_err, res) => {
        customerId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })

    it('create fail', done => {
      const create = new customer({
        customer: '',
        describe: 'describe'
      })
      chai.request(app).post('/category/customers').set({ token: token }).send(create).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
        res.body.should.have.property('status').eql(500)
      })
      done()
    })
  })

  describe('get customer', () => {
    it('get success', done => {
      chai.request(app).get('/category/customers').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
        res.body.should.have.property('message')
        res.body.should.have.property('messageCode')
      })
      done()
    })
  })

  describe('update customer', () => {
    it('update success', done => {
      const body = {
        projectType: 'update',
        describe: 'description'
      }
      chai.request(app).put('/category/customers/' + customerId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('message')
      })
      done()
    })
  })

  describe('delete customer', () => {
    it('delete success', done => {
      chai.request(app).delete('/category/techStacks/' + customerId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })
})
