import {test} from '@playwright/test'

    test(`samplescanerio ` , async({page}) => {

    await page.goto('https://www.flipkart.com/travel/flights?param=bds-2025-booknow&fm=neo%2Fmerchandising&iid=M_1787e5b3-a020-456d-87f0-4a1fe180e2ec_1_FHZQYK1YXK70_MC.9ODHZCZ094O6&cid=9ODHZCZ094O6')
    await page.locator('//input[@name="0-departcity"]').click()


   //all places from the dropdown
    let place_locator = await page.locator('//div[@class="fgU7Kf DxUEFR"]/div')

    //waits until dropdown is loaded
   // await places.first().waitFor({state:'visible'})
    await page.waitForSelector('//div[@class="fgU7Kf DxUEFR"]/div', {state:'visible'})
    

    //I want to click Bengaluru
    let target = 'Bengaluru'

    //to iterate over the places
    let places = await place_locator.all()
    

    //method1
    for(let item of places){
       
       
        let text = await item.innerText()   // to get the textname of place  ie: 'Bengaluru, BLR' 
        if(text.includes(target)){
            
           await item.click()
            //break;
        }
    }


    //method 2 
    // let count = await place_locator.count()
    
    // for(let i = 1; i < count; i++){

    //     let text = await place_locator.nth(i).textContent()
      
    //     if(text.includes(target)){
    //         break;
    //     }
    // }


})


