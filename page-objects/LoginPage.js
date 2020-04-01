import BasePage from './BasePage.js'
import {By} from 'selenium-standalone'		


class LoginPage extends BasePage{
    

    get loginForm(){
        return $('form')
    }
    get  username(){
        return $('label.css-135rwlj:nth-child(2) > input:nth-child(1)')
    }
    get password(){
        return $('label.css-135rwlj:nth-child(1) > input:nth-child(1)')
    }

    get submitButton(){
        return $('button=Entrar')
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

    get metaData(){
        return browser.getMetaData()
    }

    get userIcon(){
        return $('#profile-button > md-icon:nth-child(1)')
    }

    get currentUrl(){
        return browser.getUrl()
    }

    open(){
        super.open('https://app.getlabor.com.br/entrar')
    }

    LogInToApplication(username, password){
        this.loginForm.waitForExist()
        this.username.setValue(username)
        this.password.setValue(password)
        this.submitButton.click()
    }
}

export default new LoginPage()