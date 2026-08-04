import { createClient } from "@/lib/supabase/server";


export async function POST(request){


  const {
    email,
    password
  } = await request.json();



  const supabase =
    await createClient();



  const {
    data,
    error
  } = await supabase.auth.signUp({

    email,

    password

  });



  if(error){

    return Response.json(
      {
        error:error.message
      },
      {
        status:400
      }
    );

  }



  return Response.json(data);


}
