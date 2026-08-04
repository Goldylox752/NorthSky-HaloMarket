export function analyzePrice({

currentPrice,
marketAverage,
lowestPrice

}){


let score = 50;



if(currentPrice < marketAverage){

score += 25;

}



if(currentPrice < lowestPrice){

score += 20;

}



if(currentPrice > marketAverage){

score -= 25;

}



return {

dealScore:
Math.min(
100,
Math.max(score,0)
),


status:

score >=80
? "HOT DEAL"

:

score >=60
? "GOOD PRICE"

:

"FAIR PRICE"


};


}
