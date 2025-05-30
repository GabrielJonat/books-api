import supertest from 'supertest';
import * as chai from 'chai';
import app from '../../app.js';

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;