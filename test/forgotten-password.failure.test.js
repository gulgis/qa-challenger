import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'
import ForgottenPasswordPage from '../page-objects/ForgottenPasswordPage.js'
import Navbar from '../components/Navbar.js'

describe('TU03 - Forgotten Password Test ', () => {
    it('should navigate to homepage', () => {
        ForgottenPasswordPage.open()

        expect(ForgottenPasswordPage.metaData.title).to.contains('Labor')
        expect(ForgottenPasswordPage.metaData.url).to.equal('https://getlabor.com.br/')
    })

    it('should click on signin button', () => {
        Navbar.signInButton.waitForExist()
        Navbar.signInButton.click()

        expect(ForgottenPasswordPage.metaData.url).to.contains('entrar')
    })

    it('should click on forgotten password link', () => {
        LoginPage.forgottenPasswordLink.waitForExist()
        LoginPage.forgottenPasswordLink.click()

        ForgottenPasswordPage.pageTitle.waitForExist()


        expect(ForgottenPasswordPage.pageTitle.getText()).to.contains(
            'Esqueci minha senha'
        )
    })

    it('should request a new password with empty email', ()=> {
        ForgottenPasswordPage.form.waitForExist()
        ForgottenPasswordPage.submitButtonSend.click()
        ForgottenPasswordPage.errorMessage.waitForExist()

        expect(ForgottenPasswordPage.errorMessage.getText()).to.contains(
            'Campo obrigatório'
        )
    })

    it('should request a new password with not registered email', () => {

        ForgottenPasswordPage.form.waitForExist()
        ForgottenPasswordPage.input.setValue('wrongEmail@mail.com')
        ForgottenPasswordPage.submitButtonSend.click()
        ForgottenPasswordPage.messageNotRegistered.waitForExist()


        expect(ForgottenPasswordPage.messageNotRegistered.getText()).to.contains(
            'Este email não está cadastrado'
        )
       
        
    })

    it('should request a new password with an invalid email', () => {

        ForgottenPasswordPage.input.setValue('@protonmail.com')
        ForgottenPasswordPage.submitButtonSend.click()
        ForgottenPasswordPage.errorMessage.waitForExist()

        expect(ForgottenPasswordPage.errorMessage.getText()).to.contains(
            'Email inválido'
        )


    })



})