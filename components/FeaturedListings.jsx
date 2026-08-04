import Image from "next/image";
import Link from "next/link";


function formatPrice(price){

  return new Intl.NumberFormat(
    "en-CA",
    {
      style:"currency",
      currency:"CAD"
    }
  ).format(price || 0);

}





export default function FeaturedListings({
  products = []
}){


return (

<section className="
bg-black
px-6
py-20
text-white
">


<div className="
mx-auto
max-w-7xl
">





<div className="
flex
flex-col
gap-6
md:flex-row
md:items-center
md:justify-between
">



<div>


<h2 className="
text-4xl
font-black
">

🔥 Featured On Halo

</h2>



<p className="
mt-3
text-gray-300
">

Popular listings from trusted Canadian sellers.

</p>


</div>






<Link

href="/browse"

className="
rounded-xl
border
border-white
px-6
py-3
font-bold
transition
hover:bg-white
hover:text-black
"

>

View All Listings

</Link>





</div>









{products.length === 0 ? (


<div className="
mt-10
rounded-3xl
bg-white/10
p-12
text-center
">


<div className="
text-6xl
">

📦

</div>



<h3 className="
mt-5
text-2xl
font-black
">

No Featured Listings

</h3>



<p className="
mt-3
text-gray-300
">

Be the first seller to create a Halo listing.

</p>



<Link

href="/sell"

className="
mt-6
inline-block
rounded-xl
bg-white
px-8
py-4
font-black
text-black
"

>

Create Listing

</Link>


</div>


):(





<div className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
">





{products.map((product)=>(



<Link

key={product.id}

href={`/product/${product.slug}`}

className="
group
overflow-hidden
rounded-3xl
bg-white
text-black
transition
hover:-translate-y-1
hover:shadow-2xl
"

>





<div className="
relative
h-56
bg-gray-100
">



{product.image ? (


<Image

src={product.image}

alt={product.title}

fill

className="
object-cover
transition
duration-300
group-hover:scale-105
"

/>


):(


<div className="
flex
h-full
items-center
justify-center
text-6xl
">

📦

</div>


)}



</div>







<div className="
p-5
">





<div className="
flex
items-center
justify-between
gap-2
">



<span className="
rounded-full
bg-gray-100
px-3
py-1
text-xs
font-bold
">

{product.category || "General"}

</span>






{product.profiles?.verified && (


<span className="
text-xs
font-bold
text-green-600
">

✓ Verified

</span>


)}



</div>







<h3 className="
mt-4
truncate
text-lg
font-black
">

{product.title}

</h3>







<p className="
mt-3
text-2xl
font-black
">

{formatPrice(product.price)}

</p>







<div className="
mt-3
flex
items-center
justify-between
text-sm
text-gray-500
">


<span>

📍 {product.location || "Canada"}

</span>



{product.profiles?.seller_rating && (

<span>

⭐ {product.profiles.seller_rating}

</span>

)}



</div>






</div>






</Link>



))}



</div>



)}




</div>


</section>

);


}
