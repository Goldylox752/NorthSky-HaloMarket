"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";



export default function RegisterPage(){


  const router =
    useRouter();


  const supabase =
    createClient();



  const [loading,setLoading] =
    useState(false);


  const [error,setError] =
    useState("");



  async function handleRegister(e){


    e.preventDefault();


    setLoading(true);

    setError("");




    const form =
      new FormData(e.currentTarget);



    const name =
      form.get("name");


    const email =
      form.get("email");


    const password =
      form.get("password");







    const {
      data,
      error
    } =
    await supabase.auth.signUp({

      email,

      password,

      options:{

        data:{

          full_name:name

        }

      }

    });







    if(error){


      setError(
        error.message
      );


      setLoading(false);

      return;

    }








    if(data.user){


      router.push(
        "/dashboard"
      );


    }



    setLoading(false);


  }






return (

<main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">


<div className="w-full max-w-md rounded-3xl bg-white p-10 shadow">





<h1 className="text-3xl font-black">

Create Account

</h1>




<p className="mt-3 text-gray-500">

Join Halo Marketplace and start buying or selling.

</p>







{error && (

<div className="mt-5 rounded-xl bg-red-50 p-3 text-red-600">

{error}

</div>

)}







<form

onSubmit={handleRegister}

className="mt-6 space-y-4"

>



<input

name="name"

className="w-full rounded-xl border p-3"

placeholder="Full Name"

required

/>






<input

name="email"

type="email"

className="w-full rounded-xl border p-3"

placeholder="Email"

required

/>







<input

name="password"

type="password"

className="w-full rounded-xl border p-3"

placeholder="Password"

minLength="6"

required

/>







<button

disabled={loading}

className="w-full rounded-xl bg-indigo-600 py-3 font-bold text-white disabled:opacity-50"

>


{loading
?
"Creating Account..."
:
"Register"
}


</button>





</form>





</div>


</main>

);


}
