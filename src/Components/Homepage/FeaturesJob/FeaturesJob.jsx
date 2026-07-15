import {
    Magnifier,
    ChartColumn,
    Briefcase,
    Bookmark,
    Sparkles,
    FileText,
    Star,
    ArrowUpRight,
} from "@gravity-ui/icons";

export default function FeaturesJob() {
    return (
        <section className="bg-[#1F252D] py-10">
            <div className="container mx-auto px-5 ">

                {/* Heading */}
                <div className="text-center mb-20">

                    <div className="flex items-center justify-center gap-3 mb-4">

                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>

                        <p className="uppercase tracking-[4px] text-sm text-gray-400">
                            Features Job
                        </p>

                        <span className="w-2 h-2 rounded-full bg-violet-500"></span>

                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Everything you need
                        <br />
                        to succeed
                    </h2>

                </div>

                {/* Features */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">

                    {/* 1 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <Magnifier className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Smart Search
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Find your ideal job with advanced filters.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <ChartColumn className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Salary Insights
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Get real salary data to negotiate confidently.
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <Briefcase className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Top Companies
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Apply to verified companies hiring now.
                            </p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <Bookmark className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Saved Jobs
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Save opportunities and access them anytime.
                            </p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <Sparkles className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                One-Click Apply
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Apply instantly with a single click.
                            </p>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <FileText className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Resume Builder
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Create professional resumes with modern templates.
                            </p>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <Star className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Skill Matching
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Discover jobs that match your skills and experience.
                            </p>
                        </div>
                    </div>

                    {/* 8 */}
                    <div className="group flex gap-5 rounded-2xl border border-white/5 bg-[#252C35]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30 hover:bg-[#2B333D] hover:shadow-[0_15px_40px_rgba(139,92,246,.18)]">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-[#2D3540] transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                            <ArrowUpRight className="h-7 w-7 text-violet-400 transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-300">
                                Career Growth
                            </h3>

                            <p className="mt-2 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                Learn with career tips and interview resources.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}