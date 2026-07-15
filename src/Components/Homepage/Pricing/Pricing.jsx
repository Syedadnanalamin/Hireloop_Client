import {
    CrownDiamond,
    ChartColumn,
    Thunderbolt,
    Check,
    ArrowRight,
} from "@gravity-ui/icons";

export default function Pricing() {
    return (
        <section className="bg-[#1F252D] py-28">
            <div className="container mx-auto px-5">

                {/* Heading */}
                <div className="text-center">

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-2 w-2 rounded-full bg-violet-500"></span>

                        <p className="uppercase tracking-[4px] text-sm text-gray-400">
                            Pricing
                        </p>

                        <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Pay for the leverage,
                        <br />
                        not the listings
                    </h2>

                </div>

                {/* Toggle */}

                <div className="mt-10 flex justify-center">
                    <div className="rounded-full border border-white/10 bg-[#252C35] p-1 flex">

                        <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
                            Monthly
                        </button>

                        <button className="rounded-full px-5 py-2 text-sm text-gray-400">
                            Yearly
                        </button>

                        <span className="ml-2 flex items-center rounded-full bg-violet-600 px-3 text-xs font-semibold text-white">
                            25% OFF
                        </span>

                    </div>
                </div>

                {/* Pricing Cards */}

                <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Starter */}

                    <div className="rounded-3xl border border-white/10 bg-[#252C35]/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                                    <CrownDiamond className="h-5 w-5 text-violet-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    Starter
                                </h3>
                            </div>

                            <div>
                                <span className="text-4xl font-bold text-white">$0</span>
                                <span className="text-gray-400 text-sm">/month</span>
                            </div>

                        </div>

                        <p className="mt-8 text-gray-300">
                            Start building your insights hub:
                        </p>

                        <ul className="mt-6 space-y-4">

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Daily AI match brief (Top 5)
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Verified salary bands
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Company insight dashboards
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                One-click apply
                            </li>

                        </ul>

                        <button className="btn w-full mt-10 rounded-xl border-0 bg-[#313A46] text-white hover:bg-violet-600">
                            Choose This Plan
                            <ArrowRight className="h-4 w-4" />
                        </button>

                    </div>

                    {/* Growth */}

                    <div className="rounded-3xl border border-violet-500/40 bg-gradient-to-b from-[#2A313B] to-[#1F252D] p-8 shadow-[0_20px_50px_rgba(139,92,246,.18)] scale-105">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                                    <ChartColumn className="h-5 w-5 text-violet-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    Growth
                                </h3>
                            </div>

                            <div>
                                <span className="text-4xl font-bold text-white">$17</span>
                                <span className="text-gray-400 text-sm">/month</span>
                            </div>

                        </div>

                        <p className="mt-8 text-gray-300">
                            Everything in Starter plus:
                        </p>

                        <ul className="mt-6 space-y-4">

                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="h-4 w-4 text-violet-400" />
                                Unlimited AI job matches
                            </li>

                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="h-4 w-4 text-violet-400" />
                                Salary comparison tools
                            </li>

                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="h-4 w-4 text-violet-400" />
                                Resume optimization
                            </li>

                            <li className="flex items-center gap-3 text-gray-300">
                                <Check className="h-4 w-4 text-violet-400" />
                                Unlimited applications
                            </li>

                        </ul>

                        <button className="btn w-full mt-10 rounded-xl border-0 bg-white text-black hover:bg-gray-200">
                            Choose This Plan
                            <ArrowRight className="h-4 w-4" />
                        </button>

                    </div>

                    {/* Premium */}

                    <div className="rounded-3xl border border-white/10 bg-[#252C35]/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                                    <Thunderbolt className="h-5 w-5 text-violet-400" />
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    Premium
                                </h3>
                            </div>

                            <div>
                                <span className="text-4xl font-bold text-white">$99</span>
                                <span className="text-gray-400 text-sm">/month</span>
                            </div>

                        </div>

                        <p className="mt-8 text-gray-300">
                            Everything in Growth plus:
                        </p>

                        <ul className="mt-6 space-y-4">

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Multi-profile portfolio
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Shared recruiter notes
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Recruiter dashboard
                            </li>

                            <li className="flex items-center gap-3 text-gray-400">
                                <Check className="h-4 w-4 text-violet-400" />
                                Priority support
                            </li>

                        </ul>

                        <button className="btn w-full mt-10 rounded-xl border-0 bg-[#313A46] text-white hover:bg-violet-600">
                            Choose This Plan
                            <ArrowRight className="h-4 w-4" />
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}