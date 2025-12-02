import { expect } from 'playwright/test'

export class Login{


    /**
     * 
     * @param {import ('playwright').Page} page 
     */
    constructor(page){

        this.page = page
        this.usernametxtf = 'Username'
        this.passwordtxtf = 'Password'
        this.submitbtn = 'Login'

    }

    async loginF(un,pwd){

        await this.page.goto('https://www.saucedemo.com/')
        await this.page.getByPlaceholder(this.usernametxtf).fill(un)
        await this.page.getByPlaceholder(this.passwordtxtf).fill(pwd)
        await this.page.getByRole('button', {name : this.submitbtn}).click()
       //await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

    }
}