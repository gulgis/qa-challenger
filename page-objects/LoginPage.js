import BasePage from './BasePage.js'

class LoginPage extends BasePage{
    

    get loginForm(){
        return $('form')
    }
    get  username(){
        return $('.e4p6sj50' )
    }
    get password(){
        return $('.e4p6sj50')
    }

    get submitButton(){
        return $('button=Entrar')
    }

    get submitButtonSend(){
        return $('button=Enviar')
    }

    get emptyErrorMessage(){
        return $('.e4p6sj52*=Campo')
    }
    
    get forgottenPasswordLink(){
        return $('.e1ozijpt0*=Esqueci')
    }

    get wrongEmailErrorMessage(){
        return $('.ReactModal__Content--after-open').$('.e5387b70*=Este')
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