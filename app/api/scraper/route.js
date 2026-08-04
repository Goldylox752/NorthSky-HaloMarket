import {NextResponse} from "next/server";


import {scrapeEbay}
from "@/scrapers/ebay/scraper";


import {parseEbayProduct}
from "@/scrapers/ebay/parser";


import {uploadProducts}
from "@/scrapers/uploader";



export async function POST(req){


const body =
await req.json();



const keyword =
body.keyword || "electronics";



const results =
await scrapeEbay(keyword);



const products =
results.map(parseEbayProduct);



await uploadProducts(products);



return NextResponse.json({

success:true,

imported:
products.length

});


}
