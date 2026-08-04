import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";


export async function POST(request){


try{


const {
email,
password,
fullName
} = await request.json();




if(
!email ||
!password ||
!fullName
){

return NextResponse.json(

{
error:"All fields are required"
},

{
status:400
}

);

}






const supabase =
await createClient();






const {
data,
error
}= await supabase.auth.signUp({


email,

password,


options:{


data:{


full_name:fullName


}


}


});







if(error){


return NextResponse.json(

{
error:error.message
},

{
status:400
}

);


}







return NextResponse.json({

message:
"Account created. Check your email.",

user:data.user


});





}catch(error){



return NextResponse.json(

{
error:"Signup failed"
},

{
status:500
}

);


}


}
