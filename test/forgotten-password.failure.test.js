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

        browser.waitAndClick('.e1677wdp0=Enviar')

        const emptyInfoLabel = LoginPage.emptyErrorMessage
        emptyInfoLabel.waitForExist()
        expect(emptyInfoLabel.getText()).to.contains('Campo obrigatório')

    })



})