export const PLANS = {
  basic: {
    name: "Basic",
    priceId: process.env.PADDLE_BASIC_PRICE_ID!,
  },

  starter: {
    name: "Starter",
    priceId: process.env.PADDLE_STARTER_PRICE_ID!,
  },

  pro: {
    name: "Pro",
    priceId: process.env.PADDLE_PRO_PRICE_ID!,
  },

  business: {
    name: "Business",
    priceId: process.env.PADDLE_BUSINESS_PRICE_ID!,
  },
} as const;

export type Plan = keyof typeof PLANS;