export async function generatePrice(product){


const prompt = `

Analyze this marketplace product.

Product:
${product.title}

Current price:
${product.price}

Market average:
${product.market_price}

Condition:
${product.condition}


Return:

recommended price
reason
deal score

`;



return prompt;


}
