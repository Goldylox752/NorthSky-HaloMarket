import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";



export const metadata = {

  title:
    "My Reviews | Halo Marketplace",

  description:
    "View your Halo Marketplace buyer and seller reviews."

};







async function getReviews(){


  const supabase =
    await createClient();





  const {
    data:{
      user
    }
  } =
  await supabase.auth.getUser();







  if(!user){


    redirect("/login");


  }








  const {
    data,
    error
  } =
  await supabase

  .from("reviews")

  .select(`

    id,

    rating,

    comment,

    created_at,

    products(

      id,

      title,

      image

    )

  `)

  .eq(
    "user_id",
    user.id
  )

  .order(

    "created_at",

    {
      ascending:false
    }

  );







  if(error){


    console.error(
      "Reviews error:",
      error
    );


    return [];

  }







  return data || [];


}








function formatDate(date){


  if(!date){

    return "";

  }




  return new Date(date)

  .toLocaleDateString(

    "en-CA",

    {

      year:"numeric",

      month:"long",

      day:"numeric"

    }

  );


}








function Stars({
  rating
}){


  return (

    <div className="text-yellow-500 text-xl">


      {"★".repeat(
        rating || 0
      )}


      {"☆".repeat(
        5 - (rating || 0)
      )}


    </div>

  );


}







export default async function ReviewsPage(){


  const reviews =
    await getReviews();







return (

<main className="min-h-screen bg-gray-50 px-6 py-12">


<div className="mx-auto max-w-5xl">





<h1 className="text-5xl font-black">

My Reviews

</h1>




<p className="mt-3 text-gray-500">

Your Halo Marketplace feedback history.

</p>







<div className="mt-10 space-y-6">






{
reviews.length === 0 ? (



<div className="rounded-3xl bg-white p-12 text-center shadow">


<h2 className="text-2xl font-black">

No reviews yet

</h2>



<p className="mt-3 text-gray-500">

Purchase items and leave feedback for sellers.

</p>



</div>




):(



reviews.map((review)=>(


<div

key={review.id}

className="rounded-3xl bg-white p-8 shadow"

>





<h2 className="text-xl font-black">

{review.products?.title || "Marketplace Item"}

</h2>





<Stars

rating={review.rating}

/>







<p className="mt-5 text-gray-700">

{review.comment || "No comment provided."}

</p>






<p className="mt-5 text-sm text-gray-400">

Posted {formatDate(review.created_at)}

</p>





</div>


))


)



}





</div>






</div>


</main>


);


}
