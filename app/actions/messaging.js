"use server";

import { createClient } from "@/lib/supabase/server";



export async function sendMessage({
  receiverId,
  content
}) {


  const supabase =
    await createClient();




  const {
    data: {
      user
    },
    error: userError
  } = await supabase.auth.getUser();





  if(userError || !user){

    return {
      error:
      "You must be logged in"
    };

  }







  if(!receiverId || !content){


    return {
      error:
      "Missing message information"
    };

  }








  const {
    data,
    error
  } = await supabase

  .from("messages")

  .insert({

    sender_id:
      user.id,

    receiver_id:
      receiverId,

    content

  })

  .select()

  .single();








  if(error){


    console.error(
      "Message error:",
      error
    );


    return {
      error:
      error.message
    };

  }








  return {
    success:true,
    message:data
  };


}







export async function getMessages(
  userId
){


  const supabase =
    await createClient();





  const {
    data,
    error
  } = await supabase

  .from("messages")

  .select(`

    id,

    sender_id,

    receiver_id,

    content,

    created_at

  `)

  .or(

    `sender_id.eq.${userId},receiver_id.eq.${userId}`

  )

  .order(

    "created_at",

    {
      ascending:false
    }

  );






  if(error){


    console.error(
      "Messages fetch error:",
      error
    );


    return [];

  }






  return data || [];

}
