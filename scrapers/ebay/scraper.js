import { chromium } from "playwright";


export async function scrapeEbay(keyword){


const browser =
await chromium.launch({
headless:true
});


const page =
await browser.newPage();


const url =
`https://www.ebay.com/sch/i.html?_nkw=${keyword}`;


await page.goto(url,{
waitUntil:"domcontentloaded"
});



const products =
await page.evaluate(()=>{


return Array.from(
document.querySelectorAll(".s-item")
)
.map(item=>{


const title =
item.querySelector(".s-item__title")
?.innerText;


const price =
item.querySelector(".s-item__price")
?.innerText;


const image =
item.querySelector("img")
?.src;


const link =
item.querySelector("a")
?.href;



return {

title,
price,
image,
link

};


})
.filter(x=>x.title);



});


await browser.close();


return products;


}
