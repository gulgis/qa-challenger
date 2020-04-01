import { expect } from 'chai'
import HomePage from '../page-objects/HomePage.js'

describe('Home Page Test', () => {
    it('should navigate to homepage', () => {
        HomePage.open()

        expect(HomePage.metaData.title).to.contains('Labor')
        expect(HomePage.metaData.url).to.equal(
            'https://getlabor.com.br/'
        )
    })
})