import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { stripe } from "@/lib/stripe";
import { planPurchase } from "@/lib/actions/seeker/planPurchase";

const PaymentSuccessPage = async ({ searchParams }) => {
    const { session_id } = await searchParams
    const session = await stripe.checkout.sessions.retrieve(session_id);


    const Customer_Details = {
        subscriberId: session.metadata.userId,
        name: session.customer_details.name,
        email: session.customer_details.email,
        planPurchase: session.metadata.choosedPlan,



    }
    // this is the post request of subscriber

    const res = await planPurchase(Customer_Details);

    console.log(res)
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/* Success Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                    <CheckCircle2 className="h-12 w-12 text-success" />
                </div>

                {/* Heading */}
                <h1 className="mt-8 text-4xl font-bold">
                    Payment Successful 🎉
                </h1>

                {/* Description */}
                <p className="mt-4 text-base-content/70 leading-7">
                    Thank you for your purchase! Your subscription has been received and
                    is being activated. This usually takes just a few seconds.
                </p>

                <p className="mt-2 text-base-content/60">
                    Once activated, you'll immediately have access to your new plan and
                    its benefits.
                </p>

                {/* Status */}
                <div className="mt-8 rounded-2xl border border-success/20 bg-success/5 p-5">
                    <p className="font-medium text-success">
                        ✓ Your payment was completed successfully.
                    </p>
                    <p className="mt-2 text-sm text-base-content/60">
                        If your subscription doesn't appear within a minute, simply refresh
                        the page or visit your dashboard.
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
                    <Link href="/" className="btn btn-primary">
                        Go to Dashboard
                    </Link>

                    <Link href="/jobs" className="btn btn-outline">
                        Browse Jobs
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PaymentSuccessPage;