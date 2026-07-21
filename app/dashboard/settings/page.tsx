"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  User,
  CreditCard,
  Activity,
  AlertTriangle
} from "lucide-react";

import { supabase } from "@/lib/supabase/client";


export default function SettingsPage() {


  const router = useRouter();


  const [loading,setLoading] = useState(true);


  const [email,setEmail] = useState("");
  const [plan,setPlan] = useState("basic");
  const [credits,setCredits] = useState(0);
  const [videos,setVideos] = useState(0);




  useEffect(()=>{


    async function loadData(){


      try {


        const {
          data:{
            user
          }
        } = await supabase.auth.getUser();




        // SI NO HAY USUARIO MANDA AL LOGIN

        if(!user){

          router.replace("/auth/login");

          return;

        }




        setEmail(
          user.email || ""
        );






        const {
          data:profile
        } = await supabase
          .from("profiles")
          .select(
            "plan,credits"
          )
          .eq(
            "id",
            user.id
          )
          .single();





        if(profile){


          setPlan(
            profile.plan
          );


          setCredits(
            profile.credits
          );


        }





        const {
          count
        } = await supabase
          .from("projects")
          .select(
            "*",
            {
              count:"exact",
              head:true
            }
          )
          .eq(
            "user_id",
            user.id
          );





        setVideos(
          count || 0
        );



        setLoading(false);



      } catch(error){


        console.error(
          error
        );


        router.replace(
          "/auth/login"
        );


      }



    }




    loadData();



  },[router]);







  if(loading){


    return (

      <div className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-zinc-950
      text-white
      ">

        Loading...

      </div>

    );


  }








return (


<div className="p-8 text-white">


<div className="max-w-4xl">



<h1 className="text-4xl font-bold">
Settings
</h1>



<p className="mt-3 text-zinc-400">
Manage your account, subscription and usage.
</p>






<div className="mt-10 space-y-6">







<section className="
rounded-3xl
border
border-zinc-800
bg-zinc-900/50
p-6
">


<div className="flex items-center gap-3">


<User size={20}/>


<h2 className="text-xl font-semibold">
Account
</h2>


</div>





<div className="mt-6 space-y-4">



<div>

<p className="text-sm text-zinc-400">
Email
</p>


<p className="mt-1">
{email}
</p>


</div>





<div>


<p className="text-sm text-zinc-400">
Account status
</p>


<p className="mt-1 text-green-400">
Active
</p>


</div>



</div>



</section>









<section className="
rounded-3xl
border
border-zinc-800
bg-zinc-900/50
p-6
">



<div className="flex items-center gap-3">


<CreditCard size={20}/>


<h2 className="text-xl font-semibold">
Subscription
</h2>


</div>





<div className="mt-6">


<p className="text-sm text-zinc-400">
Current plan
</p>



<p className="
mt-1
text-3xl
font-bold
capitalize
">

{plan}

</p>




<p className="mt-4 text-zinc-400">
Credits available
</p>



<p className="text-xl font-semibold">
{credits}
</p>






<button
className="
mt-6
rounded-xl
bg-white
px-5
py-3
text-sm
font-medium
text-black
hover:bg-zinc-200
"
>
Manage Billing
</button>




</div>



</section>









<section className="
rounded-3xl
border
border-zinc-800
bg-zinc-900/50
p-6
">



<div className="flex items-center gap-3">


<Activity size={20}/>



<h2 className="text-xl font-semibold">
Usage
</h2>


</div>





<div className="
mt-6
grid
grid-cols-2
gap-5
">





<div className="
rounded-2xl
bg-zinc-800
p-5
">


<p className="text-sm text-zinc-400">
Videos generated
</p>


<p className="mt-2 text-3xl font-bold">
{videos}
</p>


</div>






<div className="
rounded-2xl
bg-zinc-800
p-5
">


<p className="text-sm text-zinc-400">
Credits remaining
</p>


<p className="mt-2 text-3xl font-bold">
{credits}
</p>


</div>




</div>



</section>









<section className="
rounded-3xl
border
border-red-900/40
bg-red-950/20
p-6
">



<div className="flex items-center gap-3">


<AlertTriangle size={20}/>



<h2 className="text-xl font-semibold text-red-400">
Danger Zone
</h2>


</div>





<p className="mt-4 text-sm text-zinc-400">
Delete your account and all generated content permanently.
</p>





<button
className="
mt-5
rounded-xl
border
border-red-500
px-5
py-3
text-sm
text-red-400
hover:bg-red-500
hover:text-white
"
>
Delete Account
</button>




</section>






</div>


</div>


</div>


);


}