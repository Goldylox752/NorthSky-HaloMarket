export function parseEbayProduct(product){


return {


title:
product.title,


slug:
product.title
.toLowerCase()
.replace(/[^a-z0-9]+/g,"-"),



price:
Number(
product.price
?.replace(/[^0-9.]/g,"")
) || 0,



image:
product.image,


external_url:
product.link,


source:
"ebay",


condition:
"used",


category:
"imported"



};


}
