import puppeteer from 'puppeteer'

test('open-game', async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser/7c3a89b3-edfe-4e64-a9e4-b091ad9c247f',
        slowMo: 80,
        defaultViewport: null,
    })

    const page = await browser.newPage()
    await page.goto('https://ethermon.io/')
})

export const TEST = test
