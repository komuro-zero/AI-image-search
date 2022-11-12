const express = require("express");
const cors = require("cors");
const app = express();
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');



const searchFreeImageGenerator = async (searchQuery) => {
/* open browser */
  const browser = await puppeteer.launch({
  headless: true
          });
  const page = await browser.newPage();

  /* visit page and input prompt */
  await page.goto('https://freeimagegenerator.com/');
  await page.waitForSelector('textarea[placeholder="Ex: Cyberpunk orange cat, hyper realistic"]', {visible: true});
  await page.type('textarea[placeholder="Ex: Cyberpunk orange cat, hyper realistic"]', searchQuery);
  await page.click('button[class="bg-gray-900 text-white rounded-md px-4 py-1 relative hover:bg-gray-700 w-full"]');

  /** wait for image generation */
  await page.waitForSelector('img[id="img-el"]',{
          timeout: 150000
          });

  /* get image url */
  const [el] = await page.$x('//*[@id="img-el"]');
  const src = await el.getProperty('src');
  const image = await src.jsonValue();
  await browser.close();

  return image
}

const searchCraiyon = async (searchQuery) => {
  /* open browser */
  const browser = await puppeteer.launch({
  headless: true
          });
  const page = await browser.newPage();
  
  /* visit page and input prompt */
  await page.goto('https://www.craiyon.com/');
  await page.waitForSelector('div[id="prompt"]', {visible: true});
  await page.type('div[id="prompt"]', searchQuery);
  await page.click('button[type="button"]');
  
  /** wait for image generation */
  await page.waitForSelector('img[class="h-full w-full rounded-lg border border-gray-500 object-cover object-center hover:ring-4 hover:ring-orange-400"]',{
          timeout: 150000
          });
  
  /* get image url */
  const images = []
  for (var i=1;i<10;i++){
          const element = await page.$x(`//*[@id="app"]/div/div/div[2]/div/div/div/div[1]/div[${i}]/img`);
          let el = element[0];
          const src = await el.getProperty('src');
          const image = await src.jsonValue();
          images.push(image)
  }
  await browser.close();
  
  return images
  }

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/freeaiimagegenerator", async (req, res) => {
  encodedsearchQuery = req.query.prompt;
  searchQuery = decodeURI(encodedsearchQuery)
  console.log(searchQuery)
  if(searchQuery){
    let AIimage = false
    try{
      AIimage = await searchFreeImageGenerator(searchQuery)
    }catch{
      AIimage = "failed in getting image"
    }
    res.json({message: AIimage})
  }else{
    res.json({ message: "Please enter a valid search query" });
  }
});

app.get("/craiyon", async (req, res) => {
  encodedsearchQuery = req.query.prompt;
  searchQuery = decodeURI(encodedsearchQuery)
  console.log(searchQuery)
  let AIimage = false
  if(searchQuery){
    try{
      AIimage = await searchCraiyon(searchQuery)
    }catch{
      AIimage = "failed in getting image"
    }
    res.json({message: AIimage})
  }else{
    res.json({ message: "Please enter a valid search query" });
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});