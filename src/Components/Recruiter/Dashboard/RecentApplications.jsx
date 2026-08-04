"use client";

import Link from "next/link";

const applicationsData = [
    {
        id: 1,
        name: "Julianne Moore",
        role: "Senior Product Designer",
        date: "Oct 24, 2023",
        experience: "6 years",
        status: "Interviewing",
        colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
        id: 2,
        name: "Robert Downey",
        role: "Backend Engineer",
        date: "Oct 23, 2023",
        experience: "4 years",
        status: "New",
        colorClass: "text-zinc-300 bg-white/5 border-white/10",
    },
    {
        id: 3,
        name: "Emma Stone",
        role: "Marketing Lead",
        date: "Oct 22, 2023",
        experience: "8 years",
        status: "Reviewing",
        colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
        id: 4,
        name: "Chris Pratt",
        role: "Product Manager",
        date: "Oct 21, 2023",
        experience: "5 years",
        status: "Rejected",
        colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
];

export default function RecentApplications() {
    return (
        <div className="rounded-xl border border-white/10 bg-[#1B1B1B] p-6 shadow-lg flex-1">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-wide">
                    Recent Applications
                </h3>
                <Link 
                    href="/recruiter/applications" 
                    className="text-xs text-zinc-400 hover:text-white transition-colors duration-200"
                >
                    View all
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            <th className="pb-3 pr-4">Candidate Name</th>
                            <th className="pb-3 px-4">Role</th>
                            <th className="pb-3 px-4">Date Applied</th>
                            <th className="pb-3 px-4">Experience</th>
                            <th className="pb-3 pl-4 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm text-zinc-300">
                        {applicationsData.map((candidate) => (
                            <tr key={candidate.id} className="group hover:bg-white/[0.02] transition-colors duration-150">
                                <td className="py-4 pr-4 flex items-center gap-3">
                                    {/* Avatar circle */}
                                    <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-zinc-400 text-xs">
                                        {candidate.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="font-semibold text-white group-hover:text-[#5C53FE] transition-colors duration-200">
                                        {candidate.name}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-zinc-400">
                                    {candidate.role}
                                </td>
                                <td className="py-4 px-4 text-zinc-400">
                                    {candidate.date}
                                </td>
                                <td className="py-4 px-4 text-zinc-400">
                                    {candidate.experience}
                                </td>
                                <td className="py-4 pl-4 text-right font-medium">
                                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${candidate.colorClass}`}>
                                        {candidate.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
