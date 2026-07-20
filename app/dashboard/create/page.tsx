// app/dashboard/create/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import PromptBox from "@/components/generate/PromptBox";
import GenerateButton from "@/components/generate/GenerateButton";

import { supabase } from "@/lib/supabase/client";


export default function CreatePage() {


  const router = useRouter();


  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [duration, setDuration] = useState(10);



  async function createProject() {


    try {


      const {
        data:{
          user
        }
      } = await supabase.auth.getUser();



      if(!user){

        alert("You must be logged in");

        return;

      }





      // Check credits

      const {
        data:profile,
        error:profileError
      } = await supabase
        .from("profiles")
        .select("credits")
        .eq(
          "id",
          user.id
        )
        .single();



      if(profileError){

        console.error(
          "PROFILE ERROR:",
          profileError
        );

        alert(
          "Could not check credits"
        );

        return;

      }





      if(!profile || profile.credits <= 0){


        alert(
          "You don't have enough credits."
        );


        return;

      }







      // Create project

      const {
        data:project,
        error:projectError
      } = await supabase
        .from("projects")
        .insert({

          user_id:user.id,

          prompt,

          style,

          duration,

          status:"pending"

        })
        .select()
        .single();





      if(projectError){


        console.error(
          "PROJECT CREATE ERROR:",
          projectError
        );


        alert(
          projectError.message
        );


        return;

      }






      console.log(
        "PROJECT CREATED:",
        project.id
      );







      // Start AI generation

      const response = await fetch(
        "/api/generate",
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },


          body:JSON.stringify({

            prompt,

            projectId:project.id

          })

        }
      );






      const result = await response.json();




      console.log(
        "GENERATE RESPONSE:",
        result
      );







      if(!response.ok){


        await supabase
          .from("projects")
          .update({

            status:"failed",

            error_message:
              result.error || "Generation failed"

          })
          .eq(
            "id",
            project.id
          );



        alert(
          result.error || "AI generation failed"
        );


        return;

      }







      // Remove credit

      const {
        error:creditError
      } = await supabase
        .from("profiles")
        .update({

          credits:
            profile.credits - 1

        })
        .eq(
          "id",
          user.id
        );




      if(creditError){

        console.error(
          "CREDIT ERROR:",
          creditError
        );

      }







      router.push(
        `/dashboard/processing?id=${project.id}`
      );





    } catch(error:any){


      console.error(
        "CREATE ERROR:",
        error
      );


      alert(
        error.message ||
        "Something went wrong"
      );


    }


  }








  return (

    <div className="p-8">


      <div className="max-w-4xl">


        <div className="mb-10">


          <h1 className="text-4xl font-bold tracking-tight text-white">
            Create AI Video
          </h1>


          <p className="mt-3 text-zinc-400">
            Describe your idea and let AI transform it into a short video.
          </p>


        </div>





        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900/50
            p-8
          "
        >


          <div className="flex flex-col gap-8">



            <PromptBox
              value={prompt}
              onChange={setPrompt}
            />




            <div
              className="
                grid
                gap-6
                md:grid-cols-2
              "
            >


        


            </div>




            <GenerateButton
              onClick={createProject}
            />



          </div>


        </div>


      </div>


    </div>

  );

}