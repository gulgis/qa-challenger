import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'
import Navbar from '../components/Navbar.js'

describe('TU03 - Forgotten Password Test ', () => {
    it('should navigate to homepage', () => {
        browser.url('https://getlabor.com.br/')
        const metadata = browser.getMetaData()
        expect(metadata.title).to.contains('Labor')
        expect(metadata.url).to.equal('https://getlabor.com.br/')
    })

    it('should click on signin button', () => {
        Navbar.signInButton.waitForExist()
        Navbar.signInButton.click()

        const metadata = browser.getMetaData()
        expect(metadata.url).to.contains('entrar')
    })

    it('should click on forgotten password link', () => {

        
        const passwordLink = LoginPage.forgottenPasswordLink
        passwordLink.waitForExist()
        passwordLink.click()
        const pageTitle = $('h2')
        pageTitle.waitForExist()
        expect(pageTitle.getText()).to.contains('Esqueci minha senha')
    })

    it('should request a new password with empty email', ()=> {

        LoginPage.submitButtonSend.click()
        LoginPage.emptyErrorMessage.waitForExist()

        expect(LoginPage.emptyErrorMessage.getText()).to.contains('Campo obrigatório')

    })

    it('should request a new password with an invalid email', () => {
        const wrongEmail = 'joe@mail.com'
        const input = $('.ReactModal__Content--after-open').$('.e4p6sj51').$('.e4p6sj50')
        
        LoginPage.loginForm.waitForExist()
        input.setValue(wrongEmail)
        LoginPage.submitButtonSend.click()
        LoginPage.wrongEmailErrorMessage.waitForExist()


        expect(LoginPage.wrongEmailErrorMessage.getText()).to.contains(
            'Este email não está cadastrado'
        )
        
    })



})