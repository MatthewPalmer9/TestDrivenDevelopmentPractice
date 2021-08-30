import * as playwright from 'playwright';

async function main() {
    const { chromium, webkit, firefox } = playwright;
    const URL = "http://localhost:5500/Node/src/"

    for(const browserType of [chromium, webkit, firefox]) {
        //  browser
        const browser = await browserType.launch();
        console.log(`Running ${browserType}...`);

        // Create a context
        const context = await browser.newContext();
        // Create a page
        const page = await context.newPage();

        const newPage = await page.goto(URL)
                            .then(resp => console.log(resp?.ok()))
                            .catch(err => console.log(err));

        console.log(newPage)
        await browser.close();

        // // Carry out actions
        // await page.goto('http://whatsmyuseragent.org/');
        // await page.screenshot({ path: `output/${browserType.name()}.png`});

        // await browser.close();
    }
}
main()