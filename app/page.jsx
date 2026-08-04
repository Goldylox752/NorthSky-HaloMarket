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
    "Halo Marketplace Canada | Buy & Sell Locally",

  description:
    "Canada's trusted marketplace to buy and sell electronics, vehicles, furniture, gaming products, tools and more."

};





async function getProducts(){


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

price,

image,

location,

slug,

category,

created_at,


profiles(

username,

avatar,

verified,

seller_rating,

sales_count

)

`)

.order(
"created_at",
{
ascending:false
}
)

.limit(12);




if(error){

console.error(
error
);

return [];

}



return data || [];

}






export default async function Home(){


const products =
await getProducts();





return (

<main className="min-h-screen bg-gray-50">





<Script

id="halo-market-schema"

type="application/ld+json"

>

{JSON.stringify({

"@context":
"https://schema.org",

"@type":
"Marketplace",

"name":
"Halo Marketplace",

"description":
"Canada's modern marketplace for buying and selling locally.",

"areaServed":
{
"@type":
"Country",
"name":
"Canada"
}


})}

</Script>







<Navbar />



<Hero />



<QuickActions />



<FeaturedListings

products={
products.slice(0,4)
}

/>



<Categories />



<LatestListings

products={
products
}

/>



<SellerCTA />



<Footer />





</main>

);


}
