"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Sparkles } from "lucide-react";

import { supabase } from "@/lib/supabase/client";


interface Props {
  name: string;
  price: string;
  plan: string;
  description: string;
}


const PLAN_VIDEOS = {
  basic: 13,
  starter: 40,
  pro: 90,
  business: 200,
};



export default function PricingCard({
  name,
  price,
  plan,
  description,
}: Props) {


  const router = useRouter();


  const [loading, setLoading] = useState(false);




  async function checkout() {



    // VERIFICAR USUARIO ANTES DE COMPRAR

    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();




    if(!user){


      router.push("/auth/login");


      return;


    }







    try {


      setLoading(true);




      const res = await fetch("/api/checkout", {


        method: "POST",


        headers: {

          "Content-Type": "application/json",

        },


        body: JSON.stringify({

          plan,

        }),


      });







      // SI EL API BLOQUEA POR NO TENER CUENTA

      if(res.status === 401){


        router.push("/auth/login");


        return;


      }







      const text = await res.text();




      console.log(
        "Respuesta del checkout:",
        text
      );







      let data;





      try {



        data = JSON.parse(text);



      } catch {



        console.error(

          "La API no devolvió JSON:",

          text

        );


        return;


      }







      if(data.checkoutUrl){



        window.location.href =
          data.checkoutUrl;



      } else {



        console.error(

          "No hay checkoutUrl:",

          data

        );



      }






    } catch(error){



      console.error(

        "Error checkout:",

        error

      );



    } finally {



      setLoading(false);



    }



  }







  const videos =
    PLAN_VIDEOS[plan as keyof typeof PLAN_VIDEOS] ?? 13;




  const isPopular = plan === "pro";







  return (


    <div

      className={`

        relative

        rounded-3xl

        border

        p-8

        transition-all

        duration-300

        hover:-translate-y-2


        ${

          isPopular

          ? "border-white bg-zinc-900 shadow-2xl"

          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"

        }

      `}

    >







      {isPopular && (


        <div

          className="

            absolute

            -top-4

            left-1/2

            -translate-x-1/2

            rounded-full

            bg-white

            px-4

            py-1

            text-xs

            font-semibold

            text-black

          "

        >

          ⭐ Most Popular

        </div>


      )}








      <h2 className="text-2xl font-bold text-white">

        {name}

      </h2>






      <div className="mt-6 flex items-end gap-2">


        <span className="text-5xl font-bold text-white">

          {price}

        </span>



        <span className="pb-2 text-zinc-400">

          /month

        </span>


      </div>







      <p className="mt-4 text-zinc-400">

        {description}

      </p>







      <div className="my-8 h-px bg-zinc-800" />








      <ul className="space-y-4">





        <li className="flex items-center gap-3 text-white">

          <Check size={18}/>

          {videos} AI Videos

        </li>






        <li className="flex items-center gap-3 text-white">

          <Check size={18}/>

          Up to 5 seconds each

        </li>






        <li className="flex items-center gap-3 text-white">

          <Check size={18}/>

          HD Quality

        </li>






        <li className="flex items-center gap-3 text-white">

          <Check size={18}/>

          Fast AI Generation

        </li>






        {plan !== "basic" && (


          <li className="flex items-center gap-3 text-white">

            <Check size={18}/>

            Priority Queue

          </li>


        )}






        {(plan === "pro" || plan === "business") && (


          <li className="flex items-center gap-3 text-white">

            <Sparkles size={18}/>

            Premium Support

          </li>


        )}







      </ul>








      <button


        onClick={checkout}


        disabled={loading}



        className="

          mt-10

          w-full

          rounded-xl

          bg-white

          py-3

          text-sm

          font-semibold

          text-black

          transition

          hover:bg-zinc-200

          disabled:opacity-60

        "


      >



        {

          loading

          ? "Redirecting..."

          : "Choose Plan"

        }



      </button>







    </div>


  );


}