import { NextResponse } from "next/server";

import { paddle } from "@/lib/paddle/client";
import { PLANS, type Plan } from "@/lib/paddle/plans";


export async function POST(req: Request) {


  try {

    const body = await req.json();


    const plan = body.plan as Plan;



    if(!plan || !PLANS[plan]){

      return NextResponse.json(
        {
          error:"Invalid plan"
        },
        {
          status:400
        }
      );

    }



    const priceId = PLANS[plan].priceId;



    const transaction = await paddle.transactions.create({

      items:[
        {
          priceId,
          quantity:1
        }
      ]

    });



    return NextResponse.json({

      checkoutUrl:
        transaction.checkout?.url

    });



  } catch(error){


    console.error(error);


    return NextResponse.json(
      {
        error:"Checkout creation failed"
      },
      {
        status:500
      }
    );

  }


}