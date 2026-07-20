import { NextResponse } from "next/server";

import { generateVideo } from "@/lib/ai/video";
import { createClient } from "@/lib/supabase/server";


export async function POST(req: Request) {

  try {


    const body = await req.json();


    const {
      prompt,
      projectId
    } = body;



    if (!prompt || !projectId) {

      return NextResponse.json(
        {
          error: "Missing prompt or projectId"
        },
        {
          status: 400
        }
      );

    }



    const supabase = await createClient();



    // Verificar usuario del servidor

    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    console.log(
      "SERVER USER:",
      user?.id
    );



    if(!user){

      return NextResponse.json(
        {
          error:"No authenticated user"
        },
        {
          status:401
        }
      );

    }





    // Estado processing

    const {
      error:processingError
    } = await supabase
      .from("projects")
      .update({
        status:"processing"
      })
      .eq(
        "id",
        projectId
      );



    if(processingError){

      console.error(
        "PROCESSING ERROR:",
        processingError
      );

    }





    console.log(
      "STARTING HAILUO..."
    );



    const result = await generateVideo(prompt);



    console.log(
      "HAILUO RESULT:",
      result
    );




    const videoUrl = result?.data?.video?.url;



    if(!videoUrl){

      throw new Error(
        "No video URL returned"
      );

    }



    console.log(
      "VIDEO URL:",
      videoUrl
    );






    // Guardar resultado final

    const {
      error:updateError
    } = await supabase
      .from("projects")
      .update({

        status:"completed",

        video_url:videoUrl

      })
      .eq(
        "id",
        projectId
      );




    if(updateError){

      console.error(
        "FINAL UPDATE ERROR:",
        updateError
      );


      return NextResponse.json(
        {
          error:updateError.message
        },
        {
          status:500
        }
      );

    }



    console.log(
      "PROJECT UPDATED SUCCESSFULLY"
    );




    return NextResponse.json({

      success:true,

      videoUrl

    });





  } catch(error:any){


    console.error(
      "GENERATION ERROR:",
      error
    );


    return NextResponse.json(
      {
        error:
          error?.message ||
          "Generation failed"
      },
      {
        status:500
      }
    );


  }

}