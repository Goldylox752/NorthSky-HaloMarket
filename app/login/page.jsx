"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";


export default function LoginPage() {


  const router = useRouter();

  const searchParams = useSearchParams();

  const supabase = createClient();



  const successMessage =
    searchParams.get("message");


  const urlError =
    searchParams.get("error");



  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const [loading,setLoading] =
  useState(false);

  const [error,setError] =
  useState(urlError || "");





  async function login(e){

    e.preventDefault();


    setLoading(true);

    setError("");



    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({

      email,

      password

    });





    if(error){


      if(
        error.message.includes(
          "Email not confirmed"
        )
      ){

        setError(
          "Please verify your email before logging in."
        );

      } else {


        setError(
          error.message
        );


      }


      setLoading(false);

      return;

    }





    if(data.session){


      router.push(
        "/dashboard"
      );


      router.refresh();


    }



    setLoading(false);


  }





  return (

    <main className="
    min-h-screen
    bg-gray-50
    flex
    items-center
    justify-center
    px-6
    py-16
    ">


      <div className="
      w-full
      max-w-md
      bg-white
      rounded-3xl
      shadow-xl
      p-10
      ">



        <div className="
        text-4xl
        font-black
        mb-8
        ">

          Halo<span className="text-blue-600">.</span>

        </div>




        <h1 className="
        text-3xl
        font-black
        ">

          Welcome Back

        </h1>



        <p className="
        mt-3
        text-gray-500
        ">

          Login to your Halo Marketplace account.

        </p>





        {successMessage && (

          <div className="
          mt-5
          rounded-xl
          bg-green-50
          p-4
          text-green-700
          ">

            {successMessage}

          </div>

        )}





        {error && (

          <div className="
          mt-5
          rounded-xl
          bg-red-50
          p-4
          text-red-600
          ">

            {error}

          </div>

        )}







        <form

        onSubmit={login}

        className="
        mt-8
        space-y-5
        ">




          <input

          type="email"

          placeholder="Email address"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

          required

          className="
          w-full
          rounded-xl
          border
          px-4
          py-4
          "

          />





          <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          required

          className="
          w-full
          rounded-xl
          border
          px-4
          py-4
          "

          />







          <button

          disabled={loading}

          className="
          w-full
          rounded-xl
          bg-black
          py-4
          font-bold
          text-white
          disabled:opacity-50
          "

          >

          {
            loading
            ? "Logging in..."
            : "Login"
          }


          </button>




        </form>







        <div className="
        mt-8
        flex
        justify-between
        text-sm
        ">


          <Link

          href="/forgot-password"

          className="
          font-bold
          text-indigo-600
          "

          >

          Forgot password?

          </Link>





          <Link

          href="/signup"

          className="
          font-bold
          text-indigo-600
          "

          >

          Create account

          </Link>



        </div>



      </div>


    </main>

  );


}
