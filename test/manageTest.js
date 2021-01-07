/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { app } from '../main.js'
import chai from 'chai'
import chaiHttp from 'chai-http'

import { admin, project, center, staff } from '../models/manageModel.js'
chai.use(chaiHttp)
const should = chai.should()

let token = ''
let projectId = ''
let staffId = ''

describe('manage unit test 3000', () => {
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

  /// //////////////////////////test project//////////////////////////////////
  describe('test create project', () => {
    it('create success', done => {
      const body = new project({
        projectName: 'create project',
        information: 'information'
      })
      chai.request(app).post('/manage/projects').set({ token: token }).send(body).end((_err, res) => {
        projectId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('projectName')
        res.body.data.should.have.property('information')
      })
      done()
    })

    it('create fail', done => {
      const body = new project({
        projectName: '',
        information: 'information'
      })
      chai.request(app).post('/manage/projects').set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
      })
      done()
    })
  })

  describe('test get project', () => {
    it('get success', done => {
      chai.request(app).get('/manage/projects').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
      })
      done()
    })
  })

  describe('test update project', () => {
    it('update success', done => {
      const body = {
        projectName: 'update project',
        information: 'update information'
      }
      chai.request(app).put('/manage/projects/' + projectId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('projectName').eql('update project')
        res.body.data.should.have.property('information').eql('update information')
      })
      done()
    })
  })

  describe('test delete project', () => {
    it('delete success', done => {
      chai.request(app).delete('/manage/projects/' + projectId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })

  /// //////////////////////test staff///////////////////////////////
  describe('test create staff', () => {
    it('create success', done => {
      const body = new staff({
        staffName: 'create staff',
        ID: '014455826'
      })
      chai.request(app).post('/manage/staffs').set({ token: token }).send(body).end((_err, res) => {
        staffId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('staffName')
        res.body.data.should.have.property('ID')
      })
      done()
    })

    it('create fail', done => {
      const body = new staff({
        staffName: '',
        information: 'information'
      })
      chai.request(app).post('/manage/staffs').set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
      })
      done()
    })
  })

  describe('test get staff', () => {
    it('get success', done => {
      chai.request(app).get('/manage/staffs').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
      })
      done()
    })
  })

  describe('test update staff', () => {
    it('update success', done => {
      const body = {
        staffName: 'update staff',
        ID: 'update Id'
      }
      chai.request(app).put('/manage/staffs/' + staffId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('staffName').eql('update staff')
        res.body.data.should.have.property('ID').eql('update Id')
      })
      done()
    })
  })

  describe('test delete staff', () => {
    it('delete success', done => {
      chai.request(app).delete('/manage/staffs/' + staffId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })

  /// /////////////////////////////test center///////////////////////////////////////////
  describe('test create center', () => {
    it('create success', done => {
      const body = new center({
        centerName: 'create center',
        describe: 'describe'
      })
      chai.request(app).post('/manage/centers').set({ token: token }).send(body).end((_err, res) => {
        staffId = res.body.data._id
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('centerName')
        res.body.data.should.have.property('describe')
      })
      done()
    })

    it('create fail', done => {
      const body = new staff({
        staffName: '',
        describe: 'describe'
      })
      chai.request(app).post('/manage/centers').set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(500)
        res.body.should.be.a('object')
      })
      done()
    })
  })

  describe('test get staff', () => {
    it('get success', done => {
      chai.request(app).get('/manage/centers').set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.be.a('array')
      })
      done()
    })
  })

  describe('test update staff', () => {
    it('update success', done => {
      const body = {
        centerName: 'update center',
        describe: 'update describe'
      }
      chai.request(app).put('/manage/centers/' + staffId).set({ token: token }).send(body).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('centerName').eql('update center')
        res.body.data.should.have.property('describe').eql('update describe')
      })
      done()
    })
  })

  describe('test delete staff', () => {
    it('delete success', done => {
      chai.request(app).delete('/manage/centers/' + staffId).set({ token: token }).end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.data.should.have.property('ok').eql(1)
      })
      done()
    })
  })
})
