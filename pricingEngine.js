import {
calculateMarketPrice
}
from "./calculator";


import {
analyzePrice
}
from "./analyzer";



export function priceEngine(product, competitors){



const prices =
competitors.map(
x=>x.price
);



const marketPrice =
calculateMarketPrice(prices);



const analysis =
analyzePrice({

currentPrice:
product.price,


marketAverage:
marketPrice,


lowestPrice:
Math.min(...prices)

});



return {


marketPrice,


dealScore:
analysis.dealScore,


status:
analysis.status


};


}
