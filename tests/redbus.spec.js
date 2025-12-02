import {test} from '@playwright/test'
import data from '../testdata/redbus.json'

test.only('Red bus scenario', async({page}) => {

    
    await page.goto('https://www.redbus.in/')

    let from = await page.getByText('From', {exact:true})
    await from.click()
    await page.keyboard.type(`${data.from_loc}`, {delay: 300})
    await page.waitForTimeout(3000)
    let suggF = await page.getByRole('listbox', {name: 'Search suggestions list'}).all()
    for(let s_f of suggF){
       // console.log(await s_f.allInnerTexts())
    }
    await page.getByRole('heading', {name:`${data.from_location}`, exact:true}).first().click()

    let to = await page.locator('//div[@class="inputWrapper___29d2ca"]')
    await to.click()
    await page.keyboard.type(`${data.to_loc}`, {delay: 300})
    await page.waitForTimeout(3000)

    let suggT = await page.getByRole('listbox', {name: 'Search suggestions'}).all()
    for(let s_t of suggT){
       // console.log(await s_t.allInnerTexts())
    }

    await page.getByRole('heading', {name:`${data.to_location}`}).first().click()


    await page.getByRole('button', {name: 'Search for Tomorrow'}).click()

    // await page.getByText('Date of Journey').click()
    // let month = await page.locator('//div[@class="monthArea___282fb1"]//p[.="November 2025"]')
   // await page.getByRole('button', {name: 'Varadayini Voyages, Bharat Benz A/C Sleeper (2+1). Departs 22:00, arrives 05:15. Duration 7h 15m. Available seats 14 Seats. Price 949 INR. Rated 4.7 out of 5. Total reviewers 94. Live tracking, New Bus'}).click()

   await page.getByText('View seats').first().click()
   await page.getByRole('button',{name: 'Seat number U12, upper deck, seat type sleeper, unreserved, price 949 rupees, seat status available'}).click()
   

   await page.getByRole('button', {name: 'Select boarding & dropping points'}).click()
   await page.getByText(`${data.boarding_point}`).click()

   //await page.getByRole('radio', {name: /Hebbal/}).check()

   await page.getByRole('button', {name:'Fill passenger details'}).click()
   
   await page.getByPlaceholder('Phone', {exact:true}).fill('9876896575')
   await page.getByPlaceholder('Enter email id').fill('abcd@gmail.com')

   await page.locator('//i[@class="icon___a4b464 icon ciicon ciicon-arrow_drop_down "]').click()
   await page.waitForTimeout(2000)
   

   let state_of_res = await page.locator('(//div[@aria-label="Select state of residence"])[2]/div[@class="listItem___06cf49 "]').all()
    for(let s of state_of_res){

      if(await s.allInnerTexts() == data.state_of_residence)
      
       //console.log(await s.allInnerTexts())
       await s.click()

    }

    await page.locator('#whatsapp_toggle').click()
    await page.getByPlaceholder('Enter your Name').fill('Appu')
    await page.getByPlaceholder('Enter Age').fill('30')
    await page.getByRole('radio', {name:'Female'}).click()
   await page.getByRole('radio', {name: "Don't add Free Cancellation"}).click()

   await page.getByRole('radio', {name:'Don’t add redBus Assurance'}).click()

   await page.getByRole('button', {name:'Continue booking'}).click()
})

test.fail('sam', async({page}) => {

   await page.goto('https://www.redbus.in/search?fromCityName=Bangalore&fromCityId=122&srcCountry=IND&fromCityType=CITY&toCityName=Fort%20Road%2C%20Kannur%20%28Kerala%29&toCityId=85266&destCountry=IND&toCityType=AREA&onward=02-Dec-2025&doj=02-Dec-2025&ref=home&step=CI')

   await page.getByText('View seats').first().click()
   await page.getByRole('button',{name: /Seat number U5/}).click()

   await page.getByRole('button', {name: 'Select boarding & dropping points'}).click()

   //await page.getByRole('radio', {name: /Hebbal/}).check()
   await page.getByText('Hebbal').click()

   await page.getByRole('button', {name:'Fill passenger details'}).click()
   
   await page.getByPlaceholder('Phone', {exact:true}).fill('9876896575')
   await page.getByPlaceholder('Enter email id').fill('abcd@gmail.com')

  // await page.locator('//i[@class="icon___a4b464 icon ciicon ciicon-arrow_drop_down "]').click()
   await page.waitForTimeout(2000)
   
})