"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";


export default function SignupPage(){


const router = useRouter();

const supabase = createClient();


const [loading,setLoading] =
useState(false);


const [error,setError] =
useState("");


const [success,setSuccess] =
useState("");





async function handleSignup(e){


e.preventDefault();


setLoading(true);

setError("");

setSuccess("");



const form =
new FormData(e.currentTarget);



const username =
form.get("username")
?.toString()
.trim();


const email =
form.get("email")
?.toString()
.trim();


const password =
form.get("password")
?.toString();





if(!username || !email || !password){

setError(
"All fields are required."
);

setLoading(false);

return;

}





if(password.length < 6){


setError(
"Password must be at least 6 characters."
);


setLoading(false);

return;


}







const {
data,
error
} = await supabase.auth.signUp({


email,

password,


options:{


data:{


username

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








if(data.session){


setSuccess(
"Account created successfully!"
);


router.push(
"/dashboard"
);


router.refresh();



}else{


setSuccess(

"Account created! Check your email to verify your account."

);


}






setLoading(false);


}







return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-gray-50
px-6
">


<div className="
w-full
max-w-md
rounded-3xl
bg-white
p-10
shadow-xl
">



<h1 className="
text-4xl
font-black
">

Create Account

</h1>



<p className="
mt-3
text-gray-600
">

Join Halo Marketplace and start buying or selling.

</p>





{error && (

<div className="
mt-6
rounded-xl
bg-red-50
p-4
font-bold
text-red-600
">

{error}

</div>

)}






{success && (

<div className="
mt-6
rounded-xl
bg-green-50
p-4
font-bold
text-green-600
">

{success}

</div>

)}








<form

onSubmit={handleSignup}

className="
mt-8
space-y-4
"

>



<input

name="username"

placeholder="Full Name"

required

className="
w-full
rounded-xl
border
px-4
py-3
"

/>





<input

name="email"

type="email"

placeholder="Email address"

required

className="
w-full
rounded-xl
border
px-4
py-3
"

/>





<input

name="password"

type="password"

placeholder="Password"

required

className="
w-full
rounded-xl
border
px-4
py-3
"

/>







<button

disabled={loading}

className="
w-full
rounded-xl
bg-black
py-4
font-black
text-white
hover:bg-gray-800
disabled:opacity-50
"

>

{
loading
?
"Creating Account..."
:
"Create Account"
}


</button>



</form>







<p className="
mt-8
text-center
text-sm
text-gray-600
">


Already have an account?


<Link

href="/login"

className="
ml-2
font-bold
text-indigo-600
"

>

Login

</Link>


</p>




</div>


</main>


);


}
