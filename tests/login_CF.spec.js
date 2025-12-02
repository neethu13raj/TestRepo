import {test,expect} from './customfixture'


test('sample', async({loggedInPage}) => {

    await loggedInPage.goto('https://www.saucedemo.com/inventory.html')
    await expect(loggedInPage).toHaveTitle('Swag Labs')
})