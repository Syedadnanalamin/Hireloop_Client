"use client";

import { useState } from "react";
import { Check, Sparkles, HelpCircle, Zap, ShieldCheck } from "lucide-react";

export default function PricingCard({ subscriptionPlans }) {
    const [type, setType] = useState("seeker");

    // Safe fallback to prevent runtime crashes if subscriptionPlans is not passed or loaded yet
    const plans = Array.isArray(subscriptionPlans)
        ? subscriptionPlans.filter((plan) => plan.userType === type)
        : [];

    console.log("this is plan req", plans);
    console.log("this is type", type);

    // Helpers to handle currency formatting and billing cycles cleanly
    const getCurrencySymbol = (currency) => {
        return currency === "USD" ? "$" : (currency || "$");
    };

    const getBillingCycleText = (cycle) => {
        if (!cycle) return "";
        if (cycle.toLowerCase() === "monthly") return "/ month";
        if (cycle.toLowerCase() === "yearly") return "/ year";
        if (cycle.toLowerCase() === "forever" || cycle.toLowerCase() === "lifetime") return "/ lifetime";
        return `/ ${cycle}`;
    };

    return (
        <section className="relative overflow-hidden bg-base-100 py-24 md:py-32">
            {/* Background Decorative Glowing Blobs */}
            <div className="pointer-events-none absolute top-12 left-1/4 h-96 w-96 rounded-full bg-primary/10 opacity-30 blur-3xl animate-pulse"></div>
            <div className="pointer-events-none absolute bottom-12 right-1/4 h-96 w-96 rounded-full bg-secondary/15 opacity-20 blur-3xl animate-pulse delay-75"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading section with premium badge and typography */}
                <div className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 animate-spin-slow" />
                        Pricing Plans
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-base-content sm:text-5xl lg:text-6xl">
                        Find the Perfect{" "}
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                            Plan for Success
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-base-content/70">
                        Whether you're searching for your dream job or hiring top-tier industry talent,
                        HireLoop has a flexible plan tailored to match your ambitions.
                    </p>

                    {/* Toggle Slider */}
                    <div className="mt-10 flex justify-center">
                        <div className="relative flex rounded-full bg-base-200/80 p-1.5 shadow-inner backdrop-blur-md border border-base-300">
                            {/* Sliding active background indicator */}
                            <div
                                className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-primary shadow-lg transition-transform duration-300 ease-out ${type === "recruiter" ? "translate-x-full" : "translate-x-0"
                                    }`}
                            />

                            <button
                                onClick={() => setType("seeker")}
                                className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 ease-out ${type === "seeker" ? "text-primary-content" : "text-base-content/70 hover:text-base-content"
                                    }`}
                            >
                                Job Seekers
                            </button>

                            <button
                                onClick={() => setType("recruiter")}
                                className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 ease-out ${type === "recruiter" ? "text-primary-content" : "text-base-content/70 hover:text-base-content"
                                    }`}
                            >
                                Recruiters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
                    {plans.map((plan) => {
                        const isPopular = plan.popular;
                        return (
                            <div
                                key={plan.name || plan.id}
                                className={`group relative flex flex-col rounded-3xl border transition-all duration-500 hover:-translate-y-2.5 ${isPopular
                                    ? "border-primary/50 bg-gradient-to-b from-primary/10 via-base-200/90 to-base-200 shadow-2xl shadow-primary/10 ring-2 ring-primary/20"
                                    : "border-base-300 bg-base-200/50 hover:border-base-content/20 hover:shadow-xl"
                                    } backdrop-blur-md overflow-hidden`}
                            >
                                {isPopular && (
                                    <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-primary to-secondary text-primary-content text-xs font-black uppercase tracking-wider py-1.5 text-center shadow-sm">
                                        ✨ Most Popular Choice ✨
                                    </div>
                                )}

                                <form action="/api/checkout_sessions" method="POST" className="flex flex-col flex-grow">
                                    <input type="hidden" name="planInfo" value={plan.id} />

                                    <div className={`card-body p-8 sm:p-10 flex flex-col flex-grow ${isPopular ? "pt-12" : ""}`}>

                                        {/* Plan Name */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-black text-base-content tracking-tight">
                                                {plan.name}
                                            </h3>
                                            {isPopular ? (
                                                <div className="rounded-full bg-primary/20 px-3 py-1 text-xs font-extrabold text-primary animate-pulse">
                                                    Popular
                                                </div>
                                            ) : (
                                                <div className="rounded-full bg-base-300 px-3 py-1 text-xs font-bold text-base-content/60">
                                                    Standard
                                                </div>
                                            )}
                                        </div>

                                        {/* Price Area */}
                                        <div className="my-8 flex items-baseline gap-1">
                                            <span className="text-6xl font-black tracking-tight text-base-content bg-gradient-to-br from-base-content to-base-content/70 bg-clip-text">
                                                {getCurrencySymbol(plan.currency)}{plan.price}
                                            </span>
                                            <span className="text-base font-medium text-base-content/60">
                                                {getBillingCycleText(plan.billingCycle || plan.duration)}
                                            </span>
                                        </div>

                                        {/* Features Divider */}
                                        <div className="h-[1px] w-full bg-base-content/10 mb-8" />

                                        {/* Features List */}
                                        <div className="space-y-4 flex-grow">
                                            {plan.features && plan.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 text-sm text-base-content/85 group-hover:text-base-content transition-colors duration-200"
                                                >
                                                    <div className={`mt-0.5 rounded-full p-0.5 ${isPopular ? "bg-primary/25 text-primary" : "bg-success/20 text-success"
                                                        }`}>
                                                        <Check className="h-4 w-4 stroke-[3]" />
                                                    </div>
                                                    <span className="leading-snug">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Button/CTA Area */}
                                        <div className="mt-10">
                                            <button
                                                className={`relative w-full rounded-2xl py-4 px-6 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 overflow-hidden group/btn ${isPopular
                                                    ? "bg-gradient-to-r from-primary via-purple-600 to-secondary text-primary-content shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98]"
                                                    : "bg-base-content/10 hover:bg-base-content text-base-content hover:text-base-100 hover:shadow-lg hover:shadow-base-content/5 active:scale-[0.98]"
                                                    }`}
                                                type="submit"
                                                role="link"
                                            >
                                                {/* Button Text */}
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    {plan.button}
                                                    <Zap className="h-4 w-4 fill-current group-hover/btn:scale-125 transition-transform duration-200" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}