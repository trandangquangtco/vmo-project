/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { app } from '../main.js'
import chai from 'chai'
import chaiHttp from 'chai-http'

import { project, staff, center } from '../models/manageModel'
import { techStack } from '../models/categoryModel'
chai.use(chaiHttp)
const should = chai.should()
