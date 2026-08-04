"use server";

import { createClient } from "@/lib/supabase/server";



export async function signUp({
  email,
  password,
  username
}) {


  const supabase =
    await createClient();





  const {
    data,
    error
  } = await supabase.auth.signUp({

    email,

    password,

    options: {

      data: {

        username

      }

    }

  });






  if(error){


    return {

      error:
      error.message

    };

  }






  return {

    success:true,

    user:data.user

  };


}








export async function login({
  email,
  password
}) {


  const supabase =
    await createClient();





  const {
    data,
    error
  } = await supabase.auth.signInWithPassword({

    email,

    password

  });






  if(error){


    return {

      error:
      error.message

    };

  }






  return {

    success:true,

    user:data.user

  };


}








export async function logout() {


  const supabase =
    await createClient();





  const {
    error
  } = await supabase.auth.signOut();






  if(error){


    return {

      error:
      error.message

    };

  }






  return {

    success:true

  };


}








export async function getUser() {


  const supabase =
    await createClient();





  const {
    data,
    error
  } = await supabase.auth.getUser();






  if(error){


    return null;

  }





  return data.user || null;


}
