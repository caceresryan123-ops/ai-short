import PricingCard from "@/components/pricing/PricingCard";


const plans = [
  {
    name: "Basic",
    price: "$9/month",
    plan: "basic",
    description:
      "Perfect for creating your first AI shorts."
  },

  {
    name: "Starter",
    price: "$19/month",
    plan: "starter",
    description:
      "More generations for growing creators."
  },

  {
    name: "Pro",
    price: "$39/month",
    plan: "pro",
    description:
      "Advanced AI video creation for professionals."
  },

  {
    name: "Business",
    price: "$70/month",
    plan: "business",
    description:
      "For teams and high-volume creators."
  },
];



export default function PricingPage(){

  return (

    <div className="min-h-screen p-8 text-white">


      <div className="mx-auto max-w-6xl">


        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Choose your plan
          </h1>


          <p className="mt-4 text-zinc-400">
            Create AI videos faster with more credits.
          </p>


        </div>




        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
          "
        >


          {plans.map((item)=>(

            <PricingCard
              key={item.plan}
              name={item.name}
              price={item.price}
              plan={item.plan}
              description={item.description}
            />

          ))}


        </div>


      </div>


    </div>

  );

}