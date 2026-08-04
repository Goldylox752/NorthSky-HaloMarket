import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "@/components/SubmitButton";



export const metadata = {

  title:
    "Sell Item | Halo Marketplace",

  description:
    "Create a listing and sell products across Canada on Halo Marketplace."

};





function createSlug(text){

  return text

    .toLowerCase()

    .trim()

    .replace(/[^a-z0-9]+/g,"-")

    .replace(/^-+|-+$/g,"");

}






export default async function SellPage({
  searchParams
}){


const params =
await searchParams;



const error =
params?.error || "";





async function createProduct(formData){

"use server";



const supabase =
await createClient();






// AUTH

const {

data:{
user

}

} =
await supabase.auth.getUser();





if(!user){

redirect("/login");

}







// FORM DATA


const title =
formData.get("title")
?.toString()
.trim();



const description =
formData.get("description")
?.toString()
.trim();



const price =
Number(
formData.get("price")
);



const location =
formData.get("location")
?.toString()
.trim();



const category =
formData.get("category")
?.toString();



const condition =
formData.get("condition")
?.toString();



const files =
formData.getAll("images");








if(
!title ||
!price ||
!location ||
!category
){

redirect(
"/sell?error=Please complete all required fields"
);

}








// IMAGE UPLOAD


let imageUrls = [];



for(
const file of files
){


if(
file instanceof File &&
file.size > 0
){



const extension =
file.name.split(".").pop();



const filename =

`${user.id}/${crypto.randomUUID()}.${extension}`;






const {
data,
error

} = await supabase.storage

.from(
"product-images"
)

.upload(
filename,
file,
{
contentType:file.type
}

);







if(error){

console.error(
"Upload error",
error
);

continue;

}







const {

data:{
publicUrl

}

}

=
supabase.storage

.from(
"product-images"
)

.getPublicUrl(
data.path
);





imageUrls.push(
publicUrl
);



}


}







if(
imageUrls.length === 0
){

redirect(
"/sell?error=Upload at least one image"
);

}








// CREATE SLUG


const slug =

`${createSlug(title)}-${Date.now()}`;









// INSERT PRODUCT


const {
error:insertError

}

=
await supabase

.from("products")

.insert({


seller_id:
user.id,


title,


slug,


description,


price,


location,


category,


condition,


image:
imageUrls[0],


images:
imageUrls,


status:
"active"


});






if(insertError){

console.error(
insertError
);


redirect(
"/sell?error=Could not create listing"
);


}






redirect(
`/product/${slug}`
);



}







return (

<main className="
min-h-screen
bg-gray-50
px-6
py-16
">



<div className="
mx-auto
max-w-3xl
">



<div className="
rounded-3xl
bg-white
p-10
shadow-xl
">





<h1 className="
text-4xl
font-black
">

Sell On Halo Marketplace

</h1>





<p className="
mt-3
text-gray-600
">

Create your listing and reach buyers across Canada.

</p>








{
error && (

<div className="
mt-6
rounded-xl
bg-red-50
p-4
font-bold
text-red-600
">

⚠️ {error}

</div>

)

}







<form

action={createProduct}

encType="multipart/form-data"

className="
mt-10
space-y-5
"

>





<input

name="title"

required

placeholder="Product title"

className="
w-full
rounded-xl
border
p-4
"

/>







<input

name="price"

type="number"

required

placeholder="Price CAD"

className="
w-full
rounded-xl
border
p-4
"

/>







<input

name="location"

required

placeholder="City / Province"

className="
w-full
rounded-xl
border
p-4
"

/>








<select

name="category"

required

className="
w-full
rounded-xl
border
p-4
"

>


<option value="">
Select Category
</option>


<option>
Electronics
</option>


<option>
Vehicles
</option>


<option>
Home
</option>


<option>
Furniture
</option>


<option>
Gaming
</option>


<option>
Tools
</option>


<option>
Sports
</option>


<option>
Fashion
</option>


<option>
Services
</option>


</select>








<select

name="condition"

required

className="
w-full
rounded-xl
border
p-4
"

>


<option value="">
Condition
</option>


<option>
New
</option>


<option>
Like New
</option>


<option>
Used
</option>


<option>
Refurbished
</option>


</select>







<textarea

name="description"

rows="6"

required

placeholder="Describe your item..."

className="
w-full
rounded-xl
border
p-4
"

/>








<label className="
font-bold
">

Upload Photos

</label>




<input

name="images"

type="file"

multiple

accept="image/*"

required

className="
w-full
rounded-xl
border
p-4
"

/>








<SubmitButton>

Create Listing

</SubmitButton>





</form>





</div>


</div>


</main>

);


}
