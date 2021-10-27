const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.instagram.com/accounts/emailsignup/';
const TAG_URL = (tag) => `https://www.instagram.com/explore/tags/${tag}/`;

const instagram = {
    browser: null,
    page: null,

    initialize: async () => {
        instagram.browser = await puppeteer.launch({
            headless: false
        })

        instagram.page = await instagram.browser.newPage();


    },

    login: async (username, password) => {

        await instagram.page.goto(BASE_URL, {waitUntil: 'networkidle2'});

        let loginButton = await instagram.page.$x('//a[contains(text(), "Log in")]');
        console.log(loginButton);

        /* Click on the login url button 1 */
        await loginButton[0].click();

        // await instagram.page.waitForNavigation({ waitUntil: 'networkidle2'});

        await instagram.page.waitFor(700);

        //Writing the username and the password
        await instagram.page.type("input[name='username']", username, {delay: 50});
        await instagram.page.type("input[name='password']", password, {delay: 50});

        // Clicking on the login button 2
        let loginButton2 = await instagram.page.$x('//div[contains(text(), "Log In")]');
        console.log(loginButton2)
        await loginButton2[0].click();

        await instagram.page.waitFor(10000);
        await instagram.page.waitFor("a > svg[aria-label='Home']");
        await instagram.page.click("a > svg[aria-label='Home']");
        
        await instagram.page.waitFor(700);
        let NotNowBtn = await instagram.page.$x('//button[contains(text(), "Not Now")]');
        await NotNowBtn[0].click();
    
    },

    likeTagsProcess: async (tags = []) => {

        for(let tag of tags){

            // Go to the tag page
            await instagram.page.goto(TAG_URL(tag), {waitUntil: 'networkidle2' });

            await instagram.page.waitFor(1000);
            let mostRecent = await instagram.page.$x('//h2[contains(text(), "Most recent")]');
            console.log(mostRecent);
            await instagram.page.waitFor(700);
            let posts = await instagram.page.$$('article > div:nth-child(3) img[crossorigin="anonymous"]');
            console.log(posts);

            for(let i = 0; i < 3 ; i++){

                let post = posts[i];

                // click on the post
                await post.click();

               //wait for the model to appear
                await instagram.page.waitFor('div[role="dialog"]');
                await instagram.page.waitFor(700);

                let isLikable = await instagram.page.$('button span > svg[aria-label="Like"]');

           
                    await instagram.page.click('button span > svg[aria-label="Like"]');

              await instagram.page.waitFor(3000);
              await instagram.page.waitFor('button > div > svg[aria-label="Close"]');
              await instagram.page.click('button > div > svg[aria-label="Close"]');

            await instagram.page.waitFor(1000);

            }
             await instagram.page.waitFor(15000);
        }
    }
}

module.exports = instagram;