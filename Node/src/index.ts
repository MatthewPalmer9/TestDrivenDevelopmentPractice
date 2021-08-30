import * as playwright from 'playwright';

async function main() {
    const { chromium, webkit, firefox } = playwright;
    const URL = "http://localhost:5500/Node/src/"

    for(const browserType of [chromium, webkit, firefox]) {
        //  browser
        const browser = await browserType.launch();
        console.log(`Running ${browserType.name()} now...`);

        // Create a context
        const context = await browser.newContext();
        // Create a page
        const page = await context.newPage();

        const newPage = await page.goto(URL)
                        .then(resp => console.log("Response 200:", resp?.ok()))
                        .catch(err => console.log(err));
        await browser.close();
    }
}
main()