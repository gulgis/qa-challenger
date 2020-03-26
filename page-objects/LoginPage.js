import BasePage from './BasePage.js'

class LoginPage extends BasePage{
    

    get loginForm(){
        return $('form')
    }
    get  username(){
        return $('.e4p6sj50').$('name=email')
    }
    get password(){
        return $('.e4p6sj50').$('name=password')
    }

    get submitButton(){
        return $('button').$('.e1677wdp0')
    }

    get emptyErrorMessage(){
        return $('.e4p6sj52=Campo obrigatório')
    }
    
    get forgottenPasswordLink(){
        return $('.e1ozijpt0*=Esqueci')
    }

    get wrongEmailErrorMessage(){
        return $('.e5387b70=Este email não está cadastrado')
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