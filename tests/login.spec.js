import {expect, test} from '@playwright/test'
import { Login } from '../POM/login.page'
import data from '../testdata/swag.json'


    for(const user of data){

    test(`Login : ${user.username}`, async({page}) => {
    const objLogin = new Login(page)

    try{
        await objLogin.loginF(user.username, user.password)
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        
    }
   

     catch(err){
         console.log(`Error during login for--> ${user.username} : ${err}`)
          const filename = `C:/Users/NR/Desktop/sample/screenshots/image2.png`
        // await page.screenshot({path : `C:/Users/NR/Desktop/sample/screenshots/${user.username}newfailed.png`})
         await page.screenshot({path : filename})
        // return
       throw err
     }

    })
    
}

    




