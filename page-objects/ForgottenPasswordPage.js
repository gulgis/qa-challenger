import BasePage from './BasePage.js'

class ForgottenPasswordPage extends BasePage{

    

    get form(){
        return $('.ReactModal__Content--after-open').$('form')
    }

    get submitButtonSend(){
        return this.form.$('button=Enviar')
    }

    get errorMessage(){
        return $('.e4p6sj52')
    }

    get forgottenPasswordLink(){
        return $('.e1ozijpt0*=Esqueci')
    }

    get messageNotRegistered(){
        return $('.e5387b70*=Este')
    }

    get messageSentResquest(){
        return $('form').$('.e5387b70*=senha')
    }

    get pageTitle(){
        return $('h2')
    }

    get metaData(){
        return browser.getMetaData()
    }

    get input(){
        return this.form.$('.e4p6sj51').$('.e4p6sj50')
    }

    open(){
        super.open('https://getlabor.com.br')
    }



}
export default new ForgottenPasswordPage()