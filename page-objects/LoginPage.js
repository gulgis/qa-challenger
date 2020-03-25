import BasePage from './BasePage.js'

class LoginPage extends BasePage{
    

    get loginForm(){
        return $('/html/body/ui-view/login/div/div/main/section/div/main/form')
    }
    get  username(){
        return $('.e4p6sj50')
    }
    get password(){
        return $('.e4p6sj50')
    }

    get submitButton(){
        return $('')
    }

    get errorMessage(){
        return $('')
    }
    
    get forgottenPasswordLink(){
        return $('')
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