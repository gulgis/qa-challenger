import { expect } from 'chai'
import LoginPage from '../page-objects/LoginPage.js'
import ForgottenPasswordPage from '../page-objects/ForgottenPasswordPage.js'
import Navbar from '../components/Navbar.js'

describe('TU04 - Forgotten Password Test Request', () => {
    it('should request a new password link', () => {
        ForgottenPasswordPage.open()

        Navbar.signInButton.waitForExist()
        Navbar.signInButton.click()

        LoginPage.forgottenPasswordLink.waitForExist()
        LoginPage.forgottenPasswordLink.click()

        ForgottenPasswordPage.form.waitForExist()
        ForgottenPasswordPage.input.setValue('tangerinacriativa@protonmail.com')
        ForgottenPasswordPage.submitButtonSend.click()

        //LoginPage.form.waitForExist()
        ForgottenPasswordPage.messageSentResquest.waitForExist()
        

        expect(ForgottenPasswordPage.messageSentResquest.getText()).to.contains(
            'Você receberá um e-mail com instruções sobre como redefinir sua senha'
        )

    })
})

