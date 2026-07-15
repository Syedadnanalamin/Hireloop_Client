import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const plan_price_id = {
    seekerPro: "price_1TtAZDAePujBpFOA1za18F0I",
    seekerPremium: "price_1TtObpAePujBpFOAR3TSRJrK",
    recruiterGrowth: "price_1TtOcAAePujBpFOA8x4g0Of8",
    recruiterEnterprice: "price_1TtOccAePujBpFOAowHdlUiL"


}