export default class BasePage {
    get submitBtn() { 
        return $('form button[type="submit"]') 
    }
    
    open(url){
        browser.url(url)
    }

    wait(time){
        browser.pause(time)
    }

    submit() {
        this.submitBtn.click()
    }
}