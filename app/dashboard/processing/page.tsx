"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";


export default function ProcessingPage() {

  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");


  const [status, setStatus] = useState("loading");



  useEffect(() => {

    if(!id) return;


    async function loadProject() {

      const {
        data,
        error
      } = await supabase
        .from("projects")
        .select("status")
        .eq("id", id)
        .single();



      if(error){

        console.error(error);
        return;

      }


      setStatus(data.status);

    }



    loadProject();



    const interval = setInterval(() => {

      loadProject();

    },3000);



    return () => clearInterval(interval);


  },[id]);



  const steps = [

    {
      name:"Understanding prompt",
      completed:true
    },

    {
      name:"Planning scenes",
      completed: status !== "pending"
    },

    {
      name:"Generating video",
      completed: status === "completed"
    },

    {
      name:"Finalizing",
      completed: status === "completed"
    }

  ];



  return (

    <div className="min-h-screen p-8 text-white">


      <div className="mx-auto max-w-3xl">


        <h1 className="text-4xl font-bold">
          Creating your AI video
        </h1>


        <p className="mt-3 text-zinc-400">
          AI is transforming your idea into a short video.
        </p>



        <div
          className="
          mt-10
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/50
          p-8
          "
        >


          <div className="flex flex-col gap-6">


            {steps.map((step)=>(
              
              <div
                key={step.name}
                className="flex items-center gap-4"
              >

                <div
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${
                      step.completed
                      ? "border-white bg-white text-black"
                      : "border-zinc-700 text-zinc-500"
                    }
                  `}
                >

                  {step.completed ? "✓" : ""}

                </div>


                <span
                  className={
                    step.completed
                    ? "text-white"
                    : "text-zinc-500"
                  }
                >

                  {step.name}

                </span>


              </div>


            ))}


          </div>



          <div className="mt-8 border-t border-zinc-800 pt-6">


            <p className="text-sm text-zinc-500">
              Current status
            </p>


            <p className="mt-2 text-lg font-semibold">
              {status}
            </p>



            {status === "completed" && (

              <button
                onClick={()=>router.push("/dashboard")}
                className="
                mt-6
                rounded-xl
                bg-white
                px-5
                py-3
                text-black
                "
              >

                View Dashboard

              </button>

            )}


          </div>


        </div>


      </div>


    </div>

  );

}