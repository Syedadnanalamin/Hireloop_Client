"use client";

import Link from "next/link";
import { 
    Globe,
    Compass,
    Layers,
    Thunderbolt
} from "@gravity-ui/icons";

const companiesData = [
    {
        id: 1,
        name: "Google Inc.",
        industry: "Technology",
        location: "Mountain View",
        activeJobs: 24,
        icon: Globe,
    },
    {
        id: 2,
        name: "Meta Platforms",
        industry: "Social Media",
        location: "Menlo Park",
        activeJobs: 18,
        icon: Compass,
    },
    {
        id: 3,
        name: "Stripe",
        industry: "Fintech",
        location: "San Francisco",
        activeJobs: 12,
        icon: Layers,
    },
    {
        id: 4,
        name: "Tesla",
        industry: "Automotive",
        location: "Austin",
        activeJobs: 31,
        icon: Thunderbolt,
    },
];

export default function TopCompanies() {
    return (
        <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-6 shadow-lg w-full lg:max-w-md flex flex-col justify-between">
            <div>
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                        My Top Companies
                    </h3>
                    <Link 
                        href="/recruiter/mycompany" 
                        className="text-xs text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                        View all
                    </Link>
                </div>

                <div className="space-y-4">
                    {companiesData.map((company) => {
                        const Icon = company.icon;
                        return (
                            <div 
                                key={company.id} 
                                className="group flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.01] transition-all duration-150"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Company Icon container */}
                                    <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#5C53FE] group-hover:bg-[#5C53FE]/10 transition-all duration-200">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-white group-hover:text-[#5C53FE] transition-colors duration-200">
                                            {company.name}
                                        </h4>
                                        <p className="text-xs text-zinc-500 mt-0.5">
                                            {company.industry} • {company.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="text-sm font-bold text-white block">
                                        {company.activeJobs}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 uppercase font-medium tracking-wider">
                                        Active Jobs
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
                <Link 
                    href="/recruiter/mycompany"
                    className="w-full inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:border-[#5C53FE] hover:bg-[#5C53FE]/5 transition-all duration-200"
                >
                    View All Companies
                </Link>
            </div>
        </div>
    );
}
