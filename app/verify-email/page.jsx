"use client";


import { useEffect,useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";


export default function VerifyEmailPage(){


const supabase = createClient();


const [message,setMessage] =
useState(
"Verifying your account..."
);


const [success,setSuccess] =
useState(false);





useEffect(()=>{


async function verify(){


const params =
new URLSearchParams(
window.location.search
);


const token =
params.get("token");



if(!token){

setMessage(
"Invalid verification link."
);

return;

}




const {
error
}= await supabase.auth.verifyOtp({

token_hash:token,

type:"email"


});





if(error){

setMessage(
error.message
);

return;

}




setSuccess(true);


setMessage(
"Your email has been verified successfully!"
);



}



verify();



},[supabase]);







return (

<main className="
min-h-screen
bg-gray-50
flex
items-center
justify-center
px-6
">


<div className="
bg-white
rounded-3xl
shadow-xl
p-10
max-w-md
w-full
text-center
">


<div className="
text-4xl
font-black
mb-6
">

Halo<span className="text-blue-600">.</span>

</div>




<h1 className="
text-3xl
font-black
">

Email Verification

</h1>




<p

className={`
mt-5
${success 
? "text-green-600"
: "text-red-600"}
`}

>

{message}

</p>




<Link

href="/login"

className="
inline-block
mt-8
rounded-xl
bg-blue-600
px-8
py-3
font-bold
text-white
"

>

Continue Login

</Link>



</div>


</main>

);


}
