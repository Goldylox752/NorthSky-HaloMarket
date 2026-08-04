import Link from "next/link";


const actions = [

  {
    icon:"🛍️",
    title:"Browse Products",
    description:"Discover thousands of local listings.",
    href:"/browse"
  },


  {
    icon:"➕",
    title:"Sell Faster",
    description:"Create listings and reach buyers.",
    href:"/sell"
  },


  {
    icon:"🏪",
    title:"Seller Stores",
    description:"Build trust with your own store.",
    href:"/stores"
  },


  {
    icon:"📊",
    title:"Dashboard",
    description:"Manage sales and listings.",
    href:"/dashboard"
  }

];





export default function QuickActions(){


return (

<section className="
px-6
py-20
">


<div className="
mx-auto
max-w-7xl
">



<h2 className="
text-4xl
font-black
">

Everything Marketplace

</h2>



<p className="
mt-3
text-gray-600
">

Buy, sell, communicate and manage your Halo account.

</p>





<div className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
">



{actions.map((action)=>(


<Link

key={action.title}

href={action.href}

className="
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-1
hover:shadow-xl
"

>


<div className="
text-5xl
">

{action.icon}

</div>



<h3 className="
mt-5
text-xl
font-black
">

{action.title}

</h3>




<p className="
mt-3
text-gray-600
">

{action.description}

</p>



</Link>



))}



</div>



</div>


</section>


);

}
