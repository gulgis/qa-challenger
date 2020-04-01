import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'


describe('Login Success', () => {

    it('should log in with email and password', () => {
        LoginPage.open()

        LoginPage.LogInToApplication('tangerinacriativa@protonmail.com', 'TestN0vatics')
        
        LoginPage.userIcon.waitForExist()
        expect(LoginPage.metaData.title).to.contains(
            'Labor'
        )
        expect(LoginPage.currentUrl).to.contains(
            'https://app.getlabor.com.br/app/main'
        )
        
       
    })

})