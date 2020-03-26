import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'


describe('Login Failure Test', () => {

    it('should deny access with wrong cred', () => {
        LoginPage.open()
        //LoginPage.LogInToApplication('foo', 'bar')
        //expect(LoginPage.errorMessage.getText()).to.contains(
        //    'Login and/or password are wrong'
       // )
       
    })

})