import {test as base} from '@playwright/test'

export const test = base.extend({

    loggedInPage : async({page}, use) => {

        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill('standard_user')
        await page.getByPlaceholder('Password').fill('secret_sauce')
        await page.getByRole('button', {name: 'Login'}).click()

        await use(page)
    }
})

export const expect = test.expect