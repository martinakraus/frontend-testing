const puppeteer = require('puppeteer');
const { add, divide } = require('./index');

test('should create the sum out of two numbers', () => {
    const sum = add(7,4);
    expect(sum).toBe(11);
});

test('should divide two number', () => {
    const result = divide(8,4);
    expect(result).toBe(2);
});

test('should throw exception', () => {
    try {
        divide(8,0);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (err) {
        expect(err).toBe('one does not simply divide through zero');
    }
});

test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(
        'file:///Users/codekittey/Dev/frontend-testing/index.html'
    );
    await page.click('input#screen1');
    await page.type('input#screen1', '7');
    await page.click('input#screen2');
    await page.type('input#screen2', '4');
    await page.click('#plus');
    const finalText = await page.$eval('#result', el => el.value);
    expect(finalText).toBe('11');
}, 10000)
