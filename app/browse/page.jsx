import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";



export const metadata = {

  title:
    "Browse Listings | Halo Marketplace Canada",

  description:
    "Search thousands of local listings from verified Canadian sellers on Halo Marketplace."

};





async function getProducts(filters){


  const supabase =
    await createClient();


  const limit = 12;


  const page =
    Number(filters.page || 1);


  const start =
    (page - 1) * limit;


  const end =
    start + limit - 1;





  let query =
    supabase

    .from("products")

    .select(`

      id,
      title,
      price,
      image,
      location,
      slug,
      category,
      seller_id,
      featured,
      created_at

    `);







  if(filters.search){


    query =
    query.ilike(
      "title",
      `%${filters.search}%`
    );


  }





  if(filters.category){


    query =
    query.eq(
      "category",
      filters.category
    );


  }






  if(filters.location){


    query =
    query.ilike(
      "location",
      `%${filters.location}%`
    );


  }







  if(filters.minPrice){


    query =
    query.gte(
      "price",
      Number(filters.minPrice)
    );


  }







  if(filters.maxPrice){


    query =
    query.lte(
      "price",
      Number(filters.maxPrice)
    );


  }







  if(filters.sort === "low"){


    query =
    query.order(
      "price",
      {
        ascending:true
      }
    );


  }
  else if(filters.sort === "high"){


    query =
    query.order(
      "price",
      {
        ascending:false
      }
    );


  }
  else {


    query =
    query.order(
      "created_at",
      {
        ascending:false
      }
    );


  }







  const {
    data,
    error
  } =
  await query.range(
    start,
    end
  );





  if(error){

    console.error(
      error
    );

    return [];

  }





  return data || [];

}







async function getSeller(id){


  if(!id){

    return null;

  }






  const supabase =
    await createClient();





  const {
    data
  } =
  await supabase

  .from("profiles")

  .select(`

    username,
    avatar,
    verified

  `)

  .eq(
    "id",
    id
  )

  .maybeSingle();






  return data || null;

}







function money(value){


  return new Intl.NumberFormat(

    "en-CA",

    {

      style:"currency",

      currency:"CAD"

    }

  ).format(
    value || 0
  );


}









export default async function BrowsePage({
  searchParams
}){


  const params =
    await searchParams;





  const filters = {


    search:
      params?.search || "",


    category:
      params?.category || "",


    location:
      params?.location || "",


    minPrice:
      params?.minPrice || "",


    maxPrice:
      params?.maxPrice || "",


    sort:
      params?.sort || "new",


    page:
      params?.page || 1


  };







  const products =
    await getProducts(filters);








  const listings =
    await Promise.all(

      products.map(async(product)=>({

        ...product,

        seller:
          await getSeller(
            product.seller_id
          )

      }))

    );









  const categories = [

    "Electronics",

    "Vehicles",

    "Home",

    "Gaming",

    "Tools",

    "Sports",

    "Other"

  ];







  function pageUrl(page){


    const query =
    new URLSearchParams({

      ...filters,

      page

    });


    return `/browse?${query.toString()}`;

  }







return (

<main className="min-h-screen bg-gray-50">





<section className="bg-black px-6 py-16 text-white">


<div className="mx-auto max-w-7xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">


<div>

<h1 className="text-5xl font-black">

Browse Halo Marketplace

</h1>


<p className="mt-4 text-gray-300 text-lg">

Discover trusted Canadian sellers and local deals.

</p>


</div>



<Link

href="/sell"

className="rounded-xl bg-white px-8 py-4 font-black text-black"

>

+ Sell Item

</Link>


</div>


</section>







<section className="mx-auto max-w-7xl px-6 py-10">


<form

action="/browse"

className="grid gap-4 rounded-3xl bg-white p-6 shadow md:grid-cols-6"

>


<input

name="search"

defaultValue={filters.search}

placeholder="Search..."

className="rounded-xl border px-4 py-3"

/>





<select

name="category"

defaultValue={filters.category}

className="rounded-xl border px-4 py-3"

>

<option value="">
Category
</option>


{categories.map(item=>(

<option key={item}>

{item}

</option>

))}


</select>





<input

name="location"

defaultValue={filters.location}

placeholder="Location"

className="rounded-xl border px-4 py-3"

/>





<input

name="minPrice"

type="number"

placeholder="Min Price"

defaultValue={filters.minPrice}

className="rounded-xl border px-4 py-3"

/>





<input

name="maxPrice"

type="number"

placeholder="Max Price"

defaultValue={filters.maxPrice}

className="rounded-xl border px-4 py-3"

/>





<select

name="sort"

defaultValue={filters.sort}

className="rounded-xl border px-4 py-3"

>

<option value="new">
Newest
</option>

<option value="low">
Lowest Price
</option>

<option value="high">
Highest Price
</option>


</select>




<button

className="rounded-xl bg-black text-white font-bold"

>

Search

</button>


</form>


</section>









<section className="mx-auto max-w-7xl px-6 pb-20">


<h2 className="mb-8 text-3xl font-black">

Latest Listings

</h2>





{
listings.length === 0 ? (


<div className="rounded-3xl bg-white p-12 text-center">


<h3 className="text-2xl font-black">

No listings found

</h3>


<p className="mt-3 text-gray-500">

Try another search.

</p>


</div>


):(



<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


{listings.map(product=>(


<Link

key={product.id}

href={`/product/${product.slug}`}

className="overflow-hidden rounded-3xl bg-white border hover:shadow-xl transition"

>


<div className="relative h-60 bg-gray-100">


{product.image ? (

<Image

src={product.image}

alt={product.title}

fill

className="object-cover"

/>

):(


<div className="flex h-full items-center justify-center text-5xl">

📦

</div>


)}



{product.featured && (

<span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">

⭐ Featured

</span>

)}


</div>







<div className="p-5">


<p className="text-xs font-bold text-gray-500">

{product.category || "General"}

</p>


<h3 className="mt-3 truncate text-lg font-black">

{product.title}

</h3>


<p className="mt-3 text-2xl font-black">

{money(product.price)}

</p>


<p className="mt-2 text-sm text-gray-500">

📍 {product.location || "Canada"}

</p>



<div className="mt-5 border-t pt-4 text-sm">


{product.seller?.username || "Halo Seller"}


{product.seller?.verified && (

<span className="ml-2 text-green-600 font-bold">

✓

</span>

)}


</div>



</div>


</Link>


))}


</div>


)

}






<div className="mt-12 flex justify-center gap-4">


{Number(filters.page)>1 && (

<Link

href={pageUrl(Number(filters.page)-1)}

className="rounded-xl bg-black px-6 py-3 text-white font-bold"

>

← Previous

</Link>

)}



{products.length===12 && (

<Link

href={pageUrl(Number(filters.page)+1)}

className="rounded-xl bg-black px-6 py-3 text-white font-bold"

>

Next →

</Link>

)}



</div>




</section>






</main>

);


}
