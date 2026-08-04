import { createClient } from "@/lib/supabase/server";



export async function GET(){


const supabase =
await createClient();



const {
data,
error
}= await supabase

.from("products")

.select("*")

.order(
"created_at",
{
ascending:false
}
);




if(error){

return Response.json(

{
error:error.message
},

{
status:500
}

);

}




return Response.json(data);


}







export async function POST(request){


const supabase =
await createClient();



const body =
await request.json();





const {
data,
error
}= await supabase

.from("products")

.insert(body)

.select()

.single();






if(error){

return Response.json(

{
error:error.message
},

{
status:500
}

);

}





return Response.json(data);


}
