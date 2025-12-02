
import {test} from '@playwright/test'
import { permission } from 'process'
import fs from 'fs'

test('Auth', async({browser}) => {

    let context = await browser.newContext({

        'permissions' : ['notifications']
    })
    
   
    let page = await context.newPage()

    let res = page.evaluate(() => {return Notification.permission})


})