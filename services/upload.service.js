const supabase = require("../config/supabase");


async function uploadProductImage(file) {


    if (!file) {

        throw new Error("No image file provided");

    }



    const allowedTypes = [

        "image/jpeg",
        "image/png",
        "image/webp"

    ];



    if (!allowedTypes.includes(file.mimetype)) {

        throw new Error(
            "Invalid image format. Only JPG, PNG, and WEBP allowed."
        );

    }



    const fileName =

        `products/${Date.now()}-${file.originalname
            .replace(/[^a-zA-Z0-9.-]/g, "-")}`;



    const { error } = await supabase.storage

        .from("product-images")

        .upload(

            fileName,

            file.buffer,

            {

                contentType: file.mimetype,

                cacheControl: "3600",

                upsert: false

            }

        );



    if (error) {

        throw error;

    }



    const { data } = supabase.storage

        .from("product-images")

        .getPublicUrl(fileName);



    return {

        url: data.publicUrl,

        path: fileName

    };


}



module.exports = {

    uploadProductImage

};
