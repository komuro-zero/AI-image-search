import React from 'react'

const searchFreeImageGenerator = async (searchQuery) => {
    /* open browser */
    const browser = await puppeteer.launch({
    headless: true
            });
    const page = await browser.newPage();
    
    /* visit page and input prompt */
    await page.goto('https://freeimagegenerator.com/');
    await page.waitForSelector('input[placeholder="Ex: Cyberpunk orange cat, hyper realistic"]', {visible: true});
    await page.type('input[placeholder="Ex: Cyberpunk orange cat, hyper realistic"]', searchQuery);
    await page.click('button[type="button"]');
    
    /** wait for image generation */
    await page.waitForSelector('img[id="jellybean"]',{
            timeout: 150000
            });
    
    /* get image url */
    const [el] = await page.$x('//*[@id="jellybean"]');
    const src = await el.getProperty('src');
    const image = await src.jsonValue();
    await browser.close();
    
    return image
}

const ImageResults = () => {
  return (
    <div>
      
    </div>
  )
}

export default ImageResults
