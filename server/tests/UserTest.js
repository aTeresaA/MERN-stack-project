import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { response } from 'express'
import { describe, it as test } from 'mocha'
import StatusCode from '../config/StatusCode.js'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const user = {
    username: randomString,
    password: randomString
}
// funktion för att hämta användaren som skapas i const user och det id som den ger.
//const userId = '5fb67f6a46803509905eea4b'

const testNonExistentRoute = () => {
    describe('Testing a route that does not exist', () => {
        test('expecting 404 not found', (done) => {
            Chai.request(app)
            .get(`/${randomString}`)
            .end((request, response) => {
                response.should.have.a.status(StatusCode.NOT_FOUND)
                done()
            })
        })
    })
}

// CRUD-tester
const testCreateUser = () => {
    describe('test create user method (post)', () => {
        test('expecting user to be created', (done) => {
            Chai.request(app)
            .post('/user')
            .send(user)
            .end((error, response) =>{
                response.should.have.a.status(StatusCode.CREATED)
                response.body.should.be.a('object')
                response.body.should.have.property('username').eq(user.username)
                response.body.should.have.property('password').eq(user.password)
                done()
            })
        })
    })
}

const testGetAllUsers = () => {
    describe('test get user method (get)', () => {
        test('expecting user to be read', (done) => {
            Chai.request(app)
            .get('/user')
            .end((error, response) => {
                response.should.have.a.status(StatusCode.OK)
                response.body.should.be.a('array')
                response.body.length.should.be.eq(response.body.length) //(response.body.length)
                done()
            })

        })

    })

}

//SEARCH
/*const testGetUserByUsernameQuery = () => {
    describe('test get user by name and show an id', () => {
        test('expecting a name and an id', (done) => {//
            Chai.request(app)
            .get('/searchuser')
            .end((error, response) => {
                response.should.have.a.status(StatusCode.OK)
                response.body.should.be.a('object')
                response.body.should.have.property('username').eq(user.username)//
                response.body.should.have.property('userId').eq(userId)// 
                done()
            })
        })
    })
}*/

//UPDATE
/*const testUpdateUser = () => {
    describe('test update user method (put)', () => {
        test('expecting user to be updated', (done) => {
            Chai.request(app)
            .put(`/user/${userId}`)
            .send(user)
            .end((error, response) => {
                response.should.have.a.status(StatusCode.OK)
                response.body.should.be.a('object')
                response.body.should.have.property('_id').eq(userId)
                response.body.should.have.property('username').eq(user.username)
                response.body.should.have.property('password').eq(user.password)
                done()
            })

        })

    })

}*/

//DELETE
/*const testDeleteUser = () => {
    describe('test delete user method (delete)', () => {
        test('expecting user to be deleted', (done) => {
            Chai.request(app)
            .delete(`/user/${userId}`)
            .end((error, response) => {
                response.should.have.a.status(StatusCode.OK)
                done()
            })

        })

    })

}*/

describe('TESTING THE USER_API ROUTE', () => {
    testNonExistentRoute()
    testCreateUser()
    testGetAllUsers()
    //testGetUserByUsernameQuery()
    //testUpdateUser()
    //testDeleteUser()
})