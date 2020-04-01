import BasePage from './BasePage.js'

class HomePage extends BasePage {
    
    get metaData(){
        return browser.getMetaData()
    }

    open(){
        super.open('https://getlabor.com.br')
    }
}

export default new HomePage()