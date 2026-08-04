"use client";

import {
    Briefcase,
    Persons,
    File,
    CircleCheck,
} from "@gravity-ui/icons";

export default function Jobstats({ totalJobs, totalApplicants, activeJobs, jobsClosed }) {
    const statsData = [
        {
            id: 1,
            title: "Total Job Posts",
            value: totalJobs,
            icon: File,
        },
        {
            id: 2,
            title: "Total Applicants",
            value: totalApplicants,
            icon: Persons,
        },
        {
            id: 3,
            title: "Active Jobs",
            value: activeJobs,
            icon: Briefcase,
        },
        {
            id: 4,
            title: "Jobs Closed",
            value: jobsClosed,
            icon: CircleCheck,
        },
    ];

    return (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {statsData.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.id}
                        className="cursor-pointer rounded-xl border border-white/10 bg-[#1B1B1B] p-5 transition-all duration-300 hover:border-[#5C53FE]/60 hover:-translate-y-1"
                    >
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-300">
                            <Icon className="h-5 w-5" />
                        </div>

                        <p className="text-sm text-zinc-400">
                            {item.title}
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-white">
                            {item.value}
                        </h2>
                    </div>
                );
            })}
        </section>
    );
}
