import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'
import TasksPage from '../page-objects/TasksPage.js'


describe('TU 02 Login Success', () => {

    it('should log in with email and password', () => {
        LoginPage.open()

        LoginPage.LogInToApplication('tangerinacriativa@protonmail.com', 'TestN0vatics')
        
        TasksPage.timerButton.waitForExist()
        expect(LoginPage.metaData.title).to.contains(
            'Labor'
        )
        expect(LoginPage.metaData.url).to.contains(
            'https://app.getlabor.com.br/app/main/tasks'
        )
        
       
    })

})