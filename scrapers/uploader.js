import {supabaseAdmin} from "@/lib/supabase/admin";


export async function uploadProducts(products){


for(const product of products){


const {error}=

await supabaseAdmin
.from("products")
.insert({

title:
product.title,


slug:
product.slug,


price:
product.price,


image:
product.image,


category:
product.category,


condition:
product.condition,


external_url:
product.external_url,


source:
product.source


});



if(error){

console.log(
"Upload failed",
error
);

}


}


}
