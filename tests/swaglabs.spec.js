import {test} from '@playwright/test'

test('Login feature', async({page}) => {

    await page.goto('https://www.saucedemo.com/inventory.html')
    
})