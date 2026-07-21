import PricingCard from "@/components/pricing/PricingCard";


const plans = [
  {
    name:"Basic",
    price:"$9",
    plan:"basic",
    description:
      "Perfect for starting with AI videos."
  },

  {
    name:"Starter",
    price:"$19",
    plan:"starter",
    description:
      "More credits for growing creators."
  },

  {
    name:"Pro",
    price:"$39",
    plan:"pro",
    description:
      "For serious content creators."
  },

  {
    name:"Business",
    price:"$69",
    plan:"business",
    description:
      "For teams and large projects."
  }
];



export default function BillingPage(){


  return (

    <div className="p-8 text-white">


      <h1 className="text-4xl font-bold">
        Billing & Plans
      </h1>


      <p className="mt-3 text-zinc-400">
        Choose the plan that fits your video creation needs.
      </p>



      <div
        className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >


        {plans.map((plan)=>(

          <PricingCard
            key={plan.plan}
            {...plan}
          />

        ))}


      </div>


    </div>

  );

}