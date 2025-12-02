import {test} from '@playwright/test'

test('make my trip', async({page})=> {

    await page.goto('https://www.makemytrip.com/')
    await page.locator('//section[@data-cy="CommonModal_2"]/span').click()
    await page.locator('//div[@class="tp-dt-header"]/div').nth(2).click()

    await page.getByText('From', {exact:true}).click()
    await page.keyboard.type('Bangalore', {delay:200})
    await page.locator('//ul[@class="react-autosuggest__suggestions-list"]//span[.="Bengaluru"]').first().click()

    await page.getByText('To', {exact:true}).click()
    await page.keyboard.type('Mangalore', {delay:200})
    await page.locator('//ul[@class="react-autosuggest__suggestions-list"]//span[.="Mangalore"]').first().click()


     
    let target_month = 'April 2026'
    let day = 13

    //date to pick 
    let date = page.locator(`//div[.='${target_month}']/following-sibling::div[@class="DayPicker-Body"]//p[.='${day}']`)

   
    //fetching months in the current calender
    let month_loc = await page.locator('//div[@class="DayPicker-Caption"]/div').allInnerTexts()
    //console.log(await month_loc)


    while(!month_loc.includes(target_month))
    {

        await page.locator('//div[@class="DayPicker-NavBar"]/span[@aria-label="Next Month"]').click()
        month_loc = await page.locator('//div[@class="DayPicker-Caption"]/div').allInnerTexts()
       
    }
    
    await date.click()
    await page.getByText('Student', {exact:true}).click()

    await page.getByText('Search', {exact:true}).click()


})