import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { plan_price_id, stripe } from '../../../lib/stripe'
import { Usersession } from '@/lib/core/session'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')
        const formData = await request.formData()
        const choosedPlan = formData.get('planInfo');
        const ProductId = plan_price_id[choosedPlan];

        const userSession = await Usersession();

        const userId = userSession?.user?.id;


        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                    price: ProductId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            "metadata": {
                choosedPlan,
                userId

            },
            success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}