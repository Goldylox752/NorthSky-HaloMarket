import Script from "next/script";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestListings from "@/components/LatestListings";
import FeaturedListings from "@/components/FeaturedListings";
import Categories from "@/components/Categories";
import QuickActions from "@/components/QuickActions";
import SellerCTA from "@/components/SellerCTA";
import Footer from "@/components/Footer";

import { createClient } from "@/lib/supabase/server";



export const metadata = {

  title:
    "Halo Marketplace Canada | Buy & Sell Anything Locally",

  description:
    "Halo Marketplace is Canada's modern AI-powered marketplace. Buy and sell vehicles, electronics, furniture, gaming products, tools and more.",


  keywords:[

    "Canada marketplace",

    "buy and sell Canada",

    "local marketplace",

    "used products Canada",

    "online marketplace",

    "Halo Marketplace"

  ],


  openGraph:{

    title:
    "Halo Marketplace Canada",

    description:
    "Buy and sell locally with trusted Canadian sellers.",

    type:
    "website",

    locale:
    "en_CA"

  },


  twitter:{

    card:
    "summary_large_image",

    title:
    "Halo Marketplace Canada",

    description:
    "Canada's trusted local marketplace."

  }


};





async function getProducts(){


try{


const supabase =
await createClient();





const {

data,

error

}

=
await supabase

.from("products")

.select(`

id,

title,

slug,

price,

image,

images,

location,

category,

condition,

featured,

created_at,

seller_id,


profiles(

username,

avatar,

verified,

seller_rating,

sales_count

)

`)


.eq(

"status",

"active"

)


.order(

"featured",

{

ascending:false

}

)


.order(

"created_at",

{

ascending:false

}

)


.limit(12);







if(error){

console.error(
"Halo products error:",
error
);

return [];

}



return data || [];



}catch(error){


console.error(

"Halo homepage error:",

error

);


return [];

}


}









export default async function Home(){



const products =
await getProducts();





const featuredProducts =

products.filter(

(product)=>

product.featured

)

.slice(

0,

4

);





const latestProducts =

products.slice(

0,

12

);








const schema = {


"@context":

"https://schema.org",


"@type":

"OnlineStore",


"name":

"Halo Marketplace",


"description":

"Canada's AI-powered marketplace for buying and selling products locally.",


"url":

process.env.NEXT_PUBLIC_SITE_URL || 
"https://halo-market.vercel.app",



"areaServed":{


"@type":

"Country",

"name":

"Canada"

},



"sameAs":[

]

};



return (

<main className="min-h-screen bg-gray-50">





<Script

id="halo-marketplace-schema"

type="application/ld+json"

>

{

JSON.stringify(schema)

}

</Script>






<Navbar />





<Hero />





<QuickActions />







{

featuredProducts.length > 0 && (

<FeaturedListings

products={featuredProducts}

/>

)

}







<Categories />







<LatestListings

products={latestProducts}

/>








<SellerCTA />







<Footer />





</main>

);


}
