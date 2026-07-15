"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingCard() {
    const [type, setType] = useState("seeker");

    const seekerPlans = [
        {
            name: "Free",
            price: "$0",
            duration: "/forever",
            popular: false,
            button: "Get Started",
            features: [
                "Browse & save up to 10 jobs",
                "Apply to 3 jobs per month",
                "Basic profile",
                "Email alerts",
            ],
        },
        {
            name: "Pro",
            price: "$19",
            duration: "/month",
            popular: true,
            button: "Upgrade to Pro",
            features: [
                "Apply to 30 jobs/month",
                "Unlimited saved jobs",
                "Application tracking",
                "Salary insights",
            ],
        },
        {
            name: "Premium",
            price: "$39",
            duration: "/month",
            popular: false,
            button: "Go Premium",
            features: [
                "Unlimited applications",
                "Profile boost to recruiters",
                "Early access to new jobs",
                "Priority support",
            ],
        },
    ];

    const recruiterPlans = [
        {
            name: "Free",
            price: "$0",
            duration: "/forever",
            popular: false,
            button: "Start Hiring",
            features: [
                "3 active job posts",
                "Basic applicant management",
                "Standard listing visibility",
            ],
        },
        {
            name: "Growth",
            price: "$49",
            duration: "/month",
            popular: true,
            button: "Choose Growth",
            features: [
                "10 active job posts",
                "Applicant tracking",
                "Basic analytics",
                "Email support",
            ],
        },
        {
            name: "Enterprise",
            price: "$149",
            duration: "/month",
            popular: false,
            button: "Contact Sales",
            features: [
                "50 active job posts",
                "Advanced analytics dashboard",
                "Featured job listings",
                "Team collaboration",
                "Custom branding",
                "Priority support",
            ],
        },
    ];

    const plans = type === "seeker" ? seekerPlans : recruiterPlans;

    return (
        <section className="bg-base-100 py-24">
            <div className="mx-auto max-w-7xl px-4">
                {/* Heading */}
                <div className="space-y-5 text-center">
                    <div className="badge badge-primary badge-outline badge-lg">
                        Pricing Plans
                    </div>

                    <h2 className="text-4xl font-bold lg:text-5xl">
                        Find the Perfect Plan
                    </h2>

                    <p className="mx-auto max-w-2xl text-base-content/70">
                        Whether you're searching for your dream job or hiring top talent,
                        HireLoop has a plan designed to help you succeed.
                    </p>

                    {/* Toggle */}
                    <div className="mt-10 flex justify-center">
                        <div className="join rounded-full bg-base-200 p-1">
                            <button
                                onClick={() => setType("seeker")}
                                className={`btn join-item rounded-full ${type === "seeker" ? "btn-primary" : "btn-ghost"
                                    }`}
                            >
                                Job Seekers
                            </button>

                            <button
                                onClick={() => setType("recruiter")}
                                className={`btn join-item rounded-full ${type === "recruiter" ? "btn-primary" : "btn-ghost"
                                    }`}
                            >
                                Recruiters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular
                                ? "border-primary bg-base-200 shadow-xl"
                                : "border-base-300 bg-base-200"
                                }`}
                        >


                            <form action="/api/checkout_sessions" method="POST">

                                <div className="card-body">
                                    {plan.popular && (
                                        <div className="badge badge-primary w-fit">
                                            Most Popular
                                        </div>
                                    )}

                                    <h3 className="mt-2 text-3xl font-bold">{plan.name}</h3>

                                    <div className="my-6">
                                        <span className="text-5xl font-black">{plan.price}</span>
                                        <span className="text-base-content/60">{plan.duration}</span>
                                    </div>

                                    <div className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-3"
                                            >
                                                <Check className="mt-1 h-5 w-5 shrink-0 text-success" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="card-actions mt-10">
                                        <button
                                            className={`btn w-full ${plan.popular ? "btn-primary" : "btn-outline"
                                                }`} type="submit" role="link"
                                        >
                                            {plan.button}
                                        </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="mx-auto mt-28 max-w-4xl">
                    <h2 className="mb-8 text-center text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq" defaultChecked />
                            <div className="collapse-title text-lg font-semibold">
                                Can I cancel my subscription anytime?
                            </div>
                            <div className="collapse-content text-base-content/70">
                                Yes. You can cancel whenever you want. Your subscription will
                                remain active until the end of your current billing period.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq" />
                            <div className="collapse-title text-lg font-semibold">
                                Do you offer refunds?
                            </div>
                            <div className="collapse-content text-base-content/70">
                                Refund requests are reviewed on a case-by-case basis depending
                                on the subscription and billing history.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq" />
                            <div className="collapse-title text-lg font-semibold">
                                Which payment methods are accepted?
                            </div>
                            <div className="collapse-content text-base-content/70">
                                We accept all major credit/debit cards and other secure online
                                payment methods.
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq" />
                            <div className="collapse-title text-lg font-semibold">
                                Can I switch plans later?
                            </div>
                            <div className="collapse-content text-base-content/70">
                                Absolutely. You can upgrade or downgrade your subscription at
                                any time from your dashboard.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}